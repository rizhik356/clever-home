import styles from './scss/style.module.scss'
import { Props } from './Types/Props'
import { Field } from 'formik'
import { useState, useRef } from 'react'

const LoginInput = (props: Props) => {
  const {
    name,
    placeholder,
    type = 'input',
    hasError,
    icon,
    secondIcon,
  } = props

  const inputRef = useRef<HTMLInputElement | null>(null) // Создаем реф для поля ввода

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus() // Устанавливаем фокус на поле ввода
    }
  }

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
      <Field
        type={htmlType}
        innerRef={(el: HTMLInputElement | null) => (inputRef.current = el)}
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
        style={{ cursor: 'text' }}
        onClick={handleDivClick}
      >
        {placeholder}
      </label>
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
    </div>
  )
}

export default LoginInput
