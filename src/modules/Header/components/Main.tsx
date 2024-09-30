import { ReactNode } from 'react'
import style from '../scss/style.module.scss'
import { Link } from 'react-router-dom'
import UserDropDown from '../../../ui/UserDropDown/UserDropDown'

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={style['header_div']}>
        <span>
          <Link to="/home">
            <span className={style['header_froggy']}>Froggy</span> House
          </Link>
        </span>
        <div>
          <UserDropDown />
        </div>
      </div>
      {children}
    </>
  )
}

export default Header
