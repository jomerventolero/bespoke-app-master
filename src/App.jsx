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
        title="Bespoke Enterprise Solutions Inc. | My Bespoke Staff."
        description="Bespoke is led by a team of professionals that have at least 20 years combined experience in the freight forwarding industry in Australia. We are well versed with the importation and exportation requirements that are unique to Australia. Be it the rules and regulations of AQIS (Australian Quarantine and Inspection Scheme) or the daily operations of the various departments such as the operations / forwarding team to the cartage department and the customs broker department, we have done it all. Do drop us a quick enquiry of how we can be of service to you on your staffing requirements. We are certain we would even be able to advise you on building a team of staff that can generate more income for your business that you didn't know you needed."
        url="https://www.mybespokestaff.com/"
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
