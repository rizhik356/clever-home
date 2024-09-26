import axios from 'axios'
import { FormValues } from '../../Types/Form'

const postLoginData = async (data: FormValues) => {
  const response = await axios.post('http://localhost:8080/sigin', data)
  return response.data
}

export default postLoginData
