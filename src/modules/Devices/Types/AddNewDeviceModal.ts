import { OptionType } from '../../../ui/CustomSelect/Types/SelectData.ts'

export type Props = {
  open: boolean
  onClose: () => void
}

export type FormValues = {
  room: string
  deviceType: string
  deviceName: string
}

export type State = {
  roomsLoading: boolean
  devicesTypesLoading: boolean
  roomsOptions: Array<OptionType>
  devicesTypesOptions: Array<OptionType>
}
