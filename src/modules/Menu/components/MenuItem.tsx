import { useEffect } from 'react'
import { Props } from '../MenuItemsData'
import style from '../scss/style.module.scss'
import { useNavigate } from 'react-router-dom'

const MenuItem = ({ item, setCurrentItem, currentItem, pathname }: Props) => {
  const { key, label, icon } = item

  const isActive = currentItem === key ? style['active'] : ''

  const navigate = useNavigate()

  const handleClick = () => {
    setCurrentItem(key)
    navigate('/' + key)
  }

  useEffect(() => {
    if (pathname.includes(key)) {
      setCurrentItem(key)
    }
  }, [])

  return (
    <li
      className={`${style['menu_item']} ${key} ${isActive}`}
      onClick={handleClick}
    >
      {icon}
      {label}
    </li>
  )
}

export default MenuItem
