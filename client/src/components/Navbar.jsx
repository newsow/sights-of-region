import React from 'react'
import logo from '../images/travel-svgrepo-com.svg'
import {Link} from "react-router-dom";


const Navbar = () => {
    return<header aria-label="Site Header" className="bg-white p-3 border-b-2 border-orange-300">
        <div
            className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
        >
            <div className="flex items-center gap-4">
                <Link
                    to="">
                    <img src={logo} className='w-12 fill-sky-500' alt="Logo" />
                </Link>
            </div>

            <div className="flex flex-1 items-center justify-end gap-8">
                <nav
                    aria-label="Site Nav"
                    className="flex gap-2 sm:gap-3 lg:text-xs font-bold lg:uppercase lg:tracking-wide text-white"
                >
                    <Link
                        to="/"
                        className="block text-white py-2 px-3 sm:px-6 rounded-md bg-sky-400 hover:bg-sky-600"
                    >
                        Карта
                    </Link>

                    <Link
                        to="/"
                        className="block text-white py-2 px-3 sm:px-6 rounded-md bg-sky-400  hover:bg-sky-600"
                    >
                        Достопремичательности
                    </Link>
                </nav>
            </div>
        </div>
    </header>


}

export default Navbar