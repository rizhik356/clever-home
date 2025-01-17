import { ConfigProvider } from 'antd'
import CreateRoutes from './constants/routes/CreateRoutes'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setToken } from './shared/store/slices/authSlice.ts'
import makeAuthorizedAxiosInstance from './shared/helpers/makeAuthorizedAxiosInstance.ts'

function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('access_token')

    if (token) {
      dispatch(setToken(token))
      makeAuthorizedAxiosInstance()
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
          Modal: {
            borderRadiusLG: 0,
          },
          Select: {
            activeBorderColor: 'none',
            hoverBorderColor: 'none',
            borderRadius: 0,
            borderRadiusSM: 0,
            borderRadiusLG: 0,
            borderRadiusXS: 0,
            colorBorder: 'none',
            colorTextPlaceholder: '#5e5d5d',
            activeOutlineColor: 'none',
            optionSelectedBg: '#4e8e6d',
            optionSelectedColor: 'white',
            colorErrorOutline: 'none',
          },
          Input: {
            borderRadius: 0,
            borderRadiusSM: 0,
            borderRadiusLG: 0,
            borderRadiusXS: 0,
            colorBorder: 'none',
            colorTextPlaceholder: '#5e5d5d',
            activeShadow: 'none',
            colorErrorOutline: 'none',
          },
          Form: {
            itemMarginBottom: 0,
          },
          Card: { paddingLG: 10 },
          Collapse: {
            headerBg: '#4e8e6d',
            colorTextHeading: 'white',
            borderRadiusLG: 0,
          },
        },
      }}
    >
      {!loading && <CreateRoutes />}
    </ConfigProvider>
  )
}

export default App
