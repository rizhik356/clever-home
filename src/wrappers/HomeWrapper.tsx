import { ReactNode, useEffect } from 'react'
import style from './scss/style.module.scss'
import Header from '../modules/Header'
import Menu from '../modules/Menu'
import { useAppSelector } from '../hooks/storeHooks.ts'
import { getToken } from '../shared/store/selectors.ts'
import { useNavigate } from 'react-router-dom'
import routes from '../constants/routes/routes.ts'
import makeAuthorizedAxiosInstance from '../shared/helpers/makeAuthorizedAxiosInstance.ts'

type Props = {
  children: ReactNode
}

const HomeWrapper = ({ children }: Props) => {
  const token = useAppSelector(getToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate(routes.login.sign_in)
    } else {
      makeAuthorizedAxiosInstance()
    }
  }, [token])

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
