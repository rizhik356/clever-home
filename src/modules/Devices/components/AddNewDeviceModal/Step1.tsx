import { Form, Steps } from 'antd'
import CustomSelect from '../../../../ui/CustomSelect/CustomSelect.tsx'
import styles from '../../scss/style.module.scss'
import CustomButton from '../../../../ui/buttons/CustomButton.tsx'
import { useAppSelector } from '../../../../hooks/storeHooks.ts'
import { FormValues } from '../../Types/AddNewDeviceModal.ts'
import postAddNewDeviceData from '../../api/postAddNewDeviceData.ts'
import { useDispatch } from 'react-redux'
import {
  setNewDeviceToken,
  setNextStep,
  setRefreshForm,
} from '../../slices/addNewDeviceSlice.ts'
import { errorNotification } from '../../../../ui/notifications.ts'
import CustomInput from '../../../../ui/CustomInput/CustomInput.tsx'
import { useEffect } from 'react'
import stepItems from '../../sources/stepItems.ts'

const Step1 = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const id = useAppSelector((state) => state.auth.tokenData.id)
  const {
    step,
    roomsOptions,
    roomsLoading,
    devicesTypesOptions,
    devicesTypesLoading,
    refreshForm,
  } = useAppSelector((state) => state.addNewDevice)

  useEffect(() => {
    if (refreshForm) {
      form.resetFields()
      dispatch(setRefreshForm(false))
    }
  }, [refreshForm])

  const handleFinish = (values: FormValues) => {
    postAddNewDeviceData({ userId: id, ...values })
      .then((data) => {
        dispatch(setNewDeviceToken(data.token))
        dispatch(setNextStep())
      })
      .catch((err) => {
        errorNotification(
          err?.response?.data?.message || 'Произошла ошибка, поробуйте позднее',
        )
      })
  }

  return (
    <Form
      form={form}
      className={`${styles.form} steps`}
      onFinish={handleFinish}
    >
      <Steps current={step} items={stepItems} responsive={false} />
      <div className={styles['form_inputs']}>
        <CustomSelect
          className={styles.select}
          placeholder={'Комната'}
          name="roomId"
          search
          rules={[{ required: true, message: '' }]}
          data={roomsOptions}
          loading={roomsLoading}
        />
        <CustomSelect
          className={styles.select}
          placeholder={'Устройство'}
          data={devicesTypesOptions}
          loading={devicesTypesLoading}
          rules={[{ required: true, message: '' }]}
          search
          name="deviceId"
        />
        <CustomInput
          className={styles.select}
          rules={[{ required: true, message: '' }]}
          name="name"
          placeholder={'Название'}
        />
      </div>
      <CustomButton type={'submit'} style={{ width: '100%' }}>
        Далее
      </CustomButton>
    </Form>
  )
}

export default Step1
