import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import AddNewScriptModal from './AddNewScriptModal/AddNewScriptModal.tsx'
import { useState } from 'react'

const Main = () => {
  const [addNewScriptModalOpen, setAddNewScriptModalOpen] = useState(false)

  return (
    <>
      <CustomButton
        variant="contained"
        onClick={() => {
          setAddNewScriptModalOpen(true)
        }}
        startIcon={<AddIcon />}
      >
        Добавить сценарий
      </CustomButton>
      <AddNewScriptModal
        open={addNewScriptModalOpen}
        handleClose={() => setAddNewScriptModalOpen(false)}
      />
    </>
  )
}

export default Main
