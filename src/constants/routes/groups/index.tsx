import Home from './Home/Home'
import Login from './Login/Login'

export default () => {
  return [...Login(), ...Home()]
}
