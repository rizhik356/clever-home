import * as Yup from 'yup'

const SigninSchema = Yup.object().shape({
  login: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
})

export default SigninSchema
