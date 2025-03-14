import { useEffect, useState } from 'react'
import style from '../../../scss/style.module.scss'
import { Steps } from 'antd'
import formSteps from '../sources/formSteps'
import {
  FormikHelperValues,
  FormValues,
  RequestState,
} from '../../../Types/Form'
import stepItems from '../sources/stepsItems'
import { useNavigate } from 'react-router-dom'
import { errorNotification } from '../../../../../ui/notifications.ts'
import routes from '../../../../../constants/routes/routes.ts'
import { ToastContainer } from 'react-toastify'
import { inititalRequestState } from '../sources/form.ts'
import Form from './Form.tsx'

const Main = () => {
  const [currentState, setCurrentState] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [requestState, setRequestState] =
    useState<RequestState>(inititalRequestState)

  const navigate = useNavigate()

  const { apiFunc } = formSteps[currentState]

  useEffect(() => {
    setCurrentState(0)
  }, [])

  const handleBack = (resetForm: () => void) => {
    resetForm()
    setCurrentState(0)
  }

  const actionOnStep = ({ resetForm }: FormikHelperValues) => {
    if (currentState !== stepItems.length - 1) {
      setCurrentState(currentState + 1)
    } else {
      resetForm()
      navigate(routes.login.sign_in)
    }
  }

  const handleSubmit = (values: FormValues, formik: FormikHelperValues) => {
    if (apiFunc) {
      setLoading(true)
      apiFunc({ ...values, ...requestState })
        .then((data) => {
          const newData = data as RequestState
          setRequestState({ ...requestState, ...newData })
          actionOnStep(formik)
        })
        .catch((err) =>
          errorNotification(
            err?.response?.data?.message ||
              'Произошла ошибка! Попробуйте позднее...',
          ),
        )
        .finally(() => {
          setLoading(false)
        })
    } else {
      actionOnStep(formik)
    }
  }

  return (
    <>
      <div className={style['steps_div']}>
        <Steps current={currentState} items={stepItems} responsive={false} />
        <Form
          handleBack={handleBack}
          loading={loading}
          currentState={currentState}
          handleSubmit={handleSubmit}
        />
        <ToastContainer />
      </div>
      <div className={style['login_body_form']}></div>
    </>
  )
}

export default Main
