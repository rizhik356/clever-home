import { FormSteps } from '../../../Types/Form'
import {
  SignupLoginSchema,
  SignUpEmailSchema,
  SignupPasswordSchema,
  PasswordResetCodeSchema,
} from '../../../ValidateSchemas/SiginSchema'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const formSteps: FormSteps = {
  0: {
    inputName: 'login',
    inputPlaceholder: 'Логин',
    validation: SignupLoginSchema,
  },
  1: {
    inputName: 'password',
    inputType: 'password',
    inputPlaceholder: 'Пароль',
    inputIcon: <FaRegEye />,
    inputSecondIcon: <FaRegEyeSlash />,
    validation: SignupPasswordSchema,
    hasSecondInput: true,
    secondInputName: 'confirmPassword',
    secondInputPlaceholder: 'Повторите пароль',
  },
  2: {
    inputName: 'email',
    inputPlaceholder: 'Email',
    validation: SignUpEmailSchema,
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
