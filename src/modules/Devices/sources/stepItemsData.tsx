import { ReactNode } from 'react'
import Step1 from '../components/Step1.tsx'
import Step2 from '../components/Step2.tsx'
import Step3 from '../components/Step3.tsx'

export type StepItemsData = {
  [key: number]: ReactNode
}

const stepItemsData: StepItemsData = {
  0: <Step1 />,
  1: <Step2 />,
  2: <Step3 />,
}

export default stepItemsData
