import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../Types/Auth.ts'
import { jwtDecode } from 'jwt-decode'

const initialTokenData = { id: 0, login: '', email: '' }

const initialState: State = {
  token: '',
  tokenData: initialTokenData,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.tokenData = jwtDecode(action.payload)
    },
    removeToken: (state) => {
      state.token = ''
      state.tokenData = initialTokenData
    },
  },
})

export const { setToken, removeToken } = authSlice.actions

export default authSlice.reducer
