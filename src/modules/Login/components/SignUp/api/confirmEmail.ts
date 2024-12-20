import apiUrls from '../../../../../shared/api/apiUrls.ts'
import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const confirmEmail = async ({ email }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.auth.confirm_email,
    {
      email,
    },
  )
  return response.data
}

export default confirmEmail
