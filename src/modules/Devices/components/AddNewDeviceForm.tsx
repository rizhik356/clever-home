import { Form, Steps } from 'antd'
import CustomSelect from '../../../ui/CustomSelect/CustomSelect.tsx'
import styles from '../scss/style.module.scss'
import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import { useAppSelector } from '../../../hooks/storeHooks.ts'

const AddNewDeviceForm = () => {
  const [form] = Form.useForm()

  const rooms = useAppSelector((state) => state.addNewDevice.roomsOptions)
  const roomsLoading = useAppSelector(
    (state) => state.addNewDevice.roomsLoading,
  )
  const devicesTypes = useAppSelector(
    (state) => state.addNewDevice.devicesTypesOptions,
  )
  const devicesTypesLoading = useAppSelector(
    (state) => state.addNewDevice.devicesTypesLoading,
  )

  return (
    <Form form={form} className={styles.form}>
      <Steps
        current={0}
        items={[
          {
            title: '',
          },
          {
            title: '',
          },
          {
            title: '',
          },
          {
            title: '',
          },
        ]}
      />
      <div className={styles['form_inputs']}>
        <CustomSelect
          className={styles.select}
          placeholder={'Комната'}
          name="room"
          search
          data={rooms}
          loading={roomsLoading}
        />
        <CustomSelect
          className={styles.select}
          placeholder={'Устройство'}
          data={devicesTypes}
          loading={devicesTypesLoading}
          search
          name=""
        />
        <CustomSelect
          className={styles.select}
          search
          name=""
          data={[
            { label: 'Spalnya', value: 1 },
            { label: 'Spalnya2', value: 2 },
          ]}
        />
      </div>
      <CustomButton style={{ width: '100%' }}>Далее</CustomButton>
    </Form>
  )
}

export default AddNewDeviceForm
