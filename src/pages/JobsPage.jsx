import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import styles from '../style'

const JobsPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <Navbar />
      <motion.div className={`flex flex-col justify-center font-poppins font-bold ${styles.textResH1} text-brandBlue text-center py-[15%]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
              duration: 2.5,
              delay: 0.5
          }}
      >Contact us at<br/>
      info@mybespokestaff.com
      </motion.div>
      <Footer />
    </div>
  )
}

export default JobsPage