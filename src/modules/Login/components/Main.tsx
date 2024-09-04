import { useEffect, useState } from 'react'
import style from '../scss/style.module.scss'
import Form from './Form'
import PasswordReset from './PasswordReset'

const Main = () => {
  const [currentStatePage, setCurrentStatePage] = useState('login')

  type StateByKey = {
    [key: string]: JSX.Element
  }

  const stateByKey: StateByKey = {
    login: <Form changeState={setCurrentStatePage} />,
    passwordReset: <PasswordReset changeState={setCurrentStatePage} />,
  }

  useEffect(() => {
    setCurrentStatePage('login')
  }, [])

  return (
    <div className={style['container']}>
      <div className={style['login_container']}>
        <div
          className={`${style['login_img']} ${style['login_container_inner']}`}
        />
        <div
          className={`${style['login_body']} ${style['login_container_inner']}`}
        >
          {stateByKey[currentStatePage]}
        </div>
      </div>
    </div>
  )
}

export default Main
