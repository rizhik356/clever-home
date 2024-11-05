import { useState } from 'react'
import style from '../scss/style.module.scss'
import menuItems from '../source/menuItems'
import MenuItem from './MenuItem'
import { useLocation } from 'react-router-dom'

const Main = () => {
  const [currentItem, setCurrentItem] = useState<string>()

  const location = useLocation()

  return (
    <div className={style['menu_container']}>
      <ul>
        {menuItems.map((item) => (
          <MenuItem
            item={item}
            key={item.key}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            pathname={location.pathname}
          />
        ))}
        <div className={style['marker']}></div>
      </ul>
    </div>
  )
}

export default Main
