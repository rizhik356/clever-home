import axiosInstance from '../../../../../api/axiosInstance.ts'
import apiUrls from '../../../../../api/apiUrls.ts'
import { FormValues } from '../../../Types/Form.ts'

const postVerificationCode = async ({password} : FormValues) => {
  const response = await axiosInstance.post(apiUrls.login.set_password, {password})
  return response.data
}

export default postVerificationCode;