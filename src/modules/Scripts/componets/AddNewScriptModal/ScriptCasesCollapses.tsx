import { Collapse } from 'antd'
import styles from '../../scss/styles.module.scss'
import { Props } from '../../Types/ScriptCasesCollapses'
import TimeCase from './TimeCase.tsx'

const ScriptCasesCollapses = ({ index, add }: Props) => {
  return (
    <div className={styles['collapses_container']}>
      <Collapse
        style={{ backgroundColor: '#5e5d5d' }}
        size={'small'}
        items={[
          {
            key: 'time',
            label: 'Время',
            children: <TimeCase index={index} add={add} />,
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
