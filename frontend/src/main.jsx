import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter} from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx"
import './assets/css/style.css'
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>

    </BrowserRouter>
  </StrictMode>,
)
