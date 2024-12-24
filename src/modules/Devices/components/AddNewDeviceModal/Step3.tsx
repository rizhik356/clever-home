import { useAppSelector } from '../../../../hooks/storeHooks.ts'
import styles from '../../scss/style.module.scss'
import { Steps } from 'antd'
import stepItems from '../../sources/stepItems.ts'
import { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import getNewDeviceHead from '../../api/getNewDeviceHead.ts'

const Step3 = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [update, setUpdate] = useState<boolean>(false)

  const { newDeviceToken, step } = useAppSelector((state) => state.addNewDevice)
  const id = useAppSelector((state) => state.auth.tokenData.id)

  const makeIframeUrl = () => {
    const url = new URL(import.meta.env.VITE_NEW_DEVICE_URL)
    url.searchParams.set('token', newDeviceToken)
    url.searchParams.set('id', String(id))

    return url.toString()
  }

  const fetchDeviceHead = () => {
    setUpdate(false)
    getNewDeviceHead()
      .then(() => {
        setLoading(false)
      })
      .catch(() => {
        setUpdate(true)
      })
  }

  useEffect(() => {
    if (step === 2) {
      setUpdate(true)
    } else {
      setUpdate(false)
    }
  }, [step])

  useEffect(() => {
    if (step === 2 && update) {
      fetchDeviceHead()
    }
  }, [update])

  return (
    <div className={`${styles.form} steps`}>
      <Steps current={step} items={stepItems} />
      {loading ? (
        <div className={styles.pagination}>
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton.Input key={index} size={'large'} active block={true} />
          ))}
        </div>
      ) : (
        <iframe
          src={makeIframeUrl()}
          style={{ height: '100%', width: '100%', flex: 1, marginTop: '15px' }}
        ></iframe>
      )}
    </div>
  )
}

export default Step3
