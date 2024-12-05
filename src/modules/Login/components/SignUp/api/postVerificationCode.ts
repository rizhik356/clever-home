import axiosInstance from '../../../../../shared/api/axiosInstance.ts'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postVerificationCode = async ({ code, id }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.login.confirm_code, {
    code: Number(code),
    id,
  })
  return response.data
}

export default postVerificationCode
