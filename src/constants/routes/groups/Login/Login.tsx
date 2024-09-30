import PasswordResetPage from '../../../../pages/Login/PasswordResetPage'
import SignInPage from '../../../../pages/Login/SignInPage'
import SignUpPage from '../../../../pages/Login/SignUpPage'
import routes from '../../routes'

const Login = () => {
  const { login } = routes

  return [
    {
      title: 'Вход',
      component: <SignInPage />,
      route: login.sign_in,
      wrapper: 'login'
    },
    {
      title: 'Регистрация',
      component: <SignUpPage />,
      route: login.sign_up,
      wrapper: 'login'
    },
    {
      title: 'Восстановление пароля',
      component: <PasswordResetPage />,
      route: login.password_reset,
      wrapper: 'login'
    },
  ]
}

export default Login
