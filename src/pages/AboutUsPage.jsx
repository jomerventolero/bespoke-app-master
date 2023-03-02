import React from 'react'
import AboutUs from '../components/AboutUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute top-[15%]">
        <AboutUs />
        <Footer />
      </div>

    </div>
  )
}

export default AboutUsPage
