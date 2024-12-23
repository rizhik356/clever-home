import { Form, Select } from 'antd'
import { Props } from './Types/SelectData.ts'

const CustomSelect = ({
  className,
  placeholder,
  search,
  data,
  name,
  loading,
  rules,
}: Props) => {
  const handleChange = (value: number) => {
    console.log('Выбранное значение:', value)
  }

  return (
    <div className={'custom_select_container'}>
      <Form.Item name={name} rules={rules}>
        <Select
          className={`${className} custom_select`}
          placeholder={placeholder}
          onChange={handleChange}
          showSearch={search}
          loading={loading}
          optionFilterProp="label"
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={data}
        ></Select>
      </Form.Item>
    </div>
  )
}

export default CustomSelect
