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
        <motion.div 
            initial={{ opacity: 0, y: -100}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5, type: "fadeIn"}}
            exit={{ opacity: 0, y: -100}}
            className={`absolute top-28 right-8 flex flex-col gap-4 w-36 items-center text-lg text-center font-semibold bg-white rounded-lg p-4 ${toggle ? "block" : "hidden"}`}>
            <a href="https://it.mybespokestaff.com/" className='hover:text-brandBlue'>MyBespokeStaff IT Support</a>
            <a href="https://odoo.mybespokestaff.com/web/login" className='hover:text-brandBlue'>BES System Login</a>
            <a href="/contactus" className='hover:text-brandBlue'>Contact Us</a>
        </motion.div>
    </div>
  )
}

export default SubMenu