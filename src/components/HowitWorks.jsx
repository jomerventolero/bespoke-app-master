import React from 'react'
import howitworks from '../assets/howitworks.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import UnStyledButton from './UnStyledButton'
import { motion } from 'framer-motion'

const HowitWorks = () => {
  return (
    <div id="howitworks">
        <motion.div className="relative flex flex-col justify center px-10 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
            }}  
            >
            <img src={ howitworks } alt="howitworks" className="blur-[1px] w-3/4 justify-center self-center" />
            <motion.div className="absolute top-[18%] left-1/4 transform -translate-x-1/4  text-brandBlack text-2xl p-5 font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2.8,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <h1>Outsource to the Philippines</h1>
                <span className="text-blue-400">and create a dedicated team,</span>
                <h1>without the worry about office space, IT,<br/> recruitment, payroll, and more.</h1>
            </motion.div>
        </motion.div>
        <motion.div className="flex flex-row gap-4 px-8 py-10 overflow-hidden justify-center">
            <motion.img src={one} alt="one" className="w-[20%] h-[20%]" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
            />
            <motion.img src={two} alt="two" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
            />
            <motion.img src={three} alt="three" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
            />
            <motion.img src={four} alt="four" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
            />
        </motion.div>
        <div className="flex flex-col  overflow-hidden px-[15%] pb-4">
          <motion.div className="w-full h-full px-8 justify-center bg-gradient-to-t from-blue-300 to-blue-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 1.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01]
          }}  
          >
            <div className="flex flex-row justify-evenly items-center px-5 py-5">
              <div>
                <span className="text-brandBlack text-[35px]">Ready to form your very <br/> own team of</span>
                <span className="text-brandBlue text-[35px]"> Bespoke <br/>Staff?</span>
              </div>
              <div>
                <UnStyledButton buttonStyle="bg-brandBlue p-4 w-[100%] h-[1/4] text-white rounded-full" text="Start Now" redirect="contactus"/>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default HowitWorks