import style from '../../../scss/style.module.scss'
import LoginInput from '../../../../../ui/LoginInput/LoginInput'
import LoginButton from '../../../../../ui/LoginButton/LoginButton'
import { Form, Formik } from 'formik'
import hasError from '../../../helpers/hasError'
import { useState } from 'react'
import { FormValues } from '../../../Types/Form'
import { useNavigate } from 'react-router-dom'
import FooterErrors from '../../FooterErrors'
import stepItems from '../sources/stepItems'
import { Steps } from 'antd'
import formSteps from '../sources/formSteps'

const Main = () => {
  const [currentState, setCurrentState] = useState(0)
  const [loading, setLoading] = useState(false)

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
  } = formSteps[currentState]

  const navigate = useNavigate()

  const handleSubmit = (values: FormValues) => {
    if (currentState !== stepItems.length - 1) {
      setCurrentState(currentState + 1)
    } else {
      navigate('/')
    }
  }

  return (
    <div className={style['steps_div']}>
      <Steps current={currentState} items={stepItems} />
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
    </div>
  )
}

export default Main
