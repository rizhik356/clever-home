import { FormInstance } from 'antd'
import scriptListData from '../sources/scriptListData.tsx'
import { Dayjs } from 'dayjs'

const makeScriptItem = (form: FormInstance, index: number) => {
  const formScriptCases = form?.getFieldValue('scriptCases')
  if (formScriptCases) {
    const currentScriptCase = formScriptCases[index]
    const [[key, value]] = Object.entries(currentScriptCase)
    return scriptListData(value as Dayjs | null)[key]
  }
  return {}
}

export default makeScriptItem
