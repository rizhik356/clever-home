import { List } from 'antd'
import { Props } from '../../Types/AddedScriptCases'
import styles from '../../scss/styles.module.scss'
import makeScriptItem from '../../helpers/makeScriptItem.ts'

const AddedScriptCases = ({ fields, handleRemoveClick, form }: Props) => {
  return fields.length ? (
    <List
      dataSource={fields}
      className={'added_script_list'}
      itemLayout={'horizontal'}
      renderItem={({ name }, index) => (
        <List.Item
          actions={[
            <span
              key={index}
              className={styles['list_item_rmv_btn']}
              onClick={() => handleRemoveClick(name)}
            >
              Удалить
            </span>,
          ]}
        >
          <List.Item.Meta {...makeScriptItem(form, index)} />
        </List.Item>
      )}
    />
  ) : null
}

export default AddedScriptCases
