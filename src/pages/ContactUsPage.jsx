import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute top-[14%]">
        <ContactForm />
        <Footer />
      </div>
      
    </div>
  )
}

export default ContactUsPage
