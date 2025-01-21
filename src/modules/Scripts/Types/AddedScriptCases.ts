import { FormInstance, FormListFieldData } from 'antd'
import { ReactNode } from 'react'

export type Props = {
  handleRemoveClick: (name: number) => void
  fields: FormListFieldData[]
  form: FormInstance
}

export type OneScriptListData = {
  title: string
  avatar: ReactNode
  description: string
}

export type ScriptListData = {
  [key: string]: OneScriptListData
}
