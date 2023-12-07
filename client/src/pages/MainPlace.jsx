import React from "react";
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import cancel from "../images/return-back-button-svgrepo-com.svg"
import Footer from "../components/Footer";

const MainPlace = () => {
    return <div>
        <div className='flex mx-6 my-6'>
            <Link
                to='/'
                className='rounded-full border shadow-mt hover:bg-gray-200 duration-200'>
                <img src={cancel} className='w-8' alt="cancel" />
            </Link>
            <h2 className='flex mx-auto font-bold text-sky-400 justify-center lg:text-4xl sm:text-3xl '>
                Нижегородский Кремль
            </h2>
        </div>
        <main className='mx-10 '>
            <div className='h-full text-justify indent-6 leading-relaxed tracking-wide text-orange-400 font-semibold lg:text-2xl sm:text-xl'>
                <p>
                    Это историческая крепость, основанная в 13 веке. Она была стратегически важным объектом, защищающим город от врагов. В настоящее время Кремль является одной из главных достопримечательностей Нижнего Новгорода. Внутри Кремля находятся различные исторические сооружения, включая Никольскую башню, Арсенал, Звездный Зал и Патриарший дворец.
                </p>
            </div>
            <html  className='my-10 flex flex-row '>
                <div className='mx-2'>
                    <img
                        src='https://s0.rbk.ru/v6_top_pics/media/img/7/32/756560077471327.jpg'
                        className='rounded-xl'/>
                </div>
                <div className='mx-2'>
                    <img
                        src='https://s0.rbk.ru/v6_top_pics/media/img/7/32/756560077471327.jpg'
                        className='rounded-xl'/>
                </div>
            </html>

        </main>

    </div>

}
export default MainPlace;