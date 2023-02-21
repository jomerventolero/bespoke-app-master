import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import styles from './style'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import WhyChooseBespoke from './components/WhyChooseBespoke'
import { motion } from 'framer-motion'


function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
          <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}  
      >
        <Hero />
      </motion.div>
      <div>
        <WhyChooseBespoke/>
        <Testimonials />
        <Footer />
      </div>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
