import apiUrls from '../../../../../api/apiUrls.ts'
import axiosInstance from '../../../../../api/axiosInstance.ts'
import { FormValues } from '../../../Types/Form.ts'

const isLoginEmpty = async ({ login }: FormValues) => {
  const response = await axiosInstance.get(
    `${apiUrls.users.check_login}/${login}`,
  )
  return response.data
}

export default isLoginEmpty
