import React from 'react'
import { Link } from 'react-router-dom';


export default function NotFoundPage() {
  return (
    <div> 
        <div className="flex flex-col h-screen bg-white">
    <img
      src="https://ic.pics.livejournal.com/nnikolaevna75/40411848/167287/167287_original.jpg"
      alt=""
      className="object-cover w-full h-64"
    />
  
    <div className="flex items-center justify-center flex-1">
      <div className="max-w-xl px-4 py-8 mx-auto text-center">
        <h1 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">
            Ошибка 404
          </h1>
        <h1 className="text-l font-bold tracking-tight text-black sm:text-4xl">
          Мы не нашли данную страницу
        </h1>
  
        <p className="mt-4 text-black/70">
          Попробуйте снова, или вернитесь на главную страницу, чтобы начать заново.
        </p>
  
        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-sky-300 rounded hover:bg-sky-500 focus:outline-none focus:ring"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  </div>
  </div>
  )
}
