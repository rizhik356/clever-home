import apiUrls from '../../../../../shared/api/apiUrls.ts'
import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const isLoginEmpty = async ({ login }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.get(
    `${apiUrls.users.check_login}/${login}`,
  )
  return response.data
}

export default isLoginEmpty
