import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin/login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter