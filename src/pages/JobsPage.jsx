import { lazy } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <Navbar />
      <motion.div className={`absolute top-[15%]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
              duration: 2.5,
              delay: 0.5
          }}
      >
      <h1 className="flex flex-col justify-center self-center align-center font-poppins font-bold ${styles.textResH1} text-brandBlue text-center py-[15%]">
        Contact us at<br/>
        employment@mybespokestaff.com
      </h1>
      <Footer/>
      </motion.div>
      
    </div>
  )
}

export default JobsPage