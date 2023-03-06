import React from 'react'

import { lazy, Suspense } from 'react'
import Loader from '../components/Loader'

const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))
const WhyShouldYou = lazy(() => import('../components/WhyShouldYou'))


const WhyShouldYouPage = () => {
  return (
    <Suspense fallback={<Loader />}>
    <div>
      <Navbar />
      <div className="absolute top-[15%]">
        <WhyShouldYou />
        <Footer />
      </div>
    </div>
    </Suspense>
  )
}

export default WhyShouldYouPage