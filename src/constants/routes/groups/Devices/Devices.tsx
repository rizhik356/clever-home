import DevicesPage from '../../../../pages/Devices/MainPage'
import routes from '../../routes'

const Devices = () => {
  const { devices } = routes
  return [
    { component: <DevicesPage />, route: devices.main, wrapper: 'devices' },
  ]
}
export default Devices
