import React from 'react'

import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
 

  return (
   <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
     
   </div>
  )
}

export default App
