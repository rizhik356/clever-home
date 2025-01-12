import authorizedAxiosInstance from '../../../shared/api/authorizedAxiosInstance.ts'
import apiUrls from '../../../shared/api/apiUrls.ts'

const gwtUserDevices = async (id: number) => {
  const response = await authorizedAxiosInstance.get(
    `${apiUrls.devices.allDevices}/${id}`,
  )
  return response.data
}

export default gwtUserDevices
