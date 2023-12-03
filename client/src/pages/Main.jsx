import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Main = () => {

  return (
      <div>
        <Navbar/>
        <main
            className="relative bg-[url('https://ic.pics.livejournal.com/nnikolaevna75/40411848/167287/167287_original.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div
              className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
          ></div>

          <div
              className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="text-2xl font-extrabold sm:text-5xl text-sky-500">
                Сокровища Нижегородской Области
              </h1>

              <p className="mt-4 max-w-lg sm:text-2xl sm:leading-relaxed text-orange-300 font-bold">
                Лучшие места всей Нижегородской Области
              </p>


            </div>
          </div>
        </main>



        <section className="bg-white text-sky-400">
          <div
              className="mx-auto max-w-screen-xl px-4 py-6 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
          >
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Возможности платформы</h2>

              <Link
                  to="/"
                  className="mt-4 text-xl font-medium text-orange-300">
                Лучшие места для знакомства с Нижегородской Областью
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
              <Link
                  to=""
                  className="block text-white hover:text-sky-400 bg-sky-300 rounded-xl border p-8 shadow-xl transition hover:bg-orange-300/60 ease-out duration-200 hover:ease-in"
              >
                <h2 className="mt text-2xl font-bold ">Карта</h2>

                <p className="mt-1 text-base font-semibold">
                 С помощью карты вы можете ознакомиться с достопремичательностями разных районов Нижегородской Области
                </p>
              </Link>

              <Link
                  to="/"
                  className="block text-white hover:text-sky-400 bg-sky-300 rounded-xl border p-8 shadow-xl transition hover:bg-orange-300/60 ease-out duration-200 hover:ease-in"
              >
                <h2 className="mt text-2xl font-bold">Достопремичательности</h2>

                <p className="mt-1 text-base font-semibold">
                  С помощью нашего сайта вы можете узнать о множестве разных мест, которые стоит посетить в Нижегородской Области
                </p>
              </Link>
            </div>
          </div>
        </section>



        <footer className="bg-white border-t-2 border-orange-300">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-4 text-center text-m lg:mt-0"
              >Copyright &copy; 2023. Все права защищены.</p>
              <Link
                  to="/"
                  className="mt-4 text-center text-m hover:opacity-50 lg:mt-0 lg:text-right ">
                Вход в панель администратора.
              </Link>

            </div>
          </div>
        </footer>

      </div>
  )
}

export default Main;