import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HowitWorks from '../components/HowitWorks'

export default function() {
    return(
        <div>
            <Navbar/>
            <div className="absolute top-[12%]">
                <HowitWorks/>
                <Footer/>
            </div>
        </div>
    )
}
