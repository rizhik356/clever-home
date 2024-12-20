import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import AddNewDeviceModal from './AddNewDeviceModal.tsx'
import { ToastContainer } from 'react-toastify'

const Main = () => {
  const [addNewDeviceModalOpened, setAddNewDeviceModalOpened] = useState(false)

  return (
    <>
      <CustomButton
        variant="contained"
        onClick={() => setAddNewDeviceModalOpened(true)}
        startIcon={<AddIcon />}
      >
        Добавить устройство
      </CustomButton>
      <AddNewDeviceModal
        open={addNewDeviceModalOpened}
        onClose={() => setAddNewDeviceModalOpened(false)}
      />
      <ToastContainer />
    </>
  )
}

export default Main
