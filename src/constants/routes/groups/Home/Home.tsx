import HomePage from "../../../../pages/Home/MainPage"
import routes from "../../routes"


const Home = () => {
    const {home} = routes
 return [
    {component: <HomePage />, route: home.main, wrapper: 'home'}
 ]
}
export default Home