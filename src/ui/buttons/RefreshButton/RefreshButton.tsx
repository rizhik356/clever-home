import CustomButton from '../CustomButton.tsx'
import { Props } from './Types/RefreshButtonData.ts'
import RefreshIcon from '@mui/icons-material/Refresh'
import CircularProgress from '@mui/material/CircularProgress'

const RefreshButton = ({ loading, handleClick }: Props) => {
  return (
    <CustomButton
      variant="contained"
      onClick={handleClick}
      disabled={loading}
      startIcon={
        loading ? (
          <CircularProgress size={14} color="inherit" />
        ) : (
          <RefreshIcon />
        )
      }
    >
      {loading ? 'Загрузка...' : 'Обновить'}
    </CustomButton>
  )
}

export default RefreshButton
