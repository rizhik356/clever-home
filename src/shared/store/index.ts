import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.ts'
import addNewDeviceReducer from '../../modules/Devices/slices/addNewDeviceSlice.ts'
import addNewScriptSlice from '../../modules/Scripts/slices/addNewScript.ts'

const store = configureStore({
  reducer: {
    auth: authReducer,
    addNewDevice: addNewDeviceReducer,
    addNewScript: addNewScriptSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
