import { lazy } from 'react'
import { Suspense } from 'react'
import Loader from '../components/Loader'


const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))
       
import { motion } from 'framer-motion'
import { SuperSEO } from 'react-super-seo'

const JobsPage = () => {

  return (
    <Suspense fallback={<Loader />}>
       <SuperSEO
          title="Bespoke | Jobs ⚒️"
          description="Working at Bespoke. Jobs At Bespoke"
          url="https://www.mybespokestaff.com/jobs"
        />
      <Navbar />
      <div className="absolute top-[18%] flex flex-col gap-4 justify-center overflow-hidden w-full">
        <motion.div className={`flex justify-center py-52 bg-officebg bg-cover`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 2.5,
                delay: 0.5
            }}
        >
          <button onClick={() => {window.location.href = 'https://odoo.mybespokestaff.com/jobs'}} className="font-poppins text-center font-semibold text-3xl text-brandBlue p-5 rounded-full shadow-2xl bg-white hover:bg-brandBlue hover:text-white transition-colors ease-in-out duration-300">Go to Jobs Page 🏢</button>
        </motion.div>
        <Footer/>
      </div>
    </Suspense>
  )
}

export default JobsPage