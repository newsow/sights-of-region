import React from 'react'
import {Link} from "react-router-dom";


export default function Footer() {
  return (
    <div>
         <footer className="bg-white border-t-2 border-orange-300">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="mt-4 text-center text-m lg:mt-0"
              >Copyright &copy; 2023. Все права защищены.</p>
              <Link
                  to="/admin/login"
                  className="mt-4 text-center text-m hover:opacity-50 lg:mt-0 lg:text-right ">
                Вход в панель администратора.
              </Link>

            </div>
          </div>
        </footer>
    </div>
  )
}
