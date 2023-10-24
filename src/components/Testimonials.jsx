import React from 'react'
import UnStyledButton from './UnStyledButton'
import securityicon from '../assets/Icons/securityicon.png'
import kangarooaustralia from '../assets/Icons/kangarooaustralia.png'
import cost0 from '../assets/Icons/cost0.png'
import scale0 from '../assets/Icons/scale0.png'
import leverage0 from '../assets/Icons/leverage0.png'
import talent0 from '../assets/Icons/talent0.png'
import talent1 from '../assets/Icons/talent1.png'
import Card from './Card'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '../style'
import MobileCard from './MobileCard'

const Testimonials = () => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <section id="testimonials" className='pt-8'>
        <motion.div className="flex flex-row justify-center w-full h-full bg-gradient-to-b from-indigo-300 to-cyan-200 rounded-xl"
            isFocused={() => setIsFocused(true)}  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 5.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className="flex flex-col pt-12 pl-5 max-w-[600px] w-800px pb-5">
                <span className={`w-[3/4] h-3/4 ${styles.textRes2} pb-4 mx-2 font-poppins font-medium text-justify text-brandBlack`}>
                    With the constant advancements in technology, you can be sure the data we process for you is secured in our in-house dedicated server under lock and key with 24 hours surveillance monitoring.
                    Our stringent measures that we have set in stone on all our Bespoke staff are implemented to the highest standard to prevent any data leak as we fully understand these sensitive data are proprietary to our customers only.
                </span>
                <UnStyledButton text="Find out more" buttonStyle="bg-brandBlue text-white rounded-full p-4 transition-all ease-in-out duration-300 hover:bg-brandBlack font-semibold font-poppins mt-8" redirect="contactus" />
            </div>
            <div className='flex items-center justify-center'>
                <img src={securityicon} alt="securityicon" className='lg:block hidden w-[150%] h-auto items-center'/>
            </div>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center px-10 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 5.5,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <h1 className={`font-poppins text-center font-bold pb-4 pt-8 text-brandBlue ${styles.textResHeadline}`}>
                HOW YOUR BESPOKE STAFF CAN HELP WITH YOUR BUSINESS
            </h1>
            <div className="xs:flex hidden flex-row overflow-hidden bg-slate-200 rounded-[55px] w-[95%] h-[50%] ">
                <Card  image1={ kangarooaustralia }  text="Australian reps at your beck and call"/>
                <Card  image1={ scale0 } text="Scale faster with efficiency"/>
                <Card  image1={ cost0 } text="Reduce staffing cost"/>
                <Card  image1={ leverage0 } text="Leverage your productivity to focus on what you need to the most"/>
                <Card image0={ talent1 } image1={ talent0 } text="Widen Talent search"/>
            </div>
            <div className="flex flex-col gap-6 pt-4 sm:hidden">
                <div className="flex flex-row gap-6">
                    <MobileCard image1={ kangarooaustralia } text="Australian reps at your beck and call" />
                    <MobileCard image1={ scale0 } text="Scale faster with efficiency" />
                </div>
                <div className="flex flex-row gap-6">
                    <MobileCard image1={ cost0 } text="Reduce staffing cost" />
                    <MobileCard image1={ leverage0 } text="Leverage your productivity to focus on what you need to the most" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <MobileCard image1={ cost0 } text="Widen Talent search" />
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Testimonials