import CustomButton from './CustomButton'
import styles from '../style'
import marketing from '../assets/Icons/marketing.png'
import accounting from '../assets/Icons/accounting.png'
import lineseperator from '../assets/Icons/lineseperator.png'
import customer from '../assets/Icons/customersupport.png'
import dataentry from '../assets/Icons/dataentry.png'
import frontbackoffice from '../assets/Icons/frontbackoffice.png'
import video from '../assets/video_1.mp4'
import videowebm from '../assets/video.webm'
import useParallax from '../utils/parallax'
import itsupp from '../assets/Icons/it-4.png'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'


const ParallaxHero = () => {
  const ref = useRef()

  useState(() => {
    useParallax();
  }, []);


  return (
    <div className="flex flex-col justify-center items-center w-screen overflow-hidden">
      <div className="flex overflow-hidden text-white font-bold">
        <div className="z-0 parallax" data-speed="0.5">
          <video loop autoPlay muted playsInLine className="object-fit aspect-video w-screen h-full z-0 lg:block hidden">
            <source src={ video } type="video/mp4"/>
          </video>
        </div>
        
        <div className={`pt-[26rem] sm:pt-20  md:pt-0 flex flex-row items-center z-10 `}>
          <div className='md:absolute -left-0 flex flex-col justify-center pl-12'>
            <motion.h1 
              initial={{ opacity: 0, y: "10vw" }}
              animate={{ opacity: 1 , y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className={`flex-1 ${styles.textResH1} font-poppins font-semibold pb-6 text-brandBlack pr-4 pt-16 sm:pt-8 xs:pt-16 drop-shadow-2xl`}>
              WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-brandBlue text-gradient">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!
            </motion.h1>
            <motion.a 
              initial={{ opacity: 0, y: "10vw" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}      
              href="ourservices" className="xs:block hidden text-white text-center rounded-full px-1 py-3 bg-brandBlue w-[15%] hover:bg-brandBlack cursor-pointer z-40">
              Read More
            </motion.a>
            <a href="ourservices" className={`hidden text-white text-center ${styles.textResButton} rounded-full px-1 py-3 bg-brandBlue w-[45%] hover:bg-brandBlack cursor-pointer z-40`}>
              Read More
            </a>
          </div>
        </div>
        
      </div>

      <div ref={ref} className=' px-[10%] md:block hidden'>
        <div className='w-full h-full p-8 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Marketing" tpx="40" icon={marketing} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Accounting" tpx="40" icon={accounting} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='w-full h-full pt-2 p-10 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Customer Support" tpx="40" icon={customer} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Data Entry" tpx="40" icon={dataentry} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='items-center justify-center gap-10 self-center p-6 flex pt-2'>
          <CustomButton name="My Bespoke Staff Front/Back Office Support" tpx="40" icon={frontbackoffice} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff IT Support" tpx="40" icon={itsupp} seperator={lineseperator} redirect="https://it.mybespokestaff.com/"/>
        </div>
      </div>

    </div>
  )
}

export default ParallaxHero