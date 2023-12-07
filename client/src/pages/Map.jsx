import React from 'react'

export default function Map() {
  return (
    <div className='flex justify-center bg-[url(https://ic.pics.livejournal.com/nnikolaevna75/40411848/167287/167287_original.jpg)]'>
        <div className=' mt-3 '>
            <h1 className='flex font-bold sm:text-2xl lg:text-3xl sm:my-1.5 lg:my-3 mx-5 text-white'>
                Интерактивная карта Нижегородской Области
            </h1>
            <div>
                <iframe
                    className=' flex ml-16 mb-3 rounded-xl w-4/5'
                    title='Map'
                    height='600'
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A2861c5bf1d275123895f654f412df69e7e2e9159378ed1da8297a5d3bca364f6&amp;source=constructor"
                >
                </iframe>
            </div>
        </div>
    </div>
  )
}
