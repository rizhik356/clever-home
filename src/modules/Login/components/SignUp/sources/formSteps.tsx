import { FormSteps } from '../../../Types/Form'
import {
  SignupLoginSchema,
  SignUpEmailSchema,
  SignupPasswordSchema,
  PasswordResetCodeSchema,
} from '../../../ValidateSchemas/SiginSchema'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import isLoginEmpty from '../api/isLoginEmpty.ts'
import isEmailEmpty from '../api/isEmailEmpty.ts'
import addNewUser from '../api/addNewUser.ts'

const formSteps: FormSteps = {
  0: {
    inputName: 'login',
    inputPlaceholder: 'Логин',
    validation: SignupLoginSchema,
    apiFunc: isLoginEmpty
  },
  1: {
    inputName: 'email',
    inputPlaceholder: 'Email',
    validation: SignUpEmailSchema,
    apiFunc: isEmailEmpty
  },
  2: {
    inputName: 'password',
    inputType: 'password',
    inputPlaceholder: 'Пароль',
    inputIcon: <FaRegEye />,
    inputSecondIcon: <FaRegEyeSlash />,
    validation: SignupPasswordSchema,
    hasSecondInput: true,
    secondInputName: 'confirmPassword',
    secondInputPlaceholder: 'Повторите пароль',
    apiFunc: addNewUser
  },
  3: {
    description:
      'Пожалуйста, введите код подтвреждения, отправленный вам на почту',
    inputName: 'code',
    inputPlaceholder: 'Код подтверждения',
    validation: PasswordResetCodeSchema,
    hasSpan: true,

  },
}

export default formSteps
