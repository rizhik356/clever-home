import { Props } from '../MenuItemsData'
import style from '../scss/style.module.scss'

const MenuItem = ({ item }: Props) => {
  const { key, label, icon } = item
  return (
    <li className={`${style['menu_item']} ${key}`}>
      {icon}
      {label}
    </li>
  )
}

export default MenuItem
