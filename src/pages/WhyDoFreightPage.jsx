import React from 'react'
import Loader from '../components/Loader'

import { lazy, Suspense } from 'react'

const WhyDoFreight = lazy(() => import('../components/WhyDoFreight'))
const Navbar = lazy(() => import('../components/Navbar'))
const Footer = lazy(() => import('../components/Footer'))


const WhyDoFreightPage = () => {
  return (
    <Suspense fallback={<Loader />}>
        <Navbar />
        <div className='absolute top-[15%]'>
            <WhyDoFreight />
            <Footer />
        </div>
    </Suspense>
  )
}

export default WhyDoFreightPage