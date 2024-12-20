import { getToken, getTokenData } from '../store/selectors.ts'
import store from '../store'

const makeRefreshParams = () => {
  const { id } = getTokenData(store.getState())
  const access_token = getToken(store.getState())
  const refresh_token = localStorage.getItem('refresh_token')

  return { user_id: id, access_token, refresh_token }
}

export default makeRefreshParams
