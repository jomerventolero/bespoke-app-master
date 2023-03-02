import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import OurServices from '../components/OurServices'
import { motion } from 'framer-motion'

const OurServicesPage = () => {
  return (
    <div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 8.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}     
          className="absolute top-[15%]"       
        >
          <OurServices />
          <Footer />
        </motion.div>
    </div>
  )
}

export default OurServicesPage