import { Modal } from 'antd'
import { Props } from '../Types/AddNewDeviceModal.ts'
import styles from '../scss/style.module.scss'
import AddNewDeviceForm from './AddNewDeviceForm.tsx'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import getRooms from '../../../shared/api/getRooms.ts'
import getDevicesTypes from '../api/getDevicesTypes.ts'
import { useDispatch } from 'react-redux'
import {
  endDeviceTypesLoading,
  endRoomsLoading,
  setDevicesTypesOptions,
  setRoomsOptions,
} from '../slices/addNewDeviceSlice.ts'
import { OptionType } from '../../../ui/CustomSelect/Types/SelectData.ts'
import {
  dismissNotification,
  errorNotification,
} from '../../../ui/notifications.ts'

const AddNewDeviceModal = ({ open, onClose }: Props) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dismissNotification()
    onClose()
  }

  useEffect(() => {
    if (open) {
      Promise.all([getRooms(), getDevicesTypes()])
        .then(([rooms, devicesTypes]: [OptionType[], OptionType[]]) => {
          dispatch(setRoomsOptions(rooms))
          dispatch(setDevicesTypesOptions(devicesTypes))
        })
        .catch((error) => {
          errorNotification(
            error?.response?.data?.message ||
              'Произошла ошибка, поробуйте позднее',
          )
        })
        .finally(() => {
          dispatch(endRoomsLoading())
          dispatch(endDeviceTypesLoading())
        })
    }
  }, [open])

  return (
    <>
      <Modal open={open} centered footer={null} onCancel={handleClose}>
        <div className={styles['add_device_modal_container']}>
          <AddNewDeviceForm />
        </div>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default AddNewDeviceModal
