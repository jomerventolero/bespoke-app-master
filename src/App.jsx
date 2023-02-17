import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Hero from './components/Hero'
import styles from './style'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import HowitWorks from './components/HowitWorks'
import OurServices from './components/OurServices'
import AboutUs from './components/AboutUs'
import ContactForm from './components/ContactForm'
import Resources from './components/Resources'

function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
          <Navbar />
      </div>
      <div className={`${styles.flexStart}`}>
        <Hero />
      </div>
      <div>
        <OurServices />
        <HowitWorks />
        <Testimonials />
        <AboutUs />
        <ContactForm />
        <Resources />
      </div>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  )
}

export default App
