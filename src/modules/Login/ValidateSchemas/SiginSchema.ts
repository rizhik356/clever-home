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

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .required('Логин обязателен')
    .min(2, 'Логин должен содержать минимум 2 символа')
    .max(20, 'Логин не должен превышать 50 символов'),
  email: Yup.string()
    .required(' Email обязателен')
    .email('Введите корректный email'),
  password: Yup.string()
    .required('Пароль обязателен')
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .matches(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .matches(/[a-z]/, 'Пароль должен содержать хотя бы одну строчную букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Пароли не совпадают')
    .required('Подтверждение пароля обязательно'),
})

export {
  PasswordResetEmailSchema,
  PasswordResetCodeSchema,
  PasswordResetPasswordSchema,
  SignupSchema,
}

export default SigninSchema
