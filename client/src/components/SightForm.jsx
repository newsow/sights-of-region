import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
const SightForm = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [district,setDistrict] = useState('')
  const [image,setImage] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token){
      return navigate('/admin/login')
    }
  })
  const createSight = async(e) =>{
    const formData = new FormData()
    formData.append('title',title)
    formData.append('description',description)
    formData.append('district',district)
    formData.append('file',image)
    const res = await axios.post('http://localhost:5000/admin/create/sight',formData,{ headers: {'Content-Type': 'multipart/form-data'}})
    console.log(res)
  }
  return (
    <div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Create New Landmark</h2>
          <form className="max-w-sm" onSubmit={(e)=>createSight(e)}>
            <div className="mb-4">
              <label htmlFor="Title" className="block text-gray-700 text-sm font-bold mb-2">
                Sight Title:
              </label>
              <input
                type="text"
                id="Title"
                name="Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="Enter sight title"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="desc" className="block text-gray-700 text-sm font-bold mb-2">
                Sight Description:
              </label>
              <input
                type="text"
                id="desc"
                name="desc"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                placeholder="Enter sight description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                Sight Location:
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={district}
                onChange={(e)=>setDistrict(e.target.value)}
                placeholder="Enter sight location"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex items-center justify-center mb-12">
               <div className="bg-gray-200 p-8 rounded-md shadow-md">
                 <label htmlFor="photoInput" className="block text-gray-700 font-bold mb-2">
                   Загрузить фотографию
                 </label>
                 <input
                   type="file"
                   id="photoInput"
                   className="border rounded-md py-2 px-3 w-full"
                   accept="image/*"
                   onChange={(e)=>setImage(e.target.files[0])}
                 />
               </div>
            </div>


            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Create Sight
            </button>
          </form>
        </div>
    </div>
  )
}

export default SightForm