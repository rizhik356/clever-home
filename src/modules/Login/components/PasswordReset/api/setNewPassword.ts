import axiosInstance from '../../../../../api/axiosInstance.ts'
import apiUrls from '../../../../../api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postVerificationCode = async ({ password, token, id }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.users.change_password, {
    password,
    token,
    id,
  })
  return response.data
}

export default postVerificationCode
