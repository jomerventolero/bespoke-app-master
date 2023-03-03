import Loader from '../components/Loader'
import React from 'react'
import { motion } from 'framer-motion'

import { lazy } from 'react'
import { Suspense } from 'react'

const Navbar = lazy(() => import('../components/Navbar'))
const OurServices = lazy(() => import('../components/OurServices'))
const Footer = lazy(() => import('../components/Footer'))


const OurServicesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}

export default OurServicesPage