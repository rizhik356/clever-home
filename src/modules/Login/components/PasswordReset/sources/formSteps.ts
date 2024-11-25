import { FormSteps } from '../../../Types/Form'
import {
  PasswordResetCodeSchema,
  PasswordResetEmailSchema,
  PasswordResetPasswordSchema,
} from '../../../ValidateSchemas/SiginSchema'
import postVerificationCode from '../api/postVerificationCode.ts'
import setNewPassword from '../api/setNewPassword.ts'

const formSteps: FormSteps = {
  0: {
    description:
      'Укажите адрес электронной почты, чтобы мы выслали вам код подтверждения',
    inputName: 'email',
    inputPlaceholder: 'Email',
    validation: PasswordResetEmailSchema,

  },
  1: {
    description:
      'Введите код подтверждения, который был отправлен вам на почту',
    inputName: 'code',
    inputPlaceholder: 'Код подтверждения',
    validation: PasswordResetCodeSchema,
    hasSpan: true,
    apiFunc: postVerificationCode
  },
  2: {
    description: 'Введите новый пароль',
    inputName: 'password',
    inputPlaceholder: 'Пароль',
    validation: PasswordResetPasswordSchema,
    hasSecondInput: true,
    secondInputName: 'confirmPassword',
    secondInputPlaceholder: 'Повторите пароль',
    apiFunc: setNewPassword
  },
}

export default formSteps
