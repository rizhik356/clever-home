import { AnyObject, ObjectSchema } from 'yup'
import { FormikHelpers } from 'formik'

export type FormValues = {
  [key: string]: string
}

export type FormProps = {
  changeState: (arg: string) => void
}

export type FormFunc = (data: FormValues) => Promise<unknown>

export type FormikHelperValues = FormikHelpers<{
  email: string
  code: string
  password: string
  confirmPassword: string
}>

export type FormStep = {
  description?: string
  inputName: string
  inputPlaceholder: string
  validation: ObjectSchema<AnyObject>
  hasSpan?: boolean
  hasSecondInput?: boolean
  secondInputName?: string
  secondInputPlaceholder?: string
  inputIcon?: JSX.Element
  inputSecondIcon?: JSX.Element
  inputType?: string
  apiFunc?: FormFunc
}

export type FinalData = {
  token: string
}

export type FormSteps = { [key: number]: FormStep }
