export type Params = {
  power: boolean
}

export type DeviceData = {
  active: boolean
  deviceId: number
  id: number
  name: string
  roomId: number
  roomName: string
  params: Params
}

export type Props = DeviceData
