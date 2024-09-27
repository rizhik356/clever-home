import { ReactNode } from 'react'
import style from './scss/style.module.scss'

type Props = {
  children: ReactNode
}
const LoginWrapper = ({ children }: Props) => {
  return (
    <div className={style['container']}>
      <div className={style['login_container']}>
        <div
          className={`${style['login_img']} ${style['login_container_inner']}`}
        />
        <div
          className={`${style['login_body']} ${style['login_container_inner']}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginWrapper
