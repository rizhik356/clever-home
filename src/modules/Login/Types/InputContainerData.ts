import { FormikErrors, FormikTouched } from 'formik'
import { FormStep } from './Form.ts'

export type Props = {
  errors: FormikErrors<{
    email: string
    code: string
    password: string
    confirmPassword: string
  }>
  touched: FormikTouched<{
    email: string
    code: string
    password: string
    confirmPassword: string
  }>
  formStep: FormStep
}
