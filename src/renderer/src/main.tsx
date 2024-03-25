import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import WelcomePage from './components/navigation/WelcomePage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WelcomePage />
    <App />
  </React.StrictMode>,
)
