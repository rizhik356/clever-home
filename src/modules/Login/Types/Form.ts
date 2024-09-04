import { AnyObject, ObjectSchema } from 'yup'

export type FormValues = {
  [key: string]: string
}

export type FormProps = {
  changeState: (arg: string) => void
}

type FormStep = {
  description: string
  inputName: string
  inputPlaceholder: string
  validation: ObjectSchema<AnyObject>
  hasSpan?: boolean
}

export type FormSteps = { [key: number]: FormStep }
