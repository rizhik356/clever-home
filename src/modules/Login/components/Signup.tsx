import style from '../scss/style.module.scss'
import LoginInput from '../../../ui/LoginInput/LoginInput'
import LoginButton from '../../../ui/LoginButton/LoginButton'
import { Form, Formik } from 'formik'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { SignupSchema } from '../ValidateSchemas/SiginSchema'
import hasError from '../helpers/hasError'
import { useState } from 'react'
import { FormProps, FormValues } from '../Types/Form'

const SignUp = (props: FormProps) => {
  const { changeState } = props

  const [dublicateErrors, setDublicateErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: FormValues) => {
    changeState('login')
  }

  return (
    <div>
      <Formik
        initialValues={{
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => {
          return (
            <Form className={style['signup_form']} noValidate>
              <LoginInput
                name="login"
                placeholder="Логин"
                hasError={hasError('login', errors, touched)}
              />
              <LoginInput
                name="email"
                placeholder="Email"
                hasError={hasError('email', errors, touched)}
              />
              <LoginInput
                name="password"
                placeholder="Пароль"
                type="password"
                icon={<FaRegEye />}
                secondIcon={<FaRegEyeSlash />}
                hasError={hasError('password', errors, touched)}
              />
              <LoginInput
                name="confirmPassword"
                placeholder="Подтверждение пароля"
                hasError={hasError('confirmPassword', errors, touched)}
                type="password"
                icon={<FaRegEye />}
                secondIcon={<FaRegEyeSlash />}
              />
              <LoginButton
                name="Зарегистрироваться"
                type="submit"
                loading={loading}
              />
              <div className={style['errors_div']}>
                {errors
                  ? Object.values(errors).map((item, key) => (
                      <span className={style['error_login_form']} key={key}>
                        {item}
                      </span>
                    ))
                  : null}
                {dublicateErrors
                  ? dublicateErrors.map((item, key) => (
                      <span className={style['error_login_form']} key={key}>
                        {item}
                      </span>
                    ))
                  : null}
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUp
