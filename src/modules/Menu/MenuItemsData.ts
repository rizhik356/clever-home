export type Props = {
  item: {
    key: string
    label: string
    defaultValue?: boolean
    icon?: JSX.Element
    size?: number
  }
  setCurrentItem: (key: string) => void
  currentItem: string | undefined
  pathname: string
}
