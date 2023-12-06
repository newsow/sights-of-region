import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import Main from './Main'
import Sights from './Sights'
import Layout from '../components/Layout'
import NotFoundPage from './NotFoundPage'
import Map from './Map'
import SightPage from './SightPage'
import AdminSidebar from '../components/AdminSidebar'
import AdminForm from '../components/AdminForm'
import SightForm from '../components/SightForm'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/place' element={<SightPage/>}/>
          <Route path='/admin/panel' element={<AdminSidebar/>}>
            <Route path='/admin/panel' element={<AdminForm/>}/>
            <Route path='/admin/panel/sight' element={<SightForm/>}/>
          </Route>
          <Route path='/sights/all' element={<Sights/>}/>
          <Route path='/map' element={<Map/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>

        <Route path='/admin/login' element={<AdminLogin/>}/>
      </Routes>
    </div>
  )
}

export default AppRouter