import { CiSettings } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { IoExitOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MenuProps } from 'antd'
import removeLocalStorageItems from '../../../shared/helpers/removeLocalStorageItems.ts'

const dropDownItems: MenuProps['items'] = [
  {
    label: 'Настройки',
    key: 'setting',
    icon: <CiSettings size={20} />,
  },
  {
    label: 'Профиль',
    key: 'profile',
    icon: <CgProfile size={18} />,
  },
  {
    label: 'Уведомления',
    key: 'notifications',
    icon: <IoIosNotificationsOutline size={20} />,
  },
  {
    type: 'divider',
  },
  {
    label: 'Выйти',
    key: 'exit',
    icon: <IoExitOutline size={20} />,
    onClick: () => {
      removeLocalStorageItems()
      window.location.pathname = '/'
    },
  },
]

export default dropDownItems
