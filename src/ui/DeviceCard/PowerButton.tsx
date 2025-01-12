import { AiOutlinePoweroff } from 'react-icons/ai'
import CustomButton from '../buttons/CustomButton.tsx'
import { Props } from './Types/PowreButtonTypes.ts'
import CircularProgress from '@mui/material/CircularProgress'

const PowerButton = ({ loading, onClick, power, disabled }: Props) => {
  return (
    <CustomButton
      className={'off'}
      disabled={disabled}
      onClick={onClick}
      variant={power ? 'contained' : 'outlined'}
      startIcon={
        loading ? (
          <CircularProgress size={14} color="inherit" />
        ) : (
          <AiOutlinePoweroff size={14} />
        )
      }
    ></CustomButton>
  )
}

export default PowerButton
