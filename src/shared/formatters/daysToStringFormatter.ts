import dayjs, { Dayjs } from 'dayjs'

const daysToStringFormatter = (date: Dayjs | null, format: string) => {
  return date !== null ? dayjs(date).format(format) : ''
}

export default daysToStringFormatter
