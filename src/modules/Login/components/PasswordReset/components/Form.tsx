import { Formik } from 'formik'
import { inititalValues } from '../sources/form.ts'
import FormInner from './FormInner.tsx'
import formSteps from '../sources/formSteps.tsx'
import { FormProps } from '../../../Types/Form.ts'

const Form = ({
  handleSubmit,
  handleBack,
  loading,
  currentState,
}: FormProps) => {
  const { validation } = formSteps[currentState]

  return (
    <Formik
      initialValues={inititalValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
      validateOnChange={false}
      validateOnBlur={true}
    >
      {({ errors, touched, resetForm }) => (
        <FormInner
          errors={errors}
          touched={touched}
          resetForm={resetForm}
          handleBack={handleBack}
          loading={loading}
          currentState={currentState}
        />
      )}
    </Formik>
  )
}

export default Form
