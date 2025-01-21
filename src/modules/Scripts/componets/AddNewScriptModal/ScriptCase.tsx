import ScriptCasesCollapses from './ScriptCasesCollapses.tsx'
import { Form } from 'antd'
import CustomButton from '../../../../ui/buttons/CustomButton.tsx'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Props } from '../../Types/ScriptCaseData.ts'
import AddedScriptCases from './AddedScriptCases.tsx'

const ScriptCase = ({ form }: Props) => {
  const [canAddNewCase, setCanAddNewCase] = useState<boolean>(false)
  const [isShownScriptCases, setIsShownScriptCases] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleFinishCase = () => {
    setCanAddNewCase(true)
    setIsShownScriptCases(false)
    setCurrentIndex(currentIndex + 1)
  }

  const handleAddNewCase = () => {
    setIsShownScriptCases(true)
    setCanAddNewCase(false)
  }

  return (
    <>
      <Form.List name={'scriptCases'}>
        {(fields, { remove }) => {
          return (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <AddedScriptCases
                handleRemoveClick={(name: number) => {
                  setCurrentIndex(currentIndex - 1)
                  remove(name)
                }}
                form={form}
                fields={fields}
              />
              {isShownScriptCases && (
                <ScriptCasesCollapses
                  index={currentIndex}
                  add={handleFinishCase}
                />
              )}
              {canAddNewCase && (
                <CustomButton
                  variant={'outlined'}
                  startIcon={<AddIcon />}
                  onClick={handleAddNewCase}
                >
                  Добавить условие
                </CustomButton>
              )}
            </div>
          )
        }}
      </Form.List>
    </>
  )
}

export default ScriptCase
