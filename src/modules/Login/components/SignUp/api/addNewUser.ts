import apiUrls from '../../../../../shared/api/apiUrls.ts'
import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'
import { ApiFuncProps } from '../../../Types/Form.ts'

const addNewUser = async ({ login, password, email, id }: ApiFuncProps) => {
  const response = await unAuthorizedAxiosInstance.post(apiUrls.auth.sign_up, {
    login,
    password,
    email,
    id,
  })
  return response.data
}

export default addNewUser
