import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './App'
import Acceuil from './App2'
import Head from './App3'
import Services from './Services'
import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Acceuil />
    <Head />
    <Services />
    <Footer />
  </React.StrictMode>,
)
