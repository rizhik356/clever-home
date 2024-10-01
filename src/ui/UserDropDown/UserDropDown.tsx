import { Avatar, Badge, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import style from './scss/style.module.scss'
import items from './sources/dropdownItems'

const UserDropDown = () => {
  return (
    <Dropdown menu={{items}} trigger={['click']}>
      <div onClick={(e) => e.preventDefault()}>
        <Badge count={12}>
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
