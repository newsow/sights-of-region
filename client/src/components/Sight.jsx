import React from 'react'
import image from '../images/admin-login.jpg'
const Sight = ({sight}) => {
  return (
    <div>
        <div className="bg-gray-300 w-72 h-60 rounded-3xl flex flex-col justify-center items-center mx-10 my-8 ">
            <img src={image} alt="" className='w-40 h-32 rounded-2xl'/>
            <h3>{sight.title}</h3>
        </div>
    </div>
  )
}

export default Sight