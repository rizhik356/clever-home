import { CollapseProps } from 'antd'
import ScriptName from '../componets/AddNewScriptModal/ScriptName.tsx'
import ScriptCase from '../componets/AddNewScriptModal/ScriptCase.tsx'
import { FormInstance } from 'antd'

const collapseData = (form: FormInstance): CollapseProps['items'] => [
  { key: 'scriptName', label: 'Название сценария', children: <ScriptName /> },
  { key: 'scriptCase', label: 'Условие', children: <ScriptCase form={form} /> },
  { key: 'scriptDo', label: 'Действие', children: '' },
]

export default collapseData
