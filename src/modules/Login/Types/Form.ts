import { AnyObject, ObjectSchema } from 'yup'
import { FormikHelpers, FormikTouched, FormikState } from 'formik'
import { FormikErrors } from 'formik'

export type FormValues = {
  [key: string]: string
}

export type RequestState = {
  id: number | null
  token: string | null
}

export type ApiFuncProps = {
  [key: string]: string | number | null
}

export type FormFunc = (data: ApiFuncProps) => Promise<unknown>

export type Form = {
  email: string
  code: string
  password: string
  confirmPassword: string
}

export type FormikHelperValues = FormikHelpers<Form>

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
  access_token: string
  refresh_token: string
}

export type FormSteps = { [key: number]: FormStep }

export type FormProps = {
  handleBack(resetForm: () => void): void
  loading: boolean
  currentState: number
  handleSubmit: (values: FormValues, formik: FormikHelperValues) => void
}

type FormPropsWithoutSubmit = Omit<FormProps, 'handleSubmit'>

export type FormInnerProps = FormPropsWithoutSubmit & {
  errors: FormikErrors<Form>
  touched: FormikTouched<Form>
  resetForm: (nextState?: Partial<FormikState<Form>> | undefined) => void
}
