/* The line `expect(frontBackOfficeButton).toHaveAttribute('redirect', 'contactus');` is an
assertion in a test case. It is checking that the `frontBackOfficeButton` element has an
attribute called `redirect` with a value of `'contactus'`. If the assertion fails, it means that
the button does not have the expected attribute or the attribute value is not `'contactus'`. */
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