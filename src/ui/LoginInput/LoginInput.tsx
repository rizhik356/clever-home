import styles from './scss/style.module.scss'
import { Props } from './Types/Props'
import { Field } from 'formik'

const LoginInput = (props: Props) => {
  const { name, placeholder, type = 'input', hasError } = props

  return (
    <div className={styles['form__group']}>
      <Field
        type={type}
        className={
          hasError
            ? `${styles['form__field']} ${styles['form__field_error']}`
            : styles['form__field']
        }
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
