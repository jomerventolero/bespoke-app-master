import Resources from "../components/Resources"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const ResourcesPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="absolute top-[15%]">
        <Resources/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default ResourcesPage
