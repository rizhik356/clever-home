import CustomButton from '../CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import { Props } from './Types/RefreshButtonData.ts'

const RefreshButton = ({ loading, handleClick }: Props) => {
  return (
    <CustomButton
      variant="contained"
      onClick={handleClick}
      startIcon={<AddIcon />}
    >
      {loading ? 'Загрузка...' : 'Обновить'}
    </CustomButton>
  )
}

export default RefreshButton
