import axios from 'axios'
import { FormValues } from '../../Types/Form'

const postLoginData = async (data: FormValues) => {
  const response = await axios.post('/sigin', data)
  return response.data
}

export default postLoginData
