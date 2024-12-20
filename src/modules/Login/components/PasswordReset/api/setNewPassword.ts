import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postVerificationCode = async ({ password, token, id }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.users.change_password,
    {
      password,
      token,
      id,
    },
  )
  return response.data
}

export default postVerificationCode
