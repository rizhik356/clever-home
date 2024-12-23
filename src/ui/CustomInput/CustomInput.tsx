import { Input, Form } from 'antd'
import { Props } from './Types/CustomInputData.ts'

const CustomInput = ({ name, placeholder, className, rules }: Props) => {
  return (
    <div className={'custom_input_container'}>
      <Form.Item name={name} rules={rules}>
        <Input
          className={`custom_input ${className}`}
          placeholder={placeholder}
        />
      </Form.Item>
    </div>
  )
}

export default CustomInput
