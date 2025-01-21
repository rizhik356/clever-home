import { Props } from '../../Types/ScriptCasesCollapses'
import CustomButton from '../../../../ui/buttons/CustomButton.tsx'
import AddIcon from '@mui/icons-material/Add'
import styles from '../../scss/styles.module.scss'
import TimePicker from '../../../../ui/pickers/TimePicker/TimePicker.tsx'
import { useState } from 'react'
import { Dayjs } from 'dayjs'

const TimeCase = ({ index, add }: Props) => {
  const [dateValue, setDateValue] = useState<Dayjs | null>(null)

  return (
    <div className={styles['time_case_container']}>
      <TimePicker name={[index, 'time']} handleChange={setDateValue} />
      <CustomButton
        variant={'outlined'}
        className={dateValue === null ? styles['add_btn'] : undefined}
        disabled={dateValue === null}
        startIcon={<AddIcon />}
        onClick={add}
      >
        Добавить
      </CustomButton>
    </div>
  )
}

export default TimeCase
