import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Galaxy from '../src/Img/Galaxy.webp'
import Mobile from '../src/Img/Mobile.jpg'
import Oppo from '../src/Img/Oppo.webp'
import OLX from '../src/Img/OLX-Symbol.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
