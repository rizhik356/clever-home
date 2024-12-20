import authorizedAxiosInstance from './authorizedAxiosInstance.ts'
import apiUrls from './apiUrls.ts'

const getRooms = async () => {
  const response = await authorizedAxiosInstance.get(apiUrls.rooms.get_rooms)
  return response.data
}

export default getRooms
