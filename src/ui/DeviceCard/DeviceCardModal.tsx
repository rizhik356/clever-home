import { Props } from './Types/DeviceCardModalTypes'
import { Modal } from 'antd'
import styles from './scss/styles.module.scss'
import CustomButton from '../buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'

const DeviceCardModal = ({ open, close, imgPath, title }: Props) => {
  return (
    <Modal footer={null} open={open} onCancel={close} title={title}>
      <div className={styles['modal_container']}>
        <div className={styles['img_container']}>
          <img alt={'modal_img'} src={imgPath} />
        </div>
        <CustomButton startIcon={<AddIcon />} className={styles['modal_btn']}>
          Настройка вывода
        </CustomButton>
      </div>
    </Modal>
  )
}

export default DeviceCardModal
