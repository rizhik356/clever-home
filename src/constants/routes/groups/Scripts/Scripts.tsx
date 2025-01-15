import ScriptsPage from '../../../../pages/Scripts/MainPage'
import routes from '../../routes'

const Devices = () => {
  const { scripts } = routes
  return [{ component: <ScriptsPage />, route: scripts.main, wrapper: 'home' }]
}
export default Devices
