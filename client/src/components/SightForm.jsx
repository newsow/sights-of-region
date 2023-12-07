import React from 'react'

const SightForm = () => {
  return (
    <div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Create New Landmark</h2>
          <form className="max-w-sm">
            <div className="mb-4">
              <label htmlFor="Title" className="block text-gray-700 text-sm font-bold mb-2">
                Sight Title:
              </label>
              <input
                type="text"
                id="Title"
                name="Title"
                placeholder="Enter landmark name"
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
                 />
                 <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                   Загрузить
                 </button>
               </div>
            </div>


            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Create Landmark
            </button>
          </form>
        </div>
    </div>
  )
}

export default SightForm