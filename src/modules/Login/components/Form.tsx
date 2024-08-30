import LoginButton from '../../../ui/LoginButton/LoginButton'
import LoginInput from '../../../ui/LoginInput/LoginInput'
import { Form as DefaultForm, Formik } from 'formik'
import style from '../scss/style.module.scss'
import hasError from '../helpers/hasError'
import SigninSchema from '../ValidateSchemas/SiginSchema'
import postLoginData from './api/postLoginData'

const Form = () => {
  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={SigninSchema}
      onSubmit={(values) => {
        postLoginData(values)
      }}
    >
      {({ errors, touched }) => (
        <DefaultForm className={style['login_body_form']} noValidate>
          <LoginInput
            name="login"
            placeholder="Логин"
            hasError={hasError('login', errors, touched)}
          />
          <LoginInput
            name="password"
            placeholder="Пароль"
            type="password"
            hasError={hasError('password', errors, touched)}
          />
          <LoginButton name="ВОЙТИ" type="submit" />
        </DefaultForm>
      )}
    </Formik>
  )
}

export default Form
