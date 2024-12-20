import removeLocalStorageItems from './removeLocalStorageItems.ts'
import routes from '../../constants/routes/routes.ts'

const logOut = () => {
  removeLocalStorageItems()
  window.location.href = routes.login.sign_in
}

export default logOut
