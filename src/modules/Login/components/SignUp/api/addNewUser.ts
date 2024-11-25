import apiUrls from '../../../../../api/apiUrls.ts'
import axiosInstance from '../../../../../api/axiosInstance.ts'
import { FormValues } from '../../../Types/Form.ts'

const addNewUser = async ({login, password, email}: FormValues) => {
  const response = await axiosInstance.post(apiUrls.login.sign_up, {login, password, email})
  return response.data
}

export default addNewUser
