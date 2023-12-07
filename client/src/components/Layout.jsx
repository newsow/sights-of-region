import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar' 

export default function Layout () {
  return (
    <div>
        <Navbar/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
        <Footer/>
    </div>
  )
}


