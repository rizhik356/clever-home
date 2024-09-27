import style from '../scss/style.module.scss'
import { Props } from '../Types/ErrorsData'

const FooterErrors = ({ errors, dublicateErrors }: Props) => {
  return (
    <div className={style['errors_div']}>
      {errors
        ? Object.values(errors).map((item, key) => (
            <span className={style['error_login_form']} key={key}>
              {item}
            </span>
          ))
        : null}
      {dublicateErrors
        ? dublicateErrors.map((item, key) => (
            <span className={style['error_login_form']} key={key}>
              {item}
            </span>
          ))
        : null}
    </div>
  )
}

export default FooterErrors
