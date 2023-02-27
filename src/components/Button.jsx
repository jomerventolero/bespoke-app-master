import React from 'react'
import { motion } from 'framer-motion'

const Button = ({props, redirect}) => {
  return (
    <div className="text-[25px] lg:block hidden">
        <a href={ redirect }>
            <motion.button
                className={`bg-brandBlack text-white hover:bg-brandBlue rounded-full min-h-[68px] px-10 shadow-lg`}>
                {props}
            </motion.button>
        </a>
    </div>
  )
}

export default Button