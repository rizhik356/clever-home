import { TimePicker as DefaultTimePicker, Form } from 'antd'
import { Props } from './Types/TimePickerData.ts'

const TimePicker = ({
  name,
  rules,
  style,
  width,
  className,
  handleChange,
}: Props) => {
  return (
    <Form.Item name={name} rules={rules}>
      <DefaultTimePicker
        format="HH:mm"
        width={width || '100%'}
        style={style}
        className={className ? `${className} custom_picker` : 'custom_picker'}
        showNow={false}
        onChange={handleChange}
      />
    </Form.Item>
  )
}

export default TimePicker
