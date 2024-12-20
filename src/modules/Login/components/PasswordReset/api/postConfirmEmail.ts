import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postConfirmEmail = async ({ email }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.users.confirm_email,
    {
      email,
    },
  )
  return response.data
}

export default postConfirmEmail
