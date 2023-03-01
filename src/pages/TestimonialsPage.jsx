import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Testimonials  from '../components/Testimonials'

const TestimonialsPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='absolute top-[8%] flex flex-col justify-center'>
        <Testimonials/>
        <Footer/>
      </div>  
    </div>
  )
}

export default TestimonialsPage
