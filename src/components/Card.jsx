import styles from '../style'
import { motion } from 'framer-motion'

const Card = ({ image1, text }) => {
  
  return (
    <motion.div 
    className={`p-2 rounded-[50px] w-[300px] 
               h-[50%] flex flex-col justify-start`} 
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01]
    }}           
               >
        <motion.img src={image1}className="h-[35%] w-[75%] self-center aspect-square"
        whileHover={{ scale: 1.05 }}
        />
        <span className={`text-center px-6 py-8 leading-relaxed  text-xs sm:text-lg font-poppins font-medium text-brandBlack
        `}>{text}</span> 
    </motion.div>
  )
}

export default Card