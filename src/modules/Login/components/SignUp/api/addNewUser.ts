import apiUrls from '../../../../../api/apiUrls.ts'
import axiosInstance from '../../../../../api/axiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const addNewUser = async ({ login, password, email }: ApiFuncProps) => {
  const response = await axiosInstance.post(apiUrls.login.sign_up, {
    login,
    password,
    email,
  })
  return response.data
}

export default addNewUser
