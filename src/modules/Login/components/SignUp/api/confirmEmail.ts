import apiUrls from '../../../../../shared/api/apiUrls.ts'
import axiosInstance from '../../../../../shared/api/axiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const confirmEmail = async ({ email }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.login.confirm_email, {
    email,
  })
  return response.data
}

export default confirmEmail
