import { RootState } from './index.ts'

export const getToken = (state: RootState) => state.auth.token
export const getTokenData = (state: RootState) => state.auth.tokenData
