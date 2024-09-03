import style from '../scss/style.module.scss'
import { Steps } from 'antd'

const PasswordReset = () => {
  return (
    <>
      <div className={style['steps_div']}>
        <Steps
          current={0}
          items={[
            {
              className: 'finish_step',
              title: '',
            },
            {
              title: '',
            },
            {
              title: '',
            },
          ]}
        />
      </div>

      <div className={style['login_body_form']}></div>
    </>
  )
}

export default PasswordReset
