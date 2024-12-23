import { FormRule } from 'antd'

export type OptionType = {
  label: string
  value: string | number
  disabled?: boolean
  className?: string
}

export type Props = {
  className?: string
  data: OptionType[]
  search?: boolean
  placeholder?: string
  name?: string
  loading?: boolean
  rules?: FormRule[]
}
