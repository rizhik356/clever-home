import { Collapse, Modal, Form } from 'antd'
import { Props } from '../../Types/AddNewScriptModal.ts'
import { useEffect } from 'react'
import getUserDevices from '../../../../shared/api/getUserDevices.ts'
import { useAppSelector } from '../../../../hooks/storeHooks.ts'
import { errorNotification } from '../../../../ui/notifications.ts'
import styles from '../../scss/styles.module.scss'
import collapseData from '../../sources/collapseData.tsx'
import { CaretRightOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { addUserDevices } from '../../slices/addNewScript.ts'

const AddNewScriptModal = ({ open, handleClose }: Props) => {
  const id = useAppSelector((state) => state.auth.tokenData.id)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onCancel = () => {
    console.log(form.getFieldsValue())
    form.resetFields()
    handleClose()
  }

  useEffect(() => {
    if (open) {
      getUserDevices(id)
        .then((data) => {
          dispatch(addUserDevices(data))
        })
        .catch((err) =>
          errorNotification(
            err?.response?.data?.error?.message ||
              'Произошла ошибка, попробуйте позднее...',
          ),
        )
        .finally(() => {})
    }
  }, [open])

  return (
    <Modal open={open} centered footer={null} onCancel={onCancel}>
      <Form className={styles['add_script_modal_container']} form={form}>
        <Collapse
          items={collapseData(form)}
          defaultActiveKey={['scriptName', 'scriptCase', 'scriptDo']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
        />
      </Form>
    </Modal>
  )
}

export default AddNewScriptModal
