import { styled } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'

const CustomButton = styled(LoadingButton)(() => ({
  backgroundColor: '#4e8e6d',
  color: 'white',
  border: '1px solid #4e8e6d',
  '&:hover': {
    backgroundColor: '#3b6f54', // Цвет при наведении (опционально)
  },
  '&.MuiButton-outlined': {
    border: '1px solid #4e8e6d',
    backgroundColor: 'transparent',
    color: '#4e8e6d',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: '#3b6f54',
    color: 'white',
    border: '1px solid #3b6f54',
  },
  '&.Mui-disabled': {
    backgroundColor: '#5e5d5d', // Цвет для отключенной кнопки
    color: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  },

  borderRadius: 0,
}))

export default CustomButton
