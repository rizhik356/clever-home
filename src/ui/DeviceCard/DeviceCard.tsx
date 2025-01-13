import { Card } from 'antd'
import styles from './scss/styles.module.scss'
import { Params, Props } from './Types/DeviceCardTypes.ts'
import PowerButton from './PowerButton.tsx'
import { useState } from 'react'
import postDeviceParam from '../../modules/Devices/api/postDeviceParams.ts'
import { errorNotification } from '../notifications.ts'
import makeStaticPath from '../../shared/helpers/getStaticFile.ts'

const DeviceCard = ({
  id,
  //  deviceId,
  name,
  active,
  roomName,
  params,
  image,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [deviceParams, setDeviceParams] = useState<Params>(params)

  const { Meta } = Card

  const isDisabled = active ? '' : 'disabled'

  const handlePowerClick = () => {
    setLoading(true)
    const { power } = deviceParams
    const newParams = { ...deviceParams, power: !power, id }
    postDeviceParam(newParams)
      .then((newDeviceParams) => {
        setDeviceParams(newDeviceParams)
      })
      .catch((err) => {
        errorNotification(
          err?.response?.data?.message ||
            'Ошибка загрузки данных, попробуйте позднее...',
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card
      className={`${styles['device_card']} ${isDisabled}`}
      hoverable={active}
      cover={<img alt="example" src={makeStaticPath(image)} />}
      actions={[
        <PowerButton
          key={'power'}
          disabled={!active}
          loading={loading}
          onClick={handlePowerClick}
          power={deviceParams.power}
        />,
      ]}
    >
      <Meta title={name} description={roomName || 'Гостинная'} />
    </Card>
  )
}

export default DeviceCard
