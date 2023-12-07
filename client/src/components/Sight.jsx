import React from 'react'
import { Link } from 'react-router-dom'

const Sight = ({sight}) => {
  let sliced = sight.description.slice(0,150);
  if (sliced.length < sight.description.length) {
  sliced += '...';
  }
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={'http://localhost:5000/'+sight.imagePath}
        alt={sight.tilte}
        className="w-full h-40 object-cover object-center"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{sight.title}</h2>
        <p className="text-gray-600 mb-4">{sliced}</p>
        <Link to={`/sight/${sight._id}`} className="text-blue-500 hover:underline">
          Подробнее
        </Link>
      </div>
  </div>
  )
}

export default Sight