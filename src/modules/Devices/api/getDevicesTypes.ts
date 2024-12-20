import authorizedAxiosInstance from '../../../shared/api/authorizedAxiosInstance.ts'
import apiUrls from '../../../shared/api/apiUrls.ts'

const getDevicesTypes = async () => {
  const response = await authorizedAxiosInstance.get(
    apiUrls.devices.get_devices_types,
  )
  return response.data
}

export default getDevicesTypes
