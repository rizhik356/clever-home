import styles from '../scss/style.module.scss'
import DeviceCard from '../../../ui/DeviceCard/DeviceCard.tsx'
import { Props } from '../Types/DevicesContainerData.ts'

const DevicesContainer = ({ userDevices }: Props) => {
  return (
    <div className={styles['devices_card_container']}>
      {userDevices?.map((item) => <DeviceCard key={item.id} {...item} />)}
    </div>
  )
}

export default DevicesContainer
