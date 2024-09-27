import { ConfigProvider } from 'antd'
import CreateRoutes from './constants/routes/CreateRoutes'

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
      <CreateRoutes />
    </ConfigProvider>
  )
}

export default App
