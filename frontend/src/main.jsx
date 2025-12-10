import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import './assets/css/responsive.css'
import Header from './layouts/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App.jsx'
import Footer from './layouts/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Header />
    <App />

    <Footer />  
  </StrictMode>,
)
