import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
const AdminForm = () => {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      return navigate('/admin/login')
    }
  })
  const createAdmin = async(e) =>{
    const formData = new FormData()
    formData.append('login',login)
    formData.append('password',password)
    const res = await axios.post('http://localhost:5000/admin/create/admin',{
      login,
      password
    })
  }
  return (
    
    <div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Admin</h2>
          <form className="max-w-sm" onSubmit={(e)=>createAdmin(e)} >
            <div className="mb-4">
              <label htmlFor="adminName" className="block text-gray-700 text-sm font-bold mb-2">
                Admin Login:
              </label>
              <input
                type="text"
                id="adminName"
                value={login}
                name="adminName"
                placeholder="Enter admin name"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={(e)=>setLogin(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="adminPwd" className="block text-gray-700 text-sm font-bold mb-2">
                Admin Password:
              </label>
              <input
                type="password"
                id="adminPwd"
                name="adminPwd"
                placeholder="Enter admin password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>


            <button 
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Create Admin
            </button>
          </form>
        </div>
    </div>
  )
}

export default AdminForm