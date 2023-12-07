import React from 'react'
import { Link } from 'react-router-dom'
const Sight = ({sight}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={sight.image}
        alt={sight.name}
        className="w-full h-40 object-cover object-center"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{sight.name}</h2>
        <p className="text-gray-600 mb-4">{sight.description}</p>
        <Link to={`/sights/${sight.id}`} className="text-blue-500 hover:underline">
          Подробнее
        </Link>
      </div>
  </div>
  )
}

export default Sight