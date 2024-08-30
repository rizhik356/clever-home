import axios from 'axios'
import { FormValues } from '../../Types/Form'

const postLoginData = (data: FormValues) => {
  try {
    axios.post('/sigin', data)
  } catch (err) {
    console.log(err)
  }
}

export default postLoginData
