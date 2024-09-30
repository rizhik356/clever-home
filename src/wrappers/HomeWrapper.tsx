import { ReactNode } from 'react'
import style from './scss/style.module.scss'
import Header from '../modules/Header'

type Props = {
    children: ReactNode
}

const HomeWrapper = ({children}:Props) => {
return (
    <div className={style['container']} style={{justifyContent: 'start'}}>
        <Header>
        {children}
        </Header>
    </div>
)
}

export default HomeWrapper