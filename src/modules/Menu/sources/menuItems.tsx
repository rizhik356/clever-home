import { MdDevicesOther } from 'react-icons/md'
import { RiPlayList2Line } from 'react-icons/ri'

const menuItems = [
  {
    label: 'Устройства',
    key: 'devices',
    defaultValue: true,
    icon: <MdDevicesOther />,
  },
  { label: 'Сценарии', key: 'scripts', icon: <RiPlayList2Line /> },
]

export default menuItems
