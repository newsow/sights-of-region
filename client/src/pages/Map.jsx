import React from 'react'

export default function Map() {
  return (
    <div className='flex justify-center'>
        <div>
            <h1>
                Интерактивная карта Нижегородской области
            </h1>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d567965.5275481252!2d43.970831693233386!3d56.21560526203981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1701700141923!5m2!1sru!2sru" width="800" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
  )
}
