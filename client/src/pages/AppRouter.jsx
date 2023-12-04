import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import Sights from './Sights'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/' element={<Sights/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter