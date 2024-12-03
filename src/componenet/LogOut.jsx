import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
function LogOut() {
	const [authUser,setAuthUser]=useAuth()
	const handleLogout=()=>{
		try {
			setAuthUser({
				...authUser,
				user:null
			})
			localStorage.removeItem("Users")
			toast.success("Logout successfully")
			setTimeout(()=>{
				window.location.reload()

			},1000)
			// window.location.reload();
		} catch (error) {
			toast.error("Error "+ error.message)
			setTimeout(()=>{

			},2000)

		}
	}
  return (
	<>
	<button className='px-3 bg-red-600 py-2 text-white rounded-md cursor-pointer'
	onClick={handleLogout}


	>Logout</button>


	</>
  )
}

export default LogOut
