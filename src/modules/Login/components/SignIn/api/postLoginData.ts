import { FormValues } from '../../../Types/Form'
import apiUrls from '../../../../../shared/api/apiUrls.ts'
import unAuthorizedAxiosInstance from '../../../../../shared/api/unAuthorizedAxiosInstance.ts'

const postLoginData = async (data: FormValues) => {
  const response = await unAuthorizedAxiosInstance.post(
    apiUrls.auth.sign_in,
    data,
  )
  return response.data
}

export default postLoginData
