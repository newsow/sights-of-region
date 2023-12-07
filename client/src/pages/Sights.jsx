import React,{useState,useEffect} from 'react'
import Sight from '../components/Sight'
import SightsList from './SightsList'
import image from '../images/admin-login.jpg'
import axios from 'axios'
const Sights = () => {
    const [search,setSearch] = useState('')
    const [sights,setSights] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/sights/all')
        .then(res=>{
            setSights(res.data)
        }).catch(error=>{console.log(error)})
    },[])
    const filtredSights = sights.filter(sight=>{
        return sight.title.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <div className='w-full h-full flex-col justify-center '>
        <div className="flex justify-center">
            
            <form className='w-4/5 mt-9'>
            <h1 className='my-4 text-lg font-bold'>Достопремичательности Нижегородской области</h1>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                    type="search" 
                    id="default-search" 
                    class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Поиск по названию" 
                    required
                    onChange={e=>setSearch(e.target.value)}
                    />

                </div>
            </form>
        </div>
        <SightsList sights={filtredSights}/>
    </div>
  )
}

export default Sights