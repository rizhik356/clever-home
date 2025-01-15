import Home from './Home/Home'
import Login from './Login/Login'
import Devices from './Devices/Devices'
import Scripts from './Scripts/Scripts.tsx'

export default () => {
  return [...Login(), ...Home(), ...Devices(), ...Scripts()]
}
