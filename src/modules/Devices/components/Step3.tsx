import { useAppSelector } from '../../../hooks/storeHooks.ts'
import styles from '../scss/style.module.scss'
import { Steps } from 'antd'
import stepItems from '../sources/stepItems.ts'

const Step3 = () => {
  const { newDeviceToken, step } = useAppSelector((state) => state.addNewDevice)
  const id = useAppSelector((state) => state.auth.tokenData.id)

  const makeIframeUrl = () => {
    const url = new URL(import.meta.env.VITE_NEW_DEVICE_URL)
    url.searchParams.set('token', newDeviceToken)
    url.searchParams.set('id', String(id))

    return url.toString()
  }

  return (
    <div className={`${styles.form} steps`}>
      <Steps current={step} items={stepItems} />
      <iframe
        src={makeIframeUrl()}
        style={{ height: '100%', width: '100%', flex: 1, marginTop: '15px' }}
      ></iframe>
    </div>
  )
}

export default Step3
