import apiUrls from '../../../../../shared/api/apiUrls.ts'
import axiosInstance from '../../../../../shared/api/axiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const addNewUser = async ({ login, password, email, id }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.login.sign_up, {
    login,
    password,
    email,
    id,
  })
  return response.data
}

export default addNewUser
