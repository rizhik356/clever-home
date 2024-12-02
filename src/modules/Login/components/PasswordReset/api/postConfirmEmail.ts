import axiosInstance from '../../../../../api/axiosInstance.ts'
import apiUrls from '../../../../../api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postConfirmEmail = async ({ email }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.users.confirm_email, {
    email,
  })
  return response.data
}

export default postConfirmEmail
