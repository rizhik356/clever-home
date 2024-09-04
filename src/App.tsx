import { ConfigProvider } from 'antd'
import LoginPage from './pages/Login/LoginPage'

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            colorPrimary: '#4e8e6d',
            navArrowColor: '#4e8e6d',
          },
        },
      }}
    >
      <LoginPage />
    </ConfigProvider>
  )
}

export default App
