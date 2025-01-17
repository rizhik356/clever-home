import { Collapse, DatePicker, Form } from 'antd'
import styles from '../../scss/styles.module.scss'
import { Props } from '../../Types/ScriptCasesCollapses'

const ScriptCasesCollapses = ({ index }: Props) => {
  return (
    <div className={styles['collapses_container']}>
      <Collapse
        style={{ backgroundColor: '#5e5d5d' }}
        size={'small'}
        items={[
          {
            key: 'scriptCase',
            label: 'Время',
            children: (
              <Form.Item name={[index, 'time']}>
                <DatePicker />
              </Form.Item>
            ),
          },
        ]}
      />
      <Collapse
        size="small"
        style={{ backgroundColor: '#5e5d5d' }}
        items={[{ key: 'scriptDo', label: 'Устройство', children: '' }]}
      />
    </div>
  )
}

export default ScriptCasesCollapses
