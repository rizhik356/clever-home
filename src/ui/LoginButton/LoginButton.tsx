import style from './scss/style.module.scss'

const LoginButton = () => {
  return (
    <div className={style['login_button_container']}>
      <div className={style['login_button']}>
        <span>HOVER ME</span>
      </div>
    </div>
  )
}

export default LoginButton
