import React from 'react'
import Navbar from '../componenet/Navbar'
import Course from '../componenet/Course'
import Footer from '../componenet/Footer'

function Courses() {
  return (
	<>
	<Navbar/>
	<div className='min-h-screen'>
	<Course/>
	</div>
	<Footer/>
	</>
  )
}

export default Courses
