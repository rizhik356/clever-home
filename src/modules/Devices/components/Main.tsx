import { Button } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'

const Main = () => {
  return (
    <>
      <Button
        className={'standart_btn'}
        icon={<PlusCircleOutlined />}
        size={'large'}
        type={'primary'}
      >
        Добавить устройство
      </Button>
    </>
  )
}

export default Main
