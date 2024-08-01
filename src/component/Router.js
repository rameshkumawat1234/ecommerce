import React from 'react'
import Navbar from './Navbar.js'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './contact.js'
import Footer from './Footer.js'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/> 
        <Route path='/Navbar'element={<Navbar/>}/> 
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/Footer'element={<Footer/>}/>
      </Routes>
    </div>
  )
}

export default Router
