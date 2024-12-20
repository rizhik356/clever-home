import authorizedAxiosInstance from '../api/authorizedAxiosInstance.ts'
import { getToken } from '../store/selectors.ts'
import store from '../store'

const makeAuthorizedAxiosRequest = () => {
  authorizedAxiosInstance.interceptors.request.use(
    (config) => {
      if (getToken(store.getState())) {
        config.headers['Authorization'] = `Bearer ${getToken(store.getState())}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
}

export default makeAuthorizedAxiosRequest
