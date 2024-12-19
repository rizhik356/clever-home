import LoginButton from '../../../../../ui/LoginButton/LoginButton'
import LoginInput from '../../../../../ui/LoginInput/LoginInput'
import { Form as DefaultForm, Formik } from 'formik'
import style from '../../../scss/style.module.scss'
import hasError from '../../../helpers/hasError'
import SigninSchema from '../../../ValidateSchemas/SiginSchema'
import postLoginData from '../api/postLoginData'
import { errorNotification } from '../../../../../ui/notifications'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import { FormValues } from '../../../Types/Form'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import routes from '../../../../../constants/routes/routes.ts'
import { useAppSelector } from '../../../../../hooks/storeHooks.ts'
import { getToken } from '../../../../../shared/store/selectors.ts'
import { useDispatch } from 'react-redux'
import { setToken } from '../../../../../shared/store/slices/authSlice.ts'
import addLocalStorageData from '../../../../../shared/helpers/addLocalStorageData.ts'

const Main = () => {
  const [loginError, setLoginError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useAppSelector(getToken)

  useEffect(() => {
    if (token) {
      navigate(routes.home.main)
    }
  }, [])

  const handleSubmit = (values: FormValues) => {
    setLoading(true)
    postLoginData(values)
      .then((data) => {
        addLocalStorageData(data)
        setLoginError(false)
        dispatch(setToken(data.token))
        navigate(routes.home.main)
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          setLoginError(true)
          setErrorMessage(err?.response?.data?.message)
        } else {
          errorNotification('Произошла ошибка, пожалуйста, попробуйте позднее.')
        }
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
              placeholder="Логин / Email"
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
                onClick={() => navigate('/password-reset')}
              >
                пароль?&nbsp;
              </span>
              <span>/</span>
              <span
                className={style['span_remember_pswrd']}
                onClick={() => navigate('signup')}
              >
                &nbsp;Регистрация
              </span>
            </span>
            <div className={style['always_div_for_error']}>
              {loginError ? (
                <span className={style['error_login_form']}>
                  {errorMessage}
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

export default Main
