import { RootState } from './index.ts'

export const getToken = (state: RootState) => state.auth.token
