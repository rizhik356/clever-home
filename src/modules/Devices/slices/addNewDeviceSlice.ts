import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { State } from '../Types/AddNewDeviceModal.ts'
import { OptionType } from '../../../ui/CustomSelect/Types/SelectData.ts'

const initialState: State = {
  roomsLoading: true,
  devicesTypesLoading: true,
  roomsOptions: [],
  devicesTypesOptions: [],
}

const authSlice = createSlice({
  name: 'addNewDevice',
  initialState,
  reducers: {
    startRoomsLoading: (state) => {
      state.roomsLoading = true
    },
    endRoomsLoading: (state) => {
      state.roomsLoading = false
    },
    startDeviceTypesLoading: (state) => {
      state.devicesTypesLoading = true
    },
    endDeviceTypesLoading: (state) => {
      state.devicesTypesLoading = false
    },
    setRoomsOptions: (state, action: PayloadAction<OptionType[]>) => {
      state.roomsOptions = action.payload
    },
    setDevicesTypesOptions: (state, action: PayloadAction<OptionType[]>) => {
      state.devicesTypesOptions = action.payload
    },
  },
})

export const {
  startRoomsLoading,
  endRoomsLoading,
  startDeviceTypesLoading,
  endDeviceTypesLoading,
  setRoomsOptions,
  setDevicesTypesOptions,
} = authSlice.actions

export default authSlice.reducer
