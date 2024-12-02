import LoginInput from '../../../../../ui/LoginInput/LoginInput.tsx'
import hasError from '../../../helpers/hasError.ts'
import { Props } from '../../../Types/InputContainerData.ts'

const InputContainer = ({ errors, touched, formStep }: Props) => {
  const {
    hasSecondInput,
    secondInputName,
    secondInputPlaceholder,
    inputName,
    inputPlaceholder,
    inputIcon,
    inputSecondIcon,
    inputType,
  } = formStep

  return (
    <>
      <LoginInput
        name={inputName}
        placeholder={inputPlaceholder}
        hasError={hasError(inputName, errors, touched)}
        icon={inputIcon}
        secondIcon={inputSecondIcon}
        type={inputType}
      />
      {hasSecondInput && (
        <LoginInput
          name={secondInputName as string}
          placeholder={secondInputPlaceholder as string}
          hasError={hasError(secondInputName as string, errors, touched)}
          icon={inputIcon}
          secondIcon={inputSecondIcon}
          type={inputType}
        />
      )}
    </>
  )
}

export default InputContainer
