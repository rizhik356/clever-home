import apiUrls from '../../../../../shared/api/apiUrls.ts'
import axiosInstance from '../../../../../shared/api/axiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const isLoginEmpty = async ({ login }: ApiFuncProps) => {
  const response = await axiosInstance.get(
    `${apiUrls.users.check_login}/${login}`,
  )
  return response.data
}

export default isLoginEmpty
