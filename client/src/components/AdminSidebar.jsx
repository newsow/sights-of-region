import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const AdminSidebar = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
    {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        {/* Add sidebar links */}
        <ul className="mt-4">
          <li className="mb-2">
            <Link to='/admin/panel' className="text-gray-300 hover:text-white">Admins</Link>
          </li>
          <li className="mb-2">
            <Link to='/admin/panel/sight' className="text-gray-300 hover:text-white">Sights</Link>
          </li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet/>
      </div>
      
    </div>

  )
}

export default AdminSidebar