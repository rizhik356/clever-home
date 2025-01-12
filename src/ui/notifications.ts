import 'react-toastify/dist/ReactToastify.css'
import { Slide, toast, ToastPosition } from 'react-toastify'

const notifyProps = {
  position: 'top-right' as ToastPosition,
  autoClose: 4000,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeOnClick: true,
  transition: Slide,
}

const errorNotification = (name: string, toastId?: number | string) => {
  toast.error(name, { ...notifyProps, toastId })
}

const successNotification = (name: string) => {
  toast.success(name, { ...notifyProps })
}

const dismissNotification = () => {
  toast.dismiss()
}

export { errorNotification, dismissNotification, successNotification }
