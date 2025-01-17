import styles from '../scss/style.module.scss'
import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import RefreshButton from '../../../ui/buttons/RefreshButton/RefreshButton.tsx'
import { Props } from '../Types/ButtonsContainerData.ts'

const ButtonsContainer = ({
  refreshHandleClick,
  devicesLoading,
  addNewDeviceHandleClick,
}: Props) => {
  return (
    <div className={styles['buttons_container']}>
      <CustomButton
        variant="contained"
        onClick={addNewDeviceHandleClick}
        startIcon={<AddIcon />}
      >
        Добавить устройство
      </CustomButton>
      <RefreshButton
        loading={devicesLoading}
        handleClick={refreshHandleClick}
      />
    </div>
  )
}

export default ButtonsContainer
