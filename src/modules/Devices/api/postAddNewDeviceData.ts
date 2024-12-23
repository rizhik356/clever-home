import authorizedAxiosInstance from '../../../shared/api/authorizedAxiosInstance.ts'
import apiUrls from '../../../shared/api/apiUrls.ts'

const postAddNewDeviceData = async (data: object) => {
  const response = await authorizedAxiosInstance.post(
    apiUrls.devices.add_user_device,
    data,
  )
  return response.data
}

export default postAddNewDeviceData
