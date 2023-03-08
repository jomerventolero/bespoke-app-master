import CustomButton from './CustomButton'
import styles from '../style'
import marketing from '../assets/Icons/marketing.png'
import accounting from '../assets/Icons/accounting.png'
import lineseperator from '../assets/Icons/lineseperator.png'
import customer from '../assets/Icons/customersupport.png'
import dataentry from '../assets/Icons/dataentry.png'
import frontbackoffice from '../assets/Icons/frontbackoffice.png'
import video from '../assets/video.mp4'
import videowebm from '../assets/video.webm'
import { useInView } from 'framer-motion'
import { useRef } from 'react'



const ParallaxHero = () => {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })

  return (
    <div className="top-[-25%] flex flex-col justify-center items-center w-screen overflow-hidden">
      <div className="flex overflow-hidden text-white font-bold">
        
        <div className={`flex flex-row items-center z-10`}>
          <div className='absolute -left-0 flex flex-col justify-center pl-12'>
            <h1 className={`flex-1 ${styles.textResH1} font-poppins font-semibold pb-6 text-brandBlack pr-4 pt-8 drop-shadow-2xl`}>
              "WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-brandBlue text-gradient">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!"
            </h1>
            <a href="ourservices" className="xs:block hidden text-white text-center rounded-full px-1 py-3 bg-brandBlue w-[15%] hover:bg-brandBlack cursor-pointer z-40">
              Read More
            </a>
            <a href="ourservices" className={`sm:hidden text-white text-center ${styles.textResButton} rounded-full px-1 py-3 bg-brandBlue w-[45%] hover:bg-brandBlack cursor-pointer z-40`}>
              Read More
            </a>
          </div>
        </div>
        <div className="bg-fixed">
          <video loop autoPlay muted playsInLine className="object-cover aspect-video w-screen z-0">
            <source src={ videowebm } type="video/webm"/>
            <source src={ video } type="video/mp4"/>
          </video>
        </div>
      </div>

      <div ref={ref} className=' px-[10%] md:block hidden'
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        <div className='w-full h-full p-8 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Marketing" tpx="40" icon={marketing} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Accounting" tpx="40" icon={accounting} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='w-full h-full pt-2 p-10 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Customer Support" tpx="40" icon={customer} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Data Entry" tpx="40" icon={dataentry} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='items-center justify-center self-center p-6 flex pt-2'>
          <CustomButton name="My Bespoke Staff Front/Back Office Support" tpx="40" icon={frontbackoffice} seperator={lineseperator} redirect="contactus"/>
        </div>
      </div>

    </div>
  )
}

export default ParallaxHero