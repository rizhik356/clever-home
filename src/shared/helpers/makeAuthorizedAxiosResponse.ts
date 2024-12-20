import authorizedAxiosInstance from '../api/authorizedAxiosInstance.ts'
import postRefreshToken from '../api/postRefreshToken.ts'
import makeRefreshParams from './makeRefreshParams.ts'
import addNewTokens from './addNewTokens.ts'
import logOut from './logout.ts'
import { errorNotification } from '../../ui/notifications.ts'

const makeAuthorizedAxiosResponse = () => {
  const refreshValues: {
    isRefreshing: boolean
    refreshSubscribers: (() => void)[]
  } = {
    isRefreshing: false,
    refreshSubscribers: [],
  }

  authorizedAxiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const originalRequest = error.config
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        if (!refreshValues.isRefreshing) {
          refreshValues.isRefreshing = true
          return postRefreshToken(makeRefreshParams())
            .then((data) => {
              refreshValues.isRefreshing = false
              addNewTokens(data)

              authorizedAxiosInstance.defaults.headers.common['Authorization'] =
                `Bearer ${data.access_token}`
              refreshValues.refreshSubscribers.forEach((callback) => callback())
              refreshValues.refreshSubscribers = []

              return authorizedAxiosInstance(originalRequest)
            })
            .catch((err) => {
              refreshValues.isRefreshing = false

              if (err.response.status === 400) {
                logOut()
              } else {
                errorNotification(err)
              }
            })
        } else {
          return new Promise((resolve) => {
            refreshValues.refreshSubscribers.push(() => {
              resolve(authorizedAxiosInstance(originalRequest))
            })
          })
        }
      } else {
        return Promise.reject(error)
      }
    },
  )
}

export default makeAuthorizedAxiosResponse
