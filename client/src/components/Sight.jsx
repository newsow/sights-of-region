import React from 'react'
import image from '../images/admin-login.jpg'
const Sight = ({sight}) => {
  return (
    <div>
        <div className="text-white font-bold bg-orange-300/60 border p-8 shadow-xl transition hover:bg-orange-300/80 ease-out duration-200 hover:ease-in w-full h-full rounded-3xl flex flex-col justify-center items-center mx-10 my-8 ">
            <img src={image} alt="" className='w-full h-32 rounded-2xl'/>
            <h3>{sight.title}</h3>
        </div>
    </div>
  )
}

export default Sight