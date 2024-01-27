import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from "react-icons/io";

const SubMenu = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div className="">
        <FaBars size="2rem" onClick={() => setToggle(!toggle)} className={`cursor-pointer ${toggle ? 'hidden' : 'block'}`}/>
        <IoMdCloseCircleOutline size="2rem" onClick={() => setToggle(!toggle)} className={`cursor-pointer ${toggle ? 'block' : 'hidden'}`}/>
        <motion.div className={`${toggle ? "block" : "hidden"}`}>

        </motion.div>
    </div>
  )
}

export default SubMenu