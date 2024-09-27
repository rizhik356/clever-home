import { AnyObject, ObjectSchema } from 'yup'

export type FormValues = {
  [key: string]: string
}

export type FormProps = {
  changeState: (arg: string) => void
}

type FormStep = {
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
}

export type FormSteps = { [key: number]: FormStep }
