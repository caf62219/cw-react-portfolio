import React from 'react'

import './App.css'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
   <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
   </div>
  )
}

export default App
