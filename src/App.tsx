import { ConfigProvider } from 'antd'
import CreateRoutes from './constants/routes/CreateRoutes'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setToken } from './shared/store/slices/authSlice.ts'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      dispatch(setToken(token))
    }
    setLoading(false)
  }, [])

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            colorPrimary: '#4e8e6d',
            navArrowColor: '#4e8e6d',
          },
          Button: {
            colorPrimary: '#4e8e6d',
            borderRadiusLG: 0,
            colorPrimaryHover: '#4e8e6d',
            colorPrimaryActive: '#4e8e6d',
          },
        },
      }}
    >
      {!loading && <CreateRoutes />}
    </ConfigProvider>
  )
}

export default App
