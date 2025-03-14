import { DevicesTypes } from '../../../constants/devices/Types/DevicesData.ts'

export type Params = {
  power: boolean
}

export type DeviceData = {
  active: boolean
  deviceType: keyof DevicesTypes
  id: number
  name: string
  roomId: number
  roomName: string
  params: Params
  image: string
}

export type Props = DeviceData
