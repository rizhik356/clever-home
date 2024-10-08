import style from '../scss/style.module.scss'
import MenuItem from './MenuItem'
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

const Main = () => {
  return (
    <div className={style['menu_container']}>
      <ul>
        {menuItems.map((item) => (
          <MenuItem item={item} key={item.key} />
        ))}
        <div className={style['marker']}></div>
      </ul>
    </div>
  )
}

export default Main
