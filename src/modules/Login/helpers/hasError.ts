import { FormikErrors, FormikTouched } from 'formik'
import { FormValues } from '../Types/Form'

const hasError = (
  name: string,
  errors: FormikErrors<FormValues>,
  touched: FormikTouched<FormValues>,
) => {
  return errors[name] && touched[name]
}

export default hasError
