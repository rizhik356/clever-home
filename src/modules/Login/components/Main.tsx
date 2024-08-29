import LoginButton from '../../../ui/LoginButton/LoginButton'
import LoginInput from '../../../ui/LoginInput/LoginInput'
import style from '../scss/style.module.scss'

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
          <LoginInput name="login" placeholder="Логин" />
          <LoginInput name="password" placeholder="Пароль" type="password" />
          <LoginButton name="ВОЙТИ" />
        </div>
      </div>
    </div>
  )
}

export default Main
