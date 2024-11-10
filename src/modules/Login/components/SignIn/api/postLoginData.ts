import axios from 'axios'
import { FormValues } from '../../../Types/Form'

const postLoginData = async (params: FormValues) => {
  const {data} = await axios.post('http://localhost:7010/auth/signIn', params)
  return data
}

export default postLoginData
