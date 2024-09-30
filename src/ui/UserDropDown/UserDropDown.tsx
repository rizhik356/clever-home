import { Avatar, Badge, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import style from './scss/style.module.scss'
import { CiSettings } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { IoExitOutline } from 'react-icons/io5'

const items = [
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
    type: 'divider',
  },
  {
    label: 'Выйти',
    key: 'exit',
    icon: <IoExitOutline size={20} />,
  },
]

const UserDropDown = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <div onClick={(e) => e.preventDefault()}>
        <Badge>
          <Avatar
            className={style['avatar']}
            size="large"
            icon={<UserOutlined />}
          />
        </Badge>
      </div>
    </Dropdown>
  )
}

export default UserDropDown
