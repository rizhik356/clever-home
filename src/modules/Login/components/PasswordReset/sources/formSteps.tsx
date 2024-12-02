import { FormSteps } from '../../../Types/Form'
import {
  PasswordResetCodeSchema,
  PasswordResetEmailSchema,
  PasswordResetPasswordSchema,
} from '../../../ValidateSchemas/SiginSchema'
import postVerificationCode from '../api/postVerificationCode.ts'
import setNewPassword from '../api/setNewPassword.ts'
import postConfirmEmail from '../api/postConfirmEmail.ts'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const formSteps: FormSteps = {
  0: {
    description:
      'Укажите адрес электронной почты, чтобы мы выслали вам код подтверждения',
    inputName: 'email',
    inputPlaceholder: 'Email',
    validation: PasswordResetEmailSchema,
    apiFunc: postConfirmEmail,
  },
  1: {
    description:
      'Введите код подтверждения, который был отправлен вам на почту',
    inputName: 'code',
    inputPlaceholder: 'Код подтверждения',
    validation: PasswordResetCodeSchema,
    hasSpan: true,
    apiFunc: postVerificationCode,
  },
  2: {
    description: 'Введите новый пароль',
    inputName: 'password',
    inputPlaceholder: 'Пароль',
    validation: PasswordResetPasswordSchema,
    hasSecondInput: true,
    secondInputName: 'confirmPassword',
    secondInputPlaceholder: 'Повторите пароль',
    apiFunc: setNewPassword,
    inputIcon: <FaRegEye />,
    inputSecondIcon: <FaRegEyeSlash />,
    inputType: 'password',
  },
}

export default formSteps
