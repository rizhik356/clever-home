import { useState } from 'react'
import style from './scss/style.module.scss'
import { Props } from './Types/Props'

const LoginButton = (props: Props) => {
  const { name } = props
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true) // Устанавливаем активное состояние
    setTimeout(() => {
      setIsActive(false) // Возвращаем в исходное состояние через 300 мс (можно изменить)
    }, 100) // Задержка перед сбросом состояния
  }

  return (
    <div className={style['login_button_container']}>
      <button
        className={`${style['login_button']} ${isActive ? style['active'] : ''}`}
        onClick={handleClick}
      >
        <span>{name}</span>
      </button>
    </div>
  )
}

export default LoginButton
