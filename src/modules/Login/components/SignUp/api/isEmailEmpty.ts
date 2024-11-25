import apiUrls from '../../../../../api/apiUrls.ts'
import axiosInstance from '../../../../../api/axiosInstance.ts'
import { FormValues } from '../../../Types/Form.ts'

const isEmailEmpty = async ({email}: FormValues) => {
  const response = await axiosInstance.get(`${apiUrls.login.check_email}/${email}`)
  return response.data
}

export default isEmailEmpty
