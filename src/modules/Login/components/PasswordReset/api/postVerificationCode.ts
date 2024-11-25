import axiosInstance from '../../../../../api/axiosInstance.ts'
import apiUrls from '../../../../../api/apiUrls.ts'
import { FormValues } from '../../../Types/Form.ts'

const postVerificationCode = async ({code}: FormValues) => {
    const response = await axiosInstance.post(apiUrls.login.check_code, {code})
  return response.data
 }

export default postVerificationCode;