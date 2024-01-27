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
        <motion.div className={`absolute top-28 right-8 flex flex-col gap-4 items-center text-xl font-semibold bg-white rounded-lg p-4 ${toggle ? "block" : "hidden"}`}>
            <a href="https://odoo.mybespokestaff.com/web/login">BES Login</a>
            <a href="/contactus">Contact Us</a>
        </motion.div>
    </div>
  )
}

export default SubMenu