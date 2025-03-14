import { Card } from 'antd'
import styles from './scss/styles.module.scss'
import { Params, Props } from './Types/DeviceCardTypes.ts'
import PowerButton from './PowerButton.tsx'
import { useState, useMemo } from 'react'
import postDeviceParam from '../../modules/Devices/api/postDeviceParams.ts'
import { errorNotification } from '../notifications.ts'
import makeStaticPath from '../../shared/helpers/getStaticFile.ts'
import devicesByTypes from '../../constants/devices/devicesByTypes.ts'
import DeviceCardModal from './DeviceCardModal.tsx'

const DeviceCard = ({
  id,
  deviceType,
  name,
  active,
  roomName,
  params,
  image,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [deviceParams, setDeviceParams] = useState<Params>(params)
  const [modalOpened, setModalOpened] = useState<boolean>(false)

  const { powerBtn, hasModal } = devicesByTypes[deviceType]

  const staticPath = useMemo(() => makeStaticPath(image), [image])

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

  const handleCardClick = () => {
    setModalOpened(true)
  }

  return (
    <>
      <Card
        className={`${styles['device_card']} ${isDisabled}`}
        hoverable={active}
        onClick={hasModal ? handleCardClick : undefined}
        cover={
          <img className={styles['card_img']} alt="example" src={staticPath} />
        }
        actions={[
          powerBtn && (
            <PowerButton
              key={'power'}
              disabled={!active}
              loading={loading}
              onClick={handlePowerClick}
              power={deviceParams.power}
            />
          ),
        ]}
      >
        <Meta title={name} description={roomName || 'Гостинная'} />
      </Card>
      <DeviceCardModal
        close={() => setModalOpened(false)}
        open={modalOpened}
        imgPath={staticPath}
        title={name}
      />
    </>
  )
}

export default DeviceCard
