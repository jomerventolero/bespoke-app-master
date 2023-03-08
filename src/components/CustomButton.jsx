import React from 'react'
import { motion } from 'framer-motion'
import styles from '../style'

const CustomButton = ({ name, icon, seperator, redirect}) => {
  return (
    <motion.div 
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition = {{ 
        duration: 1.5,
        delay: 0.4
       }}

      className="w-[50%] rounded-full bg-brandBlack hover:bg-brandBlue pr-2 pl-2">
        <a href={redirect} className="flex flex-row items-center justify-evenly">
            <img src={icon} alt="icon" className="w-[18%] h-auto p-2"/>
            <img src={seperator} alt="icon" className="w-[10%] h-[100%] p-2"/>
            <h1 className={`text-white ${ styles.textResHeadings} text-center leading-6 `}>
                { name }
            </h1>
        </a>
    </motion.div>
  )
}

export default CustomButton