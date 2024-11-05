import Home from './Home/Home'
import Login from './Login/Login'
import Devices from './Devices/Devices'

export default () => {
  return [...Login(), ...Home(), ...Devices()]
}
