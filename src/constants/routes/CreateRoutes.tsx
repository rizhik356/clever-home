import { Routes, BrowserRouter, Route } from 'react-router-dom'
import routes from './groups/index'
import SelectWrapper from '../../wrappers/SelectWrapper'

const CreateRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        {routes().map(({ component, route, wrapper }) => {
          return (
            <Route
              path={route}
              element={SelectWrapper({component, wrapper})}
              key={route}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default CreateRoutes
