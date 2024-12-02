import { RequestState } from '../../../Types/Form.ts'

const inititalValues = {
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
}

const inititalRequestState: RequestState = {
  id: null,
  token: null,
}

export { inititalValues, inititalRequestState }
