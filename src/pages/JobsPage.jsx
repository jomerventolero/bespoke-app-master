import { lazy } from 'react'
import { Suspense } from 'react'
import Loader from '../components/Loader'

import styles from '../style'

const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))
       
import { motion } from 'framer-motion'

const JobsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <div className="absolute top-[15%] flex flex-col gap-4 justify-center overflow-hidden w-full">
        <motion.div className={``}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 2.5,
                delay: 0.5
            }}
        >
        <h1 className={`font-poppins font-bold ${styles.textResH1} text-brandBlue text-center py-[15%]`}>
          Contact us at<br/>
          employment@mybespokestaff.com
        </h1>
        
        </motion.div>
        <Footer/>
      </div>
    </Suspense>
  )
}

export default JobsPage