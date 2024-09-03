import styles from './scss/style.module.scss'
import { Props } from './Types/Props'
import { Field } from 'formik'
import { useState } from 'react'

const LoginInput = (props: Props) => {
  const {
    name,
    placeholder,
    type = 'input',
    hasError,
    icon,
    secondIcon,
  } = props

  const [htmlType, setHtmlType] = useState<string>(type)

  const inputStyles = icon
    ? `${styles['form__field']} ${styles['form__field_with_icon']}`
    : styles['form__field']

  const handleChangeShownPassword = (htmlType: string) => {
    const newHtmlType = htmlType !== 'password' ? 'password' : 'text'
    setHtmlType(newHtmlType)
  }

  const currentIcon = (type: string, htmlType: string) => {
    return type === htmlType ? icon : secondIcon
  }

  return (
    <div className={styles['form__group']}>
      {icon && (
        <button className={styles['input_btn']} type="button">
          <span
            className={styles['icon']}
            onClick={() => handleChangeShownPassword(htmlType)}
          >
            {currentIcon(type, htmlType)}
          </span>
        </button>
      )}
      <Field
        type={htmlType}
        className={
          hasError
            ? `${inputStyles} ${styles['form__field_error']}`
            : inputStyles
        }
        placeholder={placeholder}
        name={name}
        required
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
