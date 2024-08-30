import style from './scss/style.module.scss'
import { Props } from './Types/Props'

const LoginButton = (props: Props) => {
  const { name, onClick, type } = props

  return (
    <div className={style['login_button_container']}>
      <button
        type={type}
        className={`${style['login_button']}`}
        onClick={onClick}
      >
        <span>{name}</span>
      </button>
    </div>
  )
}

export default LoginButton
