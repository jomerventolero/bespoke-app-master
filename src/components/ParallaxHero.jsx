import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import herosection from '../assets/mainherosection.png'
import styles from '../style'

const ParallaxHero = () => {
  return (
    <div className="flex flex-col ">
        <div className="flex flex-row p-5 justify-center overflow-hidden bg-slate-800">
            <h1 className={`flex-1 font-poppins font-semibold ${styles.textResH1} pb-6 text-white ss:leading-[100px] leading-[75px]`}>
              WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-yellow-400">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!
            </h1>
            <img className="" src={herosection} alt="hero section" />
        </div>
    </div>
  )
}

export default ParallaxHero