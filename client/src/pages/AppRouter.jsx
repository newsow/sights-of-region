import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import Main from './Main'
import AdminPanel from './AdminPanel'
import Sights from './Sights'
import Layout from '../components/Layout'
import NotFoundPage from './NotFoundPage'
import Map from './Map'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/admin/login' element={<AdminLogin/>}/>
          <Route path='/admin/panel' element={<AdminPanel/>}/>
          <Route path='/sights/all' element={<Sights/>}/>
          <Route path='/map' element={<Map/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter