import React from 'react'
import Loader from '../components/Loader'
import { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../components/Navbar'))
const AboutUs = lazy(() => import('../components/AboutUs'))
const Footer = lazy(() => import('../components/Footer'))


const AboutUsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Navbar />
        <div className="absolute top-[15%]">
          <AboutUs />
          <Footer />
        </div>
      </div>
    </Suspense>
  )
}

export default AboutUsPage
