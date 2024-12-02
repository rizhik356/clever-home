import style from '../../../scss/style.module.scss'
import { Props } from '../../../Types/SecondSpanData.ts'

const FooterSpan = ({ hasSpan, handleBack, resetForm }: Props) => {
  return (
    hasSpan && (
      <span
        className={style['another_email']}
        onClick={() => handleBack(resetForm)}
      >
        Другая почта?
      </span>
    )
  )
}

export default FooterSpan
