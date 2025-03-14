import style from '../../../scss/style.module.scss'
import InputContainer from './InputContainer.tsx'
import formSteps from '../sources/formSteps.tsx'
import LoginButton from '../../../../../ui/buttons/LoginButton/LoginButton.tsx'
import FooterSpan from './FooterSpan.tsx'
import FooterErrors from '../../FooterErrors.tsx'
import { Form as FormikForm } from 'formik'
import { FormInnerProps } from '../../../Types/Form.ts'

const FormInner = ({
  errors,
  touched,
  currentState,
  loading,
  resetForm,
  handleBack,
}: FormInnerProps) => {
  const { description, hasSpan } = formSteps[currentState]

  return (
    <FormikForm className={style['reset_password_form']} noValidate>
      <span className={style['reset_password_desc']}>{description}</span>
      <InputContainer
        errors={errors}
        touched={touched}
        formStep={formSteps[currentState]}
      />
      <LoginButton name="Отправить" type="submit" loading={loading} />
      <FooterSpan
        hasSpan={hasSpan}
        resetForm={resetForm}
        handleBack={handleBack}
      />
      <FooterErrors errors={errors} />
    </FormikForm>
  )
}

export default FormInner
