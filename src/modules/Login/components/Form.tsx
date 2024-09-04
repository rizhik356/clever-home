import LoginButton from '../../../ui/LoginButton/LoginButton'
import LoginInput from '../../../ui/LoginInput/LoginInput'
import { Form as DefaultForm, Formik } from 'formik'
import style from '../scss/style.module.scss'
import hasError from '../helpers/hasError'
import SigninSchema from '../ValidateSchemas/SiginSchema'
import postLoginData from './api/postLoginData'
import { errorNotification } from '../../../ui/notifications'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { FormProps, FormValues } from '../Types/Form'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa'

const Form = (props: FormProps) => {
  const { changeState } = props

  const [loginError, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: FormValues) => {
    setLoading(true)
    postLoginData(values)
      .then(() => {
        setLoginError(false)
      })
      .catch((err) => {
        return err.response.status !== 401
          ? setLoginError(true)
          : errorNotification(
              'Произошла ошибка, пожалуйста, попробуйте позднее.',
              'loginError',
            )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={SigninSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <>
          <DefaultForm className={style['login_body_form']} noValidate>
            <LoginInput
              name="login"
              placeholder="Логин"
              hasError={hasError('login', errors, touched) || loginError}
            />
            <LoginInput
              name="password"
              placeholder="Пароль"
              type="password"
              hasError={hasError('password', errors, touched) || loginError}
              icon={<FaRegEye />}
              secondIcon={<FaRegEyeSlash />}
            />
            <LoginButton name="войти" type="submit" loading={loading} />
            <span className={style['remember_pswrd']}>
              Забыли&nbsp;
              <span
                className={style['span_remember_pswrd']}
                onClick={() => changeState('passwordReset')}
              >
                пароль?
              </span>
            </span>
            <div className={style['always_div_for_error']}>
              {loginError ? (
                <span className={style['error_login_form']}>
                  Неправильный логин или пароль
                </span>
              ) : null}
            </div>
          </DefaultForm>
          <ToastContainer />
        </>
      )}
    </Formik>
  )
}

export default Form
