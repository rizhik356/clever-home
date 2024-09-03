import style from '../scss/style.module.scss'
import Form from './Form'
import PasswordReset from './PasswordReset'

const Main = () => {
  return (
    <div className={style['container']}>
      <div className={style['login_container']}>
        <div
          className={`${style['login_img']} ${style['login_container_inner']}`}
        />
        <div
          className={`${style['login_body']} ${style['login_container_inner']}`}
        >
          <PasswordReset />
        </div>
      </div>
    </div>
  )
}

export default Main
