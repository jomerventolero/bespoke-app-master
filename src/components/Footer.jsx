import React from 'react'
import logo from '../assets/logo.png'
import fb_logo from '../assets/fb_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'
import { quickLinks } from '../constants'
import { siteTools } from '../constants'


const Footer = () =>  {
    const handleFBClick = () => {
        window.open("www.facebook.com/MyBespokeStaff", "_blank")
    }

    const handleLnClick = () => {
        window.open("www.linkedin.com/mybespokestaff", "_blank")
    }
    return(
        <div className={`p-1 w-full flex flex-row gap-[100px]`}>
            <div className={`px-6`}>
                <a href='/'>
                    <img src={ logo } alt="logo" className='w-[145px] h-[145px] cursor-pointer'/>
                </a>
                <div className={`p-8 flex flex-row w-full gap-5`}>
                    <div>
                        <button onClick={handleFBClick}>
                            <img src={ fb_logo } alt="fb_logo" className="w-[48px] h-[48px]"/>
                        </button>
                    </div>
                    <div>
                        <button onClick={handleLnClick}>
                            <img src={ linkedin_logo } alt="linked_logo" className="w-[48px] h-[48px]"/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-brandBlue font-poppins font-semibold text-[25px] ">
                    CONTACT US
                </h2>
                <p className='font-semibold'>
                    info@mybespokestaff.com
                </p>
                <h2 className="text-brandBlue font-poppins font-semibold text-[25px] pt-8">
                    COMPANY ADDRESS
                </h2>
                <p className='font-semibold'>
                    Kings Court Building 1, Level 8, Chino Roces Ave,
                    <br/>Makati, Metro Manila, Philippines.
                </p>
            </div>
            <div>
                <h2 className="text-brandBlue font-poppins font-semibold text-[25px] mb-2">
                    QUICK LINKS
                </h2>
                
                <ul>
                    {quickLinks.map((links) =>
                    <li 
                        key={links.id}
                        className={`pl-4 font-poppins font-semibold cursor-pointer m-1`}
                    >
                        <a href={`/${links.id}`}>
                            {links.title}
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            <div>
                <h2 className='text-brandBlue font-poppins font-semibold text-[25px]'>
                    SITE TOOLS
                </h2>
                <ul>
                    {siteTools.map((tools) =>
                    <li
                        key={tools.id}
                        className={`pl-4 font-poppins font-semibold cursor-pointer m-1`}
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