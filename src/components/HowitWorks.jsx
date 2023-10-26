import React from 'react'
import howitworks from '../assets/howitworks.png'
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import UnStyledButton from './UnStyledButton'
import { motion } from 'framer-motion'
import styles from '../style'
import { SuperSEO } from 'react-super-seo'

const HowitWorks = () => {
  return (
    <div id="howitworks">
        <SuperSEO
          title="Bespoke | How it works "
          description="Outsource to the Philippines and create a dedicated team, without the worry about Office Space, IT, Recruitment, Payroll, and more."
          url="https://www.mybespokestaff.com/howitworks"
        />
        <motion.div className="relative flex flex-col justify center px-10 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
            duration: 3.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
            }}  
            >
              <img src={ howitworks } alt="howitworks" className="w-full justify-center self-center"/>
        </motion.div>
        <motion.div className="lg:flex hidden flex-row gap-4 px-8 py-4 justify-center">
            <motion.img src={one} alt="one" className="w-[20%] h-[20%]" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={two} alt="two" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={three} alt="three" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={four} alt="four" className="w-[20%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
        </motion.div>
        <motion.div className="md:hidden flex flex-col px-[20%] pb-4 justify-center items-center overflow-hidden">
            <motion.img src={one} alt="one" className="w-[80%] h-[20%]" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={two} alt="two" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={three} alt="three" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
            />
            <motion.img src={four} alt="four" className="w-[80%] h-[20%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}  
              draggable="false"
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
            <div className="flex flex-row justify-between items-center sm:px-2 py-5">
              <div>
                <span className={`text-brandBlack ${styles.textResH4}`}>Ready to form your very <br/> own team of</span>
                <span className={`text-brandBlue ${styles.textResH4}`}> Bespoke <br/>Staff?</span>
              </div>
              <div className="flex justify-center content-center align-center self-center items-center">
                <UnStyledButton buttonStyle={`bg-brandBlue p-4 m-8 text-white rounded-full ${styles.textResH4}`} text="Start Now" redirect="contactus"/>
              </div>
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default HowitWorks