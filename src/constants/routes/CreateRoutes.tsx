import { Routes, BrowserRouter, Route } from 'react-router-dom'
import routes from './groups/index'
import LoginWrapper from '../../wrappers/LoginWrapper'

const CreateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes().map(({ component, route }) => {
          return (
            <Route
              path={route}
              element={<LoginWrapper>{component}</LoginWrapper>}
              key={route}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default CreateRoutes
