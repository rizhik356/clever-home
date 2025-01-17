import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import AddNewDeviceModal from './AddNewDeviceModal/AddNewDeviceModal.tsx'
import { useAppSelector } from '../../../hooks/storeHooks.ts'
import getUserDevices from '../../../shared/api/getUserDevices.ts'
import { errorNotification } from '../../../ui/notifications.ts'
import { DeviceData } from '../../../ui/DeviceCard/Types/DeviceCardTypes.ts'
import { useDispatch } from 'react-redux'
import { setModalAutoClose } from '../slices/addNewDeviceSlice.ts'
import ButtonsContainer from './ButtonsContainer.tsx'
import DevicesContainer from './DevicesContainer.tsx'

const Main = () => {
  const [addNewDeviceModalOpened, setAddNewDeviceModalOpened] = useState(false)
  const [userDevices, setUserDevices] = useState<Array<DeviceData>>([])
  const [devicesLoading, setDevicesLoading] = useState(false)

  const id = useAppSelector((state) => state.auth.tokenData.id)
  const modalAutoClose = useAppSelector(
    (state) => state.addNewDevice.modalAutoClose,
  )
  const dispatch = useDispatch()

  const getDevicesRequest = () => {
    setDevicesLoading(true)
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
      .finally(() => {
        setDevicesLoading(false)
      })
  }

  useEffect(() => {
    if (modalAutoClose) {
      setAddNewDeviceModalOpened(false)
      dispatch(setModalAutoClose(false))
    }
  }, [modalAutoClose])

  useEffect(() => {
    getDevicesRequest()
  }, [])

  return (
    <>
      <ButtonsContainer
        devicesLoading={devicesLoading}
        refreshHandleClick={getDevicesRequest}
        addNewDeviceHandleClick={() => setAddNewDeviceModalOpened(true)}
      />
      <DevicesContainer userDevices={userDevices} />
      <AddNewDeviceModal
        open={addNewDeviceModalOpened}
        onClose={() => setAddNewDeviceModalOpened(false)}
      />
      <ToastContainer />
    </>
  )
}

export default Main
