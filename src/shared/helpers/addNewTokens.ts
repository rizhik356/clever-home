import addLocalStorageData from './addLocalStorageData.ts'
import store from '../store'
import { setToken } from '../store/slices/authSlice.ts'

type Tokens = { access_token: string; refresh_token: string }

const addNewTokens = (tokens: Tokens) => {
  addLocalStorageData(tokens)
  store.dispatch(setToken(tokens.access_token))
}

export default addNewTokens
