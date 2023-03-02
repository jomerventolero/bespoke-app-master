import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import WhyChooseBespoke from './components/WhyChooseBespoke'
import ParallaxHero from './components/ParallaxHero'

import { motion } from 'framer-motion'
import { SuperSEO } from "react-super-seo"

function App() {

  return (
    <div className="bg-white">
      <SuperSEO
        title="Bespoke"
        description="Bespoke is a full-service digital agency that helps businesses grow online. We are a team of passionate designers, developers, and marketers who are committed to delivering results."
        url="https://mybespokestaff.com/"
      />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01]
        }}  
        className="absolute top-[10%] w-screen"
      >
        <ParallaxHero/>
        <div className="px-[10%]">
          <WhyChooseBespoke/>
          <Testimonials />
        </div>
        <Footer />
      </motion.div>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
