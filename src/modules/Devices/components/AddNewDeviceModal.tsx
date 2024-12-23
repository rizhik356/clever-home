import { Modal } from 'antd'
import { Props } from '../Types/AddNewDeviceModal.ts'
import styles from '../scss/style.module.scss'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import getRooms from '../../../shared/api/getRooms.ts'
import getDevicesTypes from '../api/getDevicesTypes.ts'
import { useDispatch } from 'react-redux'
import {
  endDeviceTypesLoading,
  endRoomsLoading,
  setDefaultStep,
  setDevicesTypesOptions,
  setRefreshForm,
  setRoomsOptions,
} from '../slices/addNewDeviceSlice.ts'
import { OptionType } from '../../../ui/CustomSelect/Types/SelectData.ts'
import {
  dismissNotification,
  errorNotification,
} from '../../../ui/notifications.ts'
import { useAppSelector } from '../../../hooks/storeHooks.ts'
import stepItemsData from '../sources/stepItemsData.tsx'

const AddNewDeviceModal = ({ open, onClose }: Props) => {
  const dispatch = useDispatch()

  const step = useAppSelector((state) => state.addNewDevice.step)

  const handleClose = () => {
    dismissNotification()
    dispatch(setRefreshForm(true))
    dispatch(setDefaultStep())
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
          {stepItemsData[step]}
        </div>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default AddNewDeviceModal
