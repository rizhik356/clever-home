import axios from 'axios'

const authorizedAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default authorizedAxiosInstance
