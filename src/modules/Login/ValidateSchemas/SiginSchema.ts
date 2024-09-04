import * as Yup from 'yup'

const SigninSchema = Yup.object().shape({
  login: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
})

const PasswordResetEmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введите корректный адрес электронной почты')
    .required('Email является обязательным'),
})

const PasswordResetCodeSchema = Yup.object().shape({
  code: Yup.string().required('Код подтвреждения является обязательным'),
})

const PasswordResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Пароль обязателен')
    .min(6, 'Пароль должен содержать минимум 6 символов'),
})

export {
  PasswordResetEmailSchema,
  PasswordResetCodeSchema,
  PasswordResetPasswordSchema,
}

export default SigninSchema
