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
          
          
        >
          <OurServices />
        </motion.div>
        
        <Footer />
    </div>
  )
}

export default OurServicesPage