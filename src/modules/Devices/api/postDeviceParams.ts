import authorizedAxiosInstance from '../../../shared/api/authorizedAxiosInstance.ts'
import apiUrls from '../../../shared/api/apiUrls.ts'

const postDeviceParam = async (params: object) => {
  const response = await authorizedAxiosInstance.post(
    apiUrls.devices.post_device_params,
    params,
  )
  return response.data
}

export default postDeviceParam
