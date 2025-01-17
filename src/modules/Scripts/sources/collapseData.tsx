import { CollapseProps } from 'antd'
import ScriptName from '../componets/AddNewScriptModal/ScriptName.tsx'
import ScriptCase from '../componets/AddNewScriptModal/ScriptCase.tsx'

const collapseData: CollapseProps['items'] = [
  { key: 'scriptName', label: 'Название сценария', children: <ScriptName /> },
  { key: 'scriptCase', label: 'Условие', children: <ScriptCase /> },
  { key: 'scriptDo', label: 'Действие', children: '' },
]

export default collapseData
