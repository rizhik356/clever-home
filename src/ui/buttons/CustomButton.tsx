import { Button, styled } from '@mui/material'

const CustomButton = styled(Button)({
  backgroundColor: '#4e8e6d',
  color: 'white',
  '&:hover': {
    backgroundColor: '#3b6f54', // Цвет при наведении (опционально)
  },
  borderRadius: 0,
})

export default CustomButton
