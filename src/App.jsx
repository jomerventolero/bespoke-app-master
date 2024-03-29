/* These are import statements in a React component file. */
import Loader from './components/Loader'
import React from 'react'

import { lazy } from 'react' 
import { Suspense } from 'react'
import { motion, useScroll } from 'framer-motion'

const Navbar = lazy(() => import('./components/Navbar'))
const ParallaxHero = lazy(() => import('./components/ParallaxHero'))
const WhyChooseBespoke = lazy(() => import('./components/WhyChooseBespoke'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Footer = lazy(() => import('./components/Footer'))

import { SuperSEO } from "react-super-seo"
import { SpeedInsights } from "@vercel/speed-insights/react"


/* This is a React functional component named `App` that returns JSX code. It includes several other
React components such as `Loader`, `Navbar`, `ParallaxHero`, `WhyChooseBespoke`, `Testimonials`,
`Footer`, and `WhatsAppFloatingButton`. It also includes a `SuperSEO` component that provides
metadata for search engine optimization. The `Suspense` component is used to handle asynchronous
loading of the other components, and the `motion` component is used for animation. The JSX code is
wrapped in parentheses and returned by the `App` function. Finally, the `App` component is exported
as the default export of the module. */

function App() {
  const { scrollYProgress } = useScroll()

  return (
    <Suspense fallback={<Loader/>}>
      <div className="bg-white overflow-hidden">
        <motion.div className="progress-bar sm:hidden" style={{ scaleX: scrollYProgress }} />
        <SuperSEO
          title="Bespoke Enterprise Solutions Inc. - Bespoke Staffing Solutions"
          description="Bespoke Enterprise Solutions is led by a team of professionals that have at least 20 years combined experience in the freight forwarding industry in Australia. We are well versed with the importation and exportation requirements that are unique to Australia. Be it the rules and regulations of AQIS (Australian Quarantine and Inspection Scheme) or the daily operations of the various departments such as the operations / forwarding team to the cartage department and the customs broker department, we have done it all. Do drop us a quick enquiry of how we can be of service to you on your staffing requirements. We are certain we would even be able to advise you on building a team of staff that can generate more income for your business that you didn't know you needed. Looking for a reliable and efficient freight forwarding company in Australia? Discover top-notch logistics solutions, seamless cargo transportation, and international shipping services with our trusted Australian freight forwarding experts. Streamline your supply chain, reduce shipping costs, and ensure the smooth movement of goods across borders. Explore our comprehensive freight forwarding services to optimize your global logistics today. bespoke"
          lang='en'
          url="https://www.mybespokestaff.com/"
        />
        <SpeedInsights />
        <Navbar />
        <div
          className="absolute w-screen overflow-x-hidden"
        >
          <ParallaxHero/>
          <div className="px-[10%]">
            <WhyChooseBespoke/>
            <Testimonials />
          </div>
          <Footer />
        </div>
      </div>
    </Suspense>
  )
}

export default App
