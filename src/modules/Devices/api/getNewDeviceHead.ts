import axios from 'axios'

const getNewDeviceHead = async () => {
  const response = await axios.head(import.meta.env.VITE_NEW_DEVICE_URL, {
    timeout: 3000,
  })
  return response
}

export default getNewDeviceHead
