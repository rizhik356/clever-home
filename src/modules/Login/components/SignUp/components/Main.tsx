import style from '../../../scss/style.module.scss'
import LoginInput from '../../../../../ui/LoginInput/LoginInput'
import LoginButton from '../../../../../ui/LoginButton/LoginButton'
import { Form, Formik } from 'formik'
import hasError from '../../../helpers/hasError'
import { useState } from 'react'
import { FinalData, FormValues } from '../../../Types/Form'
import { useNavigate } from 'react-router-dom'
import FooterErrors from '../../FooterErrors'
import stepItems from '../sources/stepItems'
import { Steps } from 'antd'
import formSteps from '../sources/formSteps'
import routes from '../../../../../constants/routes/routes.ts'
import { errorNotification } from '../../../../../ui/notifications.ts'
import { ToastContainer } from 'react-toastify'

const Main = () => {
  const [currentState, setCurrentState] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [id, setId] = useState<number | null>(null)

  const {
    description,
    inputName,
    inputPlaceholder,
    validation,
    hasSpan,
    hasSecondInput,
    secondInputName,
    secondInputPlaceholder,
    inputIcon,
    inputSecondIcon,
    inputType,
    apiFunc
  } = formSteps[currentState]

  const navigate = useNavigate()

  const actionOnStep = (data?: unknown) => {
    if (currentState !== stepItems.length - 1) {
      const newData = data as object
      if (data && 'id' in newData) {
        setId(newData.id as number)
      }
      setCurrentState(currentState + 1)
    } else {
      const finalData = data as FinalData
      localStorage.setItem('token', finalData.token)
      navigate(routes.login.sign_in)
    }
  }

  const handleSubmit = (values: FormValues) => {
    if (apiFunc) {
      setLoading(true)
      apiFunc({...values, id}).then((data) => {
        actionOnStep(data)
      }).catch((err) => {
        errorNotification(err?.response?.data?.message || 'Произошла ошибка! Попробуйте позднее...')
      })
        .finally(() => {setLoading(false)})
    } else {
      actionOnStep()
    }
  }

  return (
    <div className={`${style['steps_div']} steps`}>
      <Steps current={currentState} items={stepItems} responsive={false} />
      <Formik
        initialValues={{
          login: '',
          email: '',
          password: '',
          confirmPassword: '',
          code: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validation}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => {
          return (
            <Form className={style['reset_password_form']} noValidate>
              <span className={style['reset_password_desc']}>
                {description}
              </span>
              <LoginInput
                name={inputName}
                type={inputType}
                placeholder={inputPlaceholder}
                hasError={hasError(inputName, errors, touched)}
                icon={inputIcon}
                secondIcon={inputSecondIcon}
              />
              {hasSecondInput && (
                <LoginInput
                  name={secondInputName as string}
                  type={inputType}
                  placeholder={secondInputPlaceholder as string}
                  hasError={hasError(
                    secondInputName as string,
                    errors,
                    touched,
                  )}
                  icon={inputIcon}
                  secondIcon={inputSecondIcon}
                />
              )}
              <LoginButton name="Отправить" type="submit" loading={loading} />
              {hasSpan && (
                <span className={style['another_email']} onClick={() => {}}>
                  Отправить еще раз
                </span>
              )}
              <FooterErrors errors={errors} />
            </Form>
          )
        }}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default Main
