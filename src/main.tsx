import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
/**"Contextos em react" em Biblioteca por exemplo toda Lib tem seu Provide que estabelece comunicação entre os componentes da lib  */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
   
    <App />
   
  </React.StrictMode>
)
