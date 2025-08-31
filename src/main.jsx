import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {TaskContextProvider} from './Context/TaskContext';
import {App} from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <App/>
    </TaskContextProvider>

  </StrictMode>,
)
