import { ReactNode } from 'react'
import LoginWrapper from './LoginWrapper'
import HomeWrapper from './HomeWrapper'

type WraperByKey = {
  [key: string]: (element: ReactNode) => ReactNode
}

type Props = {
  component: JSX.Element
  wrapper: string
}

const wraperByKey: WraperByKey = {
  login: (children: ReactNode) => <LoginWrapper>{children}</LoginWrapper>,
  home: (children: ReactNode) => <HomeWrapper>{children}</HomeWrapper>,
  devices: (children: ReactNode) => <HomeWrapper>{children}</HomeWrapper>,
}

const SelectWrapper = ({ component, wrapper }: Props) => {
  console.log(wrapper)
  return wraperByKey[wrapper](component)
}

export default SelectWrapper
