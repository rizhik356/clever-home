import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const postVerificationCode = async ({ code, id }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.auth.confirm_code,
    {
      code: Number(code),
      id,
    },
  )
  return response.data
}

export default postVerificationCode
