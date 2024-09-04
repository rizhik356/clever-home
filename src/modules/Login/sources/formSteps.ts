import { FormSteps } from '../Types/Form'
import {
  PasswordResetCodeSchema,
  PasswordResetEmailSchema,
  PasswordResetPasswordSchema,
} from '../ValidateSchemas/SiginSchema'

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
  },
  2: {
    description: 'Введите новый пароль',
    inputName: 'password',
    inputPlaceholder: 'Пароль',
    validation: PasswordResetPasswordSchema,
  },
}

export default formSteps
