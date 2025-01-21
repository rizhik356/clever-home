import { CSSProperties } from 'react'
import { FormRule } from 'antd'
import { Dayjs } from 'dayjs'

export type Props = {
  name: string | Array<string | number>
  style?: CSSProperties
  width?: string | number
  className?: string
  rules?: FormRule[]
  handleChange: (date: Dayjs | null) => void
}
