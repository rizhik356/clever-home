import CustomInput from '../../../../ui/CustomInput/CustomInput.tsx'

const ScriptName = () => {
  return (
    <div>
      <CustomInput
        name={'name'}
        placeholder={'Имя сценария'}
        rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}
      />
    </div>
  )
}

export default ScriptName
