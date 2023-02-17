import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import ContactUs from '../components/ContactUs'


const Navbar = () => {

  return (
    <nav className="w-full flex py-1 px-6 justify-between items-center navbar">
        <a href='/home'>
            <img src={ logo } alt="logo" className="w-[145px] h-[145px] md:w-[64px] md:h-[64px] lg:w-[128px] lg:h-[128px] cursor-pointer"/>
        </a>
        <h6 className="hidden lg:block pb-20 relative left-[-1.5%] lg:text-[15px] font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <ul className="list-none xs:hidden md:flex justify-between items-center flex-1 pt-12 pb-4 h-[10%]">
            {navLinks.map((nav, index) => 
            (
                <li
                    key={nav.id}
                    className={`font-poppins font-bold cursor-pointer justify-between place-items-start text-[20px]  text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                    <a href={`#${nav.id}`} className="hover:text-brandBlue xl:text-[20px] lg:text-[12px] md:text-[10px] sm:text-[8px] ss:text-[6px] xs:text-[8px]">
                        {nav.title}
                    </a>
                </li>
            ))}
            <ContactUs/>
        </ul>
    </nav>
  )
}

export default Navbar