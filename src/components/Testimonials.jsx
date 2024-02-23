import React from 'react'
import UnStyledButton from './UnStyledButton'
import datasecurity from '../assets/datasecurity.png'
import kangarooaustralia from '../assets/Icons/kangarooaustralia.png'
import cost0 from '../assets/Icons/cost0.png'
import scale0 from '../assets/Icons/scale0.png'
import leverage0 from '../assets/Icons/leverage0.png'
import talent0 from '../assets/Icons/talent0.png'
import talent1 from '../assets/Icons/talent1.png'
import Card from './Card'
import { motion } from 'framer-motion'
import styles from '../style'
import MobileCard from './MobileCard'

const Testimonials = () => {


  return (
    <section id="security" className='pt-8'>
        <motion.div className="flex flex-row justify-center w-full h-full bg-gradient-to-b from-indigo-300 to-cyan-200 rounded-xl shadow-2xl drop-shadow-2xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <motion.div 
                initial={{ opacity: 0,  }}
                whileInView={{ opacity: 1  }}
                transition={{
                    type: "fadeIn",
                    delay: 0.8,
                    duration: 1.0,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className="flex flex-col sm:pt-12 px-2 py-4 self-center md:pl-5 sm:pb-5">
                <h1 className="font-poppins font-bold text-blue-600 text-2xl px-2 sm:pb-5">Data Security</h1>
                <span className={`sm:my-10 my-4 text-md md:text-xl mx-2 font-poppins font-medium text-justify place-self-center align-middle text-brandBlack self-center`}>
                    With the constant advancements in technology, you can be sure the data we process for you is secured in our in-house dedicated server under lock and key with 24 hours surveillance monitoring.
                    Our stringent measures that we have set in stone on all our Bespoke staff are implemented to the highest standard to prevent any data leak as we fully understand these sensitive data are proprietary to our customers only.
                </span>
                <UnStyledButton text="Find out more" buttonStyle="bg-brandBlue text-white text-md sm:text-xl rounded-full py-2 px-2 transition-all ease-in-out duration-300 hover:bg-brandBlack font-semibold font-poppins" redirect="datasecurity" />
            </motion.div>
            <div className='flex items-center justify-center'>
                <img src={datasecurity} alt="securityicon" className='lg:block hidden  h-[100%] items-center'/>
            </div>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center px-10 py-2 "
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 1.5,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            viewport={{ once: true }}
        >
            <h1 className={`font-poppins text-center font-bold pb-4 pt-8 text-brandBlue ${styles.textResHeadline}`}>
                HOW YOUR BESPOKE STAFF CAN HELP WITH YOUR BUSINESS
            </h1>
            <div className="xs:flex hidden flex-row overflow-hidden bg-slate-200 rounded-[55px] w-[95%] h-[50%] shadow-2xl drop-shadow-2xl">
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