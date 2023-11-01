import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import About from './About/About'
import Errorpage from '../Errorpage'
import Home from './Home'
import Service from './Service'
import Contact from './Contact/Contact'
import Settings from './setting/Settings'
import './SampleApp.css'

function SampleApp() {





  return (
    <div>
       <Nav  className=" Navbar">
     
        <Nav className='navlist'><Link to={'/'}>Home</Link></Nav>   
    
      <Nav className='navlist'><Link to={'/Service'}>Service</Link></Nav>
    
      <Nav className='navlist'><Link to={'/About'}>About</Link></Nav>
   
      <Nav className='navlist'><Link to={'/Contact'}>Contact</Link></Nav>
    
      <Nav className='navlist '><Link to={'/Setting'}>Setting</Link></Nav>
      <Nav> </Nav>
   
    </Nav>

        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/Service' element={<Service/>}  />
            <Route path='/About' element={<About/>}  />
            <Route path='/Contact' element={<Contact/>}  />
            <Route path='/Setting' element={<Settings/>}  />
            <Route path='/Error' element={<Errorpage/>}  />
        </Routes>
    </div>
  )
}


export default SampleApp