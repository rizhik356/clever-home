import { useEffect, useState } from 'react'
import LoginInput from '../../../ui/LoginInput/LoginInput'
import style from '../scss/style.module.scss'
import { Steps } from 'antd'
import {
  Form as DefaultForm,
  Formik,
  FormikErrors,
  FormikHelpers,
} from 'formik'
import LoginButton from '../../../ui/LoginButton/LoginButton'
import formSteps from '../sources/formSteps'
import { FormProps, FormValues } from '../Types/Form'
import hasError from '../helpers/hasError'
import stepItems from '../sources/stepsItems'

const PasswordReset = (props: FormProps) => {
  const { changeState } = props

  const [currentState, setCurrentState] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  const { description, inputName, inputPlaceholder, validation, hasSpan } =
    formSteps[currentState]

  useEffect(() => {
    setCurrentState(0)
  }, [])

  const handleBack = (resetForm: () => void) => {
    resetForm()
    setCurrentState(0)
  }

  const handleSubmit = (
    values: FormValues,
    {
      resetForm,
    }: FormikHelpers<{ email: string; code: string; password: string }>,
  ) => {
    if (currentState !== stepItems.length - 1) {
      setCurrentState(currentState + 1)
    } else {
      changeState('login')
    }
    resetForm()
  }

  return (
    <>
      <div className={style['steps_div']}>
        <Steps current={currentState} items={stepItems} />
        <Formik
          initialValues={{ email: '', code: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validation}
          validateOnChange={false}
          validateOnBlur={true}
        >
          {({ errors, touched, resetForm }) => (
            <DefaultForm className={style['reset_password_form']} noValidate>
              <span className={style['reset_password_desc']}>
                {description}
              </span>
              <LoginInput
                name={inputName}
                placeholder={inputPlaceholder}
                hasError={hasError(inputName, errors, touched)}
              />
              <LoginButton name="Отправить" type="submit" loading={loading} />
              {hasSpan ? (
                <span
                  className={style['another_email']}
                  onClick={() => handleBack(resetForm)}
                >
                  Другая почта?
                </span>
              ) : null}
              <span className={style['error_login_form']}>
                {
                  errors[
                    inputName as keyof FormikErrors<{
                      email: string
                      code: string
                      password: string
                    }>
                  ]
                }
              </span>
            </DefaultForm>
          )}
        </Formik>
      </div>

      <div className={style['login_body_form']}></div>
    </>
  )
}

export default PasswordReset
