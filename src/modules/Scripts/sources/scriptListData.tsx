import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { Dayjs } from 'dayjs'
import daysToStringFormatter from '../../../shared/formatters/daysToStringFormatter.ts'
import { ScriptListData } from '../Types/AddedScriptCases.ts'

const scriptListData = (value: Dayjs | null): ScriptListData => ({
  time: {
    title: 'Время',
    avatar: <AccessTimeIcon />,
    description: daysToStringFormatter(value, 'HH:mm'),
  },
})

export default scriptListData
