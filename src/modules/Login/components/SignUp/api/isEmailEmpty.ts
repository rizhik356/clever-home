import apiUrls from '../../../../../api/apiUrls.ts'
import axiosInstance from '../../../../../api/axiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const isEmailEmpty = async ({ email }: ApiFuncProps) => {
  const response = await axiosInstance.get(
    `${apiUrls.users.check_email}/${email}`,
  )
  return response.data
}

export default isEmailEmpty
