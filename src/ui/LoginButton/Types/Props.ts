export type Props = {
  name: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
}
