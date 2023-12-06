import React from 'react'

const AdminForm = () => {
  return (
    <div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create New Admin</h2>
          <form className="max-w-sm">
            <div className="mb-4">
              <label htmlFor="adminName" className="block text-gray-700 text-sm font-bold mb-2">
                Admin Login:
              </label>
              <input
                type="text"
                id="adminName"
                name="adminName"
                placeholder="Enter admin name"
                className="w-full p-2 border border-gray-300 rounded"
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