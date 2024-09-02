import vocabulary from '../../constants/vocabylary'
import style from './scss/style.module.scss'
import { Props } from './Types/Props'

const LoginButton = (props: Props) => {
  const { name, onClick, type, loading } = props

  return (
    <div className={style['login_button_container']}>
      <button
        type={type}
        disabled={loading}
        className={`${style['login_button']}`}
        onClick={onClick}
      >
        <div className={style['span_div']}>
          {loading ? <span className={style['loader']}></span> : null}
          <span className={style['span_name']}>
            {loading ? vocabulary.loading : name}
          </span>
        </div>
      </button>
    </div>
  )
}

export default LoginButton
