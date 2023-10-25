import { lazy } from 'react'
import { Suspense } from 'react'
import Loader from '../components/Loader'

const Navbar = lazy(() => import('../components/Navbar'))
const HowitWorks = lazy(() => import('../components/HowitWorks'))
const Footer = lazy(() => import('../components/Footer'))


export default function() {
    return(
        <Suspense fallback={<Loader/>}>
            <div>
                <Navbar/>
                <div className="absolute top-[15%]">
                    <HowitWorks/>
                    <Footer/>
                </div>
            </div>
        </Suspense>
    )
}
