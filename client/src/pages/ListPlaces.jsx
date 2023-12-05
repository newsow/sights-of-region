import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const ListPlaces = () => {
    return <div>
        <Navbar/>
            <main className='sm:mx-8 lg:mx-12 sm:mt-3 lg:mt-5'>
                <Link
                    to='/'>
                    <div className='flex rounded-2xl bg-sky-300 max-h-50 sm:mb-3 lg:mb-5 hover:bg-orange-300/60 ease-out duration-200 hover:ease-in'>
                        <div className='flex my-2'>
                            <div className='mx-2 sm:w-2/3 lg:w-1/3 lg:ml-5 lg:my-1.5'>
                                <img
                                    src='https://s0.rbk.ru/v6_top_pics/media/img/7/32/756560077471327.jpg'
                                    className='rounded-2xl my-1 max-h-50 min-h-0 w-80 sm:max-h-36 sm:w-60'/>
                            </div>
                            <div className='block my-1.5'>
                                <h1 className='flex justify-center font-extrabold sm:text-xl lg:text-2xl mt-1.5'>
                                    Нижегородский кремль
                                </h1>
                                <p className='leading-relaxed tracking-wide mt-2.5 lg:ml-2 sm:ml-1 font-semibold sm:text-base lg:text-xl'>
                                    Это историческая крепость, основанная в 13 веке. Она была стратегически важным объектом, защищающим город от врагов.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link
                    to='/'>
                    <div className='flex rounded-2xl bg-sky-300 max-h-50 sm:mb-3 lg:mb-5  hover:bg-orange-300/60 ease-out duration-200 hover:ease-in'>
                        <div className='flex my-2'>
                            <div className='mx-2 sm:w-2/3 lg:w-1/3 lg:ml-5 lg:my-1.5'>
                                <img
                                    src='https://s0.rbk.ru/v6_top_pics/media/img/7/32/756560077471327.jpg'
                                    className='rounded-2xl my-1 max-h-50 min-h-0 w-80 sm:max-h-36 sm:w-60'/>
                            </div>
                            <div className='block my-1.5'>
                                <h1 className='flex justify-center font-extrabold sm:text-xl lg:text-2xl mt-1.5'>
                                    Нижегородский кремль
                                </h1>
                                <p className='leading-relaxed tracking-wide mt-2.5 lg:ml-2 sm:ml-1 font-semibold sm:text-base lg:text-xl'>
                                    Это историческая крепость, основанная в 13 веке. Она была стратегически важным объектом, защищающим город от врагов.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                    <Link
                        to='/'>
                    <div className='flex rounded-2xl bg-sky-300 max-h-50 sm:mb-3 lg:mb-5 hover:bg-orange-300/60 ease-out duration-200 hover:ease-in'>
                        <div className='flex my-2'>
                            <div className='mx-2 sm:w-2/3 lg:w-1/3 lg:ml-5 lg:my-1.5'>
                                <img
                                    src='https://s0.rbk.ru/v6_top_pics/media/img/7/32/756560077471327.jpg'
                                    className='rounded-2xl my-1 max-h-50 min-h-0 w-80 sm:max-h-36 sm:w-60'/>
                            </div>
                            <div className='block my-1.5'>
                                <h1 className='flex justify-center font-extrabold sm:text-xl lg:text-2xl mt-1.5'>
                                    Нижегородский кремль
                                </h1>
                                <p className='leading-relaxed tracking-wide mt-2.5 lg:ml-2 sm:ml-1 font-semibold sm:text-base lg:text-xl'>
                                    Это историческая крепость, основанная в 13 веке. Она была стратегически важным объектом, защищающим город от врагов.
                                </p>
                            </div>
                        </div>
                    </div>
                    </Link>
            </main>
        <Footer/>
    </div>

}
export default ListPlaces;