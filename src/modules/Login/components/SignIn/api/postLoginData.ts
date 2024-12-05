import { FormValues } from '../../../Types/Form'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import axiosInstance from '../../../../../shared/api/axiosInstance.ts'

const postLoginData = async (data: FormValues) => {
  const response = await axiosInstance.post(apiUrls.login.sign_in, data)
  return response.data
}

export default postLoginData
