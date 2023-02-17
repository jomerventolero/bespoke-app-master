import React from 'react'
import { motion } from 'framer-motion'

const UnStyledButton = ({text, redirect, buttonStyle}) => {
  return (
    <div className="text-[25px] pb-5">
        <a href={ redirect }>
            <motion.button 
              className={ buttonStyle }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
                {text}
            </motion.button>
        </a>
    </div>
  )
}

export default UnStyledButton