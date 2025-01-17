import ScriptCasesCollapses from './ScriptCasesCollapses.tsx'
import { Form } from 'antd'
import CustomButton from '../../../../ui/buttons/CustomButton.tsx'

const ScriptCase = () => {
  return (
    <>
      <Form.List name={'scriptCases'}>
        {(fields, { add, remove }) => {
          return (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              {fields.map((field, index) => {
                const isLast = index === fields.length - 1
                return isLast && <ScriptCasesCollapses index={index} />
              })}
              <CustomButton>Добавить условие</CustomButton>
            </div>
          )
        }}
      </Form.List>
    </>
  )
}

export default ScriptCase
