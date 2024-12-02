type ResetForm = () => void

export type Props = {
  hasSpan: boolean | undefined
  resetForm: ResetForm
  handleBack: (arg: ResetForm) => void
}
