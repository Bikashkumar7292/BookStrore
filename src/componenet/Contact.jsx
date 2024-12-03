import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Contact() {
  return (
	<>
	<div>
	<Navbar/>

<div className='flex h-screen items-center justify-center  ' >
<form className='flex flex-col items-center justify-center  bg-slate-600 w-[400px] h-[500px] border- '>
	<h1 className='text-3xl text-bold  '>Contact Us</h1>

	<span>Name</span>
	<input type='text' placeholder='Enter Your Name' className='p-2 m-2 border-'/>
	<span>Email</span>
	<input type='email' placeholder='Enter your Email' className='p-2 m-2 border-'/>
	<span>Message!!!</span>
	<input type='text' placeholder='Type your sussegtion' className='p-5 m-2 border-'/>
	<br />
	<button className='bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 p-8 rounded'>Submit</button>
</form>
</div>
	</div>
	</>
  )
}

export default Contact
