import { FormikErrors } from 'formik'

export type Props = {
  dublicateErrors?: string[]
  errors: FormikErrors<{
    email: string
    code: string
    password: string
  }>
}
