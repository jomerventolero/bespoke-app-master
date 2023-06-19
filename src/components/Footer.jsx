import React from 'react'
import logo from '../assets/logo.png'
import fb_logo from '../assets/fb_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'
import { quickLinks } from '../constants'
import { siteTools } from '../constants'
import styles from '../style'


const Footer = () =>  {
    
    return(
        <div className={`p-1 w-full flex flex-row gap-[1%] pt-8 justify-center`}>
            <div className={`px-6 sm:px-0 md:block hidden`}>
                <a href='/'>
                    <img src={ logo } alt="logo" className='aspect-square w-[145px] h-[145px] cursor-pointer'/>
                </a>
                <div className={`p-8 flex flex-row w-full gap-5`}>
                    <div>
                        <a href="//www.facebook.com/MyBespokeStaff" target="_blank">
                            <img src={ fb_logo } alt="fb_logo" className="w-[48px] h-[48px]"/>
                        </a>
                    </div>
                    <div>
                        <a href="//www.linkedin.com/mybespokestaff" target="_blank">
                            <img src={ linkedin_logo } alt="linked_logo" className="w-[48px] h-[48px]"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="xs:px-0 sm:px-0 md:px-0 px-4">
                <h2 className={`text-brandBlue font-poppins font-bold ${styles.textResH4} `}>
                    CONTACT US
                </h2>
                <p className={`${styles.textResH4} font-semibold`}>
                    info@mybespokestaff.com
                </p>
                <h2 className={`text-brandBlue font-bold ${styles.textResH4} pt-8`}>
                    COMPANY ADDRESS
                </h2>
                <a href="https://www.google.com/maps/place/King's+Court+Building+1,+Chino+Roces+Ave,+Legazpi+Village,+Makati,+Metro+Manila/@14.5576121,121.0109105,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c90cf6209dbb:0x4cad4f9d0aaefd8b!8m2!3d14.5576121!4d121.0134854!16s%2Fg%2F12hphv4lk?entry=ttu" 
                    className={`font-semibold ${styles.textResH4}`}>
                    Kings Court Building 1, Level 8, Chino Roces Ave,
                    <br/>Makati, Metro Manila, Philippines.
                </a>
            </div>
            <div className={`${styles.textResH4} xs:px-2 px-4`}>
                <h2 className={`text-brandBlue font-poppins font-bold ${styles.textResH4} mb-2`}>
                    QUICK LINKS
                </h2>
                
                <ul>
                    {quickLinks.map((links) =>
                    <li 
                        key={links.id}
                        className={`pl-4 font-poppins font-semibold cursor-pointer m-1 hover:text-brandBlue`}
                    >
                        <a href={`/${links.id}`}>
                            {links.title}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            <div className={`${styles.textResH4} px-8 xs:block hidden`}>
                <h2 className={`text-brandBlue font-poppins font-bold ${styles.textResH4}`}>
                    SITE TOOLS
                </h2>
                <ul>
                    {siteTools.map((tools) =>
                    <li
                        key={tools.id}
                        className={`pl-4 font-poppins font-semibold cursor-pointer m-1 hover:text-brandBlue`}
                    >
                        <a href={tools.id}>
                            {tools.title}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Footer