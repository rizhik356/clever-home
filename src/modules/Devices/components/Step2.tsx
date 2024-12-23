import { Steps } from 'antd'
import { useAppSelector } from '../../../hooks/storeHooks.ts'
import stepItems from '../sources/stepItems.ts'
import styles from '../scss/style.module.scss'
import CustomButton from '../../../ui/buttons/CustomButton.tsx'
import { useDispatch } from 'react-redux'
import { setNextStep } from '../slices/addNewDeviceSlice.ts'

const Step2 = () => {
  const { step } = useAppSelector((state) => state.addNewDevice)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setNextStep())
  }

  return (
    <div className={`steps ${styles.form}`}>
      <Steps current={step} items={stepItems} />
      <ol>
        <li>
          Убедитесь, что устройство подключено к сети, и индикатор горит синим
          цветом.
        </li>
        <li> Подключитесь к wifi сети &#34;Froggy_device&#34;.</li>
        <li>После подключения нажмите кнопку &#34;Далее&#34;.</li>
      </ol>
      <CustomButton style={{ width: '100%' }} onClick={handleClick}>
        Далее
      </CustomButton>
    </div>
  )
}

export default Step2
