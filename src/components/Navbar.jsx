import logo from '../assets/logo.png'
import ContactUs from '../components/ContactUs'
import styles from '../style'

import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { navLinks } from '../constants'

import { motion } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  

  const openMobileMenu = () => {
    setToggle(true)
  }

  const closeMobileMenu = () => {
    setToggle(false)
  }

  return (
    <nav className={`z-50 fixed w-[90%] md:w-[97%] bg-white top-0 flex shadow-2xl drop-shadow-lg py-1 px-6 justify-start items-center rounded-2xl m-5 navbar`}>
        
        <a href='/'>
            <img src={ logo } alt="logo" className={`object-contain block w-[35%] cursor-pointer ${toggle ? 'w-[100px]' : 'w-[35%]'}`}/>
        </a>
        <h6 className="hidden lg:block pb-20 absolute top-[1%] left-[6.5%] lg:text-[15px] font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <ul className={`absolute md:left-[15%] ${styles.navbarRes} sm:flex hidden list-none xs:hidden md:flex justify-start items-center flex-1 pt-12 pb-8 h-[10%]`}>
            {navLinks.map((nav, index) => 
            (
                <li
                    key={nav.id}
                    className={`font-poppins font-bold cursor-pointer justify-between place-items-start text-[20px] text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                    <a href={`${nav.id}`} className={`hover:text-brandBlue text-center text-brandBlack max-h-4 transition-colors ease-in-out duration-300 sm:text-lg text-md`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>

        <div className="absolute right-10 pt-6 pr-4 pb-4 lg:block hidden">
            <ContactUs/>
        </div>

        <div className='md:hidden flex flex-1 justify-end items-center '>
          <a href="/contactus" className="text-brandBlack hover:text-brandBlue font-poppins font-semibold pr-8 text-right align-center">Contact Us</a>
          <Hamburger toggled={ toggle } toggle={ openMobileMenu } />
          <motion.div 
            initial={{ opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "fadeIn",
                duration: 0.8,
                delay: 0.5
            }}
            className={`${toggle ? 'block' : 'hidden'} fixed inset-0 bg-white z-50`}>
            <div className="absolute top-4 right-4">
              <button className="text-brandBlack hover:text-brandBlue" onClick={closeMobileMenu}>Exit</button>
            </div>
            <ul className="flex flex-col justify-center items-center h-screen bg-white">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-bold cursor-pointer text-[16px] text-brandBlack ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}

                >
                  <a href={`${ nav.id}`} className="text-brandBlack">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      
    </nav>
  )
}

export default Navbar
