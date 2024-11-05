import { ReactNode } from 'react'
import style from './scss/style.module.scss'
import Header from '../modules/Header'
import Menu from '../modules/Menu'

type Props = {
  children: ReactNode
}

const HomeWrapper = ({ children }: Props) => {
  return (
    <div className={style['home_container']}>
      <Header />
      <div className={style['menu_container']}>
        <Menu />
        <div className={style['main_container']}>
          <div className={style['inner_main_container']}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default HomeWrapper
