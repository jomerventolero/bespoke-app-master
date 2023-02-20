import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <Navbar />
     <div className="flex flex-col justify-center font-poppins font-bold text-[50px] text-brandBlue text-center py-[15%]">Stay Tuned!!</div>
        <Footer />
    </div>
  )
}

export default JobsPage