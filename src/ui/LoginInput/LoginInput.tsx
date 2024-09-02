import styles from './scss/style.module.scss'
import { Props } from './Types/Props'
import { Field } from 'formik'
import { useState } from 'react'

const LoginInput = (props: Props) => {
  const { name, placeholder, type = 'input', hasError, icon } = props

  const [isInputFocused, setIsInputFocused] = useState(false)

  const inputStyles =
    icon && isInputFocused
      ? `${styles['form__field']} ${styles['form__field_with_icon']}`
      : styles['form__field']

  return (
    <div className={styles['form__group']}>
      {icon && isInputFocused && <span className={styles['icon']}>{icon}</span>}
      <Field
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        type={type}
        className={
          hasError
            ? `${inputStyles} ${styles['form__field_error']}`
            : inputStyles
        }
        placeholder={placeholder}
        name={name}
        required
        Input
      />
      <label
        htmlFor={name}
        className={
          hasError
            ? `${styles['form__label']} ${styles['form__label_error']}`
            : styles['form__label']
        }
      >
        {placeholder}
      </label>
    </div>
  )
}

export default LoginInput
