import logo from '../assets/logo.png'
import { navLinks } from '../constants'
import ContactUs from '../components/ContactUs'
import styles from '../style'
import { useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`w-full bg-white top-0 flex shadow-xl py-1 px-6 justify-start items-center navbar`}>
        <a href='/'>
            <img src={ logo } alt="logo" className="h-[145px] md:w-[64px] md:h-[64px] lg:w-[128px] lg:h-[128px] cursor-pointer"/>
        </a>
        <h6 className="hidden lg:block pb-20 relative left-[-1.5%] lg:text-[15px] font-semibold font-poppins md:text-12px]">Bespoke Enterprise Solutions Inc.</h6>
        <ul className={`${styles.navbarRes} sm:flex hidden list-none xs:hidden md:flex justify-start items-center flex-1 pt-12 pb-4 h-[10%]`}>
            {navLinks.map((nav, index) => 
            (
                <li
                    key={nav.id}
                    className={`font-poppins font-bold cursor-pointer justify-between place-items-start text-[20px]  text-black ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                >
                    <a href={`/${nav.id}`} className={`hover:text-brandBlue text-center max-h-4 ${styles.textResNavLinks} `}>
                        {nav.title}
                    </a>
                </li>
            ))}
            
        </ul>
        <div className="pt-6 sm:flex hidden">
            <ContactUs/>
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Hamburger toggled={ toggle } toggle={ setToggle } />
          <div className={`${toggle ? 'flex' : 'hidden'} bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-center flex-col flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-brandBlack ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}

                >
                  <a href={`/${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
                
              ))}
            </ul>
          </div>
      </div>
        
    </nav>
  )
}

export default Navbar