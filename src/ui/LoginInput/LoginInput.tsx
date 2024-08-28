import styles from './scss/style.module.scss'
import { Props } from './Types/Props'

const LoginInput = (props: Props) => {
  const { name, placeholder, type = 'input' } = props

  return (
    <div className={styles['form__group']}>
      <input
        type={type}
        className={styles['form__field']}
        placeholder={placeholder}
        name={name}
        required
      />
      <label htmlFor={name} className={styles['form__label']}>
        {placeholder}
      </label>
    </div>
  )
}

export default LoginInput
