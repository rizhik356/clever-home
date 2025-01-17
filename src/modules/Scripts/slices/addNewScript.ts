import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeviceData } from '../../../ui/DeviceCard/Types/DeviceCardTypes.ts'
import { State } from '../Types/addNewScriptData.ts'

const initialState: State = {
  userDevices: [],
  userDevicesLoading: false,
}

const addNewScriptSlice = createSlice({
  name: 'addNewSlice',
  initialState,
  reducers: {
    addUserDevices: (state, action: PayloadAction<Array<DeviceData>>) => {
      state.userDevices = action.payload
    },
    startUserDevicesLoading: (state) => {
      state.userDevicesLoading = true
    },
    finishUserDevicesLoading: (state) => {
      state.userDevicesLoading = false
    },
  },
})

export const {
  addUserDevices,
  startUserDevicesLoading,
  finishUserDevicesLoading,
} = addNewScriptSlice.actions

export default addNewScriptSlice.reducer
