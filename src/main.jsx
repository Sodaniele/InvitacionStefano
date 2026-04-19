import React from 'react' // Importante: React debe estar aquí si usas StrictMode
import ReactDOM from 'react-dom/client'
import Invitacion from './invitacion' // Asegúrate que el archivo se llame invitacion.jsx (español)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Invitacion />
  </React.StrictMode>,
)