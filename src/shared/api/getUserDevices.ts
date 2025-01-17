import authorizedAxiosInstance from './authorizedAxiosInstance.ts'
import apiUrls from './apiUrls.ts'

const gwtUserDevices = async (id: number) => {
  const response = await authorizedAxiosInstance.get(
    `${apiUrls.devices.allDevices}/${id}`,
  )
  return response.data
}

export default gwtUserDevices
