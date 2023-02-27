import React from 'react'
import { motion } from 'framer-motion'

const CustomButton = ({ name, icon, seperator, redirect, tpx}) => {
  return (
    <motion.div 
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ 
        duration: 1.5,
        delay: 0.4
       }}

      className="w-[50%] rounded-full bg-brandBlack hover:bg-brandBlue pr-4 pl-10">
        <a href={redirect} className="flex flex-row items-center justify-evenly">
            <img src={icon} alt="icon" className="w-[120px] h-[120px]"/>
            <img src={seperator} alt="icon" className="w-[64px] h-[148px] p-6"/>
            <h1 className={`text-white text-[${tpx}px] xl:text-[38px] lg:text-[35px] md:text-[26px] sm:text-[20px] text-center leading-10 `}>
                { name }
            </h1>
        </a>
    </motion.div>
  )
}

export default CustomButton