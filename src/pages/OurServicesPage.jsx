import Loader from '../components/Loader'
import React from 'react'
import { motion } from 'framer-motion'

import { lazy } from 'react'
import { Suspense } from 'react'
import { SuperSEO } from 'react-super-seo'

const Navbar = lazy(() => import('../components/Navbar'))
const OurServices = lazy(() => import('../components/OurServices'))
const Footer = lazy(() => import('../components/Footer'))



const OurServicesPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SuperSEO
          title="Bespoke | Our Services ⚙️"
          description="Bespoke is led by a team of professionals that have at least 20 years combined experience in the freight forwarding industry in Australia. We are well versed with the importation and exportation requirements that are unique to Australia. Be it the rules and regulations of AQIS (Australian Quarantine and Inspection Scheme) or the daily operations of the various departments such as the operations / forwarding team to the cartage department and the customs broker department, we have done it all. Do drop us a quick enquiry of how we can be of service to you on your staffing requirements. We are certain we would even be able to advise you on building a team of staff that can generate more income for your business that you didn't know you needed."
          url="https://www.mybespokestaff.com/ourservices"
        />
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
            className="absolute top-[18%]"       
          >
            <OurServices />
            <Footer />
          </motion.div>
      </div>
    </Suspense>
  )
}

export default OurServicesPage