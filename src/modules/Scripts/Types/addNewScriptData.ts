import { DeviceData } from '../../../ui/DeviceCard/Types/DeviceCardTypes.ts'

export type State = {
  userDevices: Array<DeviceData>
  userDevicesLoading: boolean
}
