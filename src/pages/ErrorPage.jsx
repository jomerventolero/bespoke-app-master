import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import errorPage from '../assets/404.png'

const ErrorPage = () => {
  return (
    <div>
        <Navbar />
        <motion.div className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 4.5,
                delay: 0.2
            }}
        >
            <img src={ errorPage } draggable="false" alt="404" className='w-full h-full'/>
        </motion.div>
        <Footer/>
    </div>
  )
}

export default ErrorPage