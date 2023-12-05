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