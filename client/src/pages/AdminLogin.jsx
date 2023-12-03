import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import image from '../images/admin-login.jpg'
import axios from 'axios';
const AdminLogin = () => {
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const redirectChat = (status) =>{
    if(status === 200){
        return navigate('/chat')
    }
  } 
  const loginForm = async(e) =>{
      try {
          e.preventDefault()
          const response = await axios.post('http://localhost:5000/auth/login',{
              login,
              password,
          }
          )
          localStorage.setItem('token',response.data.token) 
          redirectChat(response.status,response.data.id)
      } catch (error) {
          console.log(error)
      }

  }
  return (
    <div>

 <div className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
	style={{backgroundImage: `url(${image})`}}>
	<div className="absolute bg-black opacity-60 inset-0 z-0"></div>
	<div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
		<div className="text-center">
			<h2 className="mt-6 text-4xl font-bold text-gray-900">
				Админ Панель
			</h2>
			<p className="mt-2 text-sm text-gray-600">Пожалуйста, зайдите в свой аккаунт</p>
		</div>
		
		<form className="mt-8 space-y-6" onSubmit={(e)=>loginForm(e)}>
			<input type="hidden" name="remember" value="true" />
			<div className="relative">
				<label className="text-sm font-bold text-gray-700 tracking-wide"
        for="Email">
        Login</label>
				<input className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Введите login"
        id="Email"
        type="email"
        name="email"
        value={login}
        onChange={(e)=>setLogin(e.target.value)}
         />
            </div>
			<div className="mt-8 content-center">
				<label className="text-sm font-bold text-gray-700 tracking-wide"
        for="Password">
					Пароль
				</label>
				<input className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder="Введите пароль"
        type="password"
        id="Password"
        name="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
            </div>
			<div className="flex items-center justify-between">
					
				
			</div>
			<div>
				<button type="submit" className="w-full flex justify-center inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Войти
          </button>
			</div>

		</form>
	</div>
</div>
    </div>
  )
}

export default AdminLogin