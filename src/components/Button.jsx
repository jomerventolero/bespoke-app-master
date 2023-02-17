import React from 'react'
import { motion } from 'framer-motion'

const Button = ({props, redirect}) => {
  return (
    <div className="text-[25px] pb-5">
        <a href={ redirect }>
            <motion.button
                whileHover={{ scale : 1.1 }} 
                whileTap = {{ scale : 0.9 }}
                className={`bg-brandBlack text-white hover:bg-brandBlue rounded-full min-h-[68px] px-10`}>
                {props}
            </motion.button>
        </a>
    </div>
  )
}

export default Button