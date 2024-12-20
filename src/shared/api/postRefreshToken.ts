import apiUrls from './apiUrls.ts'
import unAuthorizedAxiosInstance from './unAuthorizedAxiosInstance.ts'

const postRefreshToken = async (values: object) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.auth.refresh_token,
    values,
  )
  return response.data
}

export default postRefreshToken
