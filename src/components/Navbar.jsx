import logo from '../assets/logo.png'
import ContactUs from '../components/ContactUs'
import styles from '../style'

import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { navLinks } from '../constants'

import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const { scrollYProgress } = useScroll()

  return (
    <nav className={`z-50 fixed w-full bg-white top-0 flex shadow-xl py-1 px-6 justify-start items-center navbar`}>
        
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
                    <a href={`${nav.id}`} className={`hover:text-brandBlue text-center text-brandBlack max-h-4 ${styles.textResNavLinks} `}>
                        {nav.title}
                    </a>
                </li>
            ))}
            
        </ul>
        <div className="absolute right-10 pt-6 pr-4 pb-4 lg:block hidden">
            <ContactUs/>
        </div>

        <div className='md:hidden flex flex-1 justify-end items-center '>
          <Hamburger toggled={ toggle } toggle={ setToggle } />
          <div className={`${toggle ? 'flex' : 'hidden'} absolute float-right top-[100%] right-[10px] bg-white mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="flex flex-1 flex-col justify-end items-center  ">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-brandBlack ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}

                >
                  <a href={`${ nav.id}`} className="text-brandBlack">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            
          </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </nav>
  )
}

export default Navbar