import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AddNewDeviceModal from './AddNewDeviceModal/AddNewDeviceModal.tsx'
import DeviceCard from '../../../ui/DeviceCard/DeviceCard.tsx'
import styles from '../scss/style.module.scss'
import { useAppSelector } from '../../../hooks/storeHooks.ts'
import getUserDevices from '../api/getUserDevices.ts'
import { errorNotification } from '../../../ui/notifications.ts'
import { DeviceData } from '../../../ui/DeviceCard/Types/DeviceCardTypes.ts'
import { useDispatch } from 'react-redux'
import { setModalAutoClose } from '../slices/addNewDeviceSlice.ts'

const Main = () => {
  const [addNewDeviceModalOpened, setAddNewDeviceModalOpened] = useState(false)
  const [userDevices, setUserDevices] = useState<Array<DeviceData>>([])
  const id = useAppSelector((state) => state.auth.tokenData.id)
  const modalAutoClose = useAppSelector(
    (state) => state.addNewDevice.modalAutoClose,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (modalAutoClose) {
      setAddNewDeviceModalOpened(false)
      dispatch(setModalAutoClose(false))
    }
  }, [modalAutoClose])

  useEffect(() => {
    getUserDevices(id)
      .then((data) => {
        setUserDevices(data)
      })
      .catch((err) =>
        errorNotification(
          err?.response?.data?.error?.message ||
            'Произошла ошибка, попробуйте позднее...',
        ),
      )
  }, [])

  return (
    <>
      <CustomButton
        variant="contained"
        onClick={() => setAddNewDeviceModalOpened(true)}
        startIcon={<AddIcon />}
      >
        Добавить устройство
      </CustomButton>
      <div className={styles['devices_card_container']}>
        {userDevices?.map((item) => <DeviceCard key={item.id} {...item} />)}
      </div>
      <AddNewDeviceModal
        open={addNewDeviceModalOpened}
        onClose={() => setAddNewDeviceModalOpened(false)}
      />
      <ToastContainer />
    </>
  )
}

export default Main
