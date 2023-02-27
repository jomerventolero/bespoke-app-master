import phone from '../assets/Icons/21.png'
import mail from '../assets/Icons/22.png'
import location from '../assets/Icons/23.png'
import fb_logo from '../assets/fb_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import styles from '../style'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

  const form = useRef();
  const [isVerified, setIsVerified] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleVerify = () => {
    setIsVerified(true)
  }

  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
    emailjs.sendForm('service_ileepgo', 'bespoke-email-template', form.current, '4t8EhVp1pW3EIe4Zr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contactus">
    <motion.div className={`${!isSubmitted ? "hidden" : "flex text-[50px] text-brandBlue font-bold justify-center"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
            duration: 4.5,
            delay: 0.2,
        }}
  
    >
        Thank you for inquiring to us!
    </motion.div>
    <div className={`${ isSubmitted ? "hidden" : "flex flex-row justify-center pt-[5%] pb-[30px]"}`}>
        <motion.div className="md:flex hidden flex-col bg-slate-900 shadow-2xl rounded-[15px] pt-[20px] h-auto w-[25%] pl-8 pr-8 py-6 object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 0.9,
                delay: 0.5
        }}
        >
    
            <h1 className={`text-white font-poppins font-semibold ${styles.textResContactForm}`}>CONTACT <br/>INFORMATION</h1>
            <span className="text-white">You can reach us at:</span>
            <div className="flex flex-row justify-star pt-8">
                <img src={phone} alt="phone" className="w-[15%] h-[120%]" />
                <span className="text-white font-semibold self-center pl-4 xl:text-xl lg:text-lg md:text-md sm:text-sm ss:text-ss">+63 917 166 8840</span>
            </div>
            <div className="flex flex-row justify-start pt-8">
                <img src={mail} alt="mail" className="w-[15%]" />
                <span className="text-white font-semibold self-center pl-4 xl:text-xl lg:text-lg md:text-md sm:text-sm ss:text-ss">info@mybespokestaff.com</span>
            </div>
            <div className="flex flex-row justify-start pt-8">
                <img src={location} alt="location" className="w-[25%] h-[80%] aspect-square" />
                <span className="text-white font-semibold self-center pl-4 xl:text-xl lg:text-lg md:text-md sm:text-sm ss:text-ss">King's Court Building 1, Level 8, Chino Roces Ave, Makati, Metro Manila, Philippines.</span>
            </div>
            <div className="flex flex-row gap-4 justify-start pt-[4rem] pb-[2rem]">
                <img src={ fb_logo } alt="fblogo" className="w-[10%] "/>
                <img src={ linkedin_logo } alt="fblogo" className="w-[10%] aspect-square"/>
            </div>
        </motion.div>
        <motion.div
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5
            }}
            className="flex lg:hidden"
        >
        <form ref={ form } className={`flex flex-col px-8 }`} onSubmit={ sendEmail }>
            <div className='flex flex-col'>
                <span className="text-brandBlue font-semibold text-[35px]">Explore More about our Services.</span>
                <span>Talk to us.</span>
                <h5>You are just a form away. </h5>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Name*" type="text" name="name" id="name" required/>
                <div className="flex flex-col justify-between">
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Email Address*" type="text" name="email" id="email" required/>
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Phone Number*" type="text" name="phonenumber" id="phonenumber" required/>
                </div>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Company Name*" type="text" name="companyname" id="companyname" required/>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Tell us about your requirement" type="text" name="requirement" id="requirement" required/>
                <ReCAPTCHA 
                    sitekey="6LcR9J0kAAAAACY17CRtBE0KQdrQN8TqJFTBSnT1"
                    onChange={ handleVerify }
                    className="py-4"
                />
                <div className="flex flex-row pt-4">
                    <button type="submit" className={`shadow-2xl text-[75%] px-[4rem] py-[1rem] rounded-[20px] font-poppins font-semibold 
                    ${ isVerified ? "text-white bg-brandBlue" : "text-brandBlack bg-transparent" }`} disabled={!isVerified}>
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </motion.div>



        <motion.div
            initial={{opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5
            }}
            className="lg:flex hidden"
        >
        <form ref={ form } className={`flex flex-col px-8 }`} onSubmit={ sendEmail }>
            <div className='flex flex-col'>
                <span className="text-brandBlue font-semibold text-[35px]">Explore More about our Services.</span>
                <span>Talk to us.</span>
                <h5>You are just a form away. </h5>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Name*" type="text" name="name" id="name" required/>
                <div className="flex flex-row justify-between">
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Email Address*" type="text" name="email" id="email" required/>
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Phone Number*" type="text" name="phonenumber" id="phonenumber" required/>
                </div>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Company Name*" type="text" name="companyname" id="companyname" required/>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Tell us about your requirement" type="text" name="requirement" id="requirement" required/>
                <ReCAPTCHA 
                    sitekey="6LcR9J0kAAAAACY17CRtBE0KQdrQN8TqJFTBSnT1"
                    onChange={ handleVerify }
                    className="py-4"
                />
                <div className="flex flex-row pt-4">
                    <button type="submit" className={`shadow-2xl text-[75%] px-[4rem] py-[1rem] rounded-[20px] font-poppins font-semibold 
                    ${ isVerified ? "text-white bg-brandBlue" : "text-brandBlack bg-transparent" }`} disabled={!isVerified}>
                        Submit
                    </button>
                </div>
            </div>
        </form>
        </motion.div>
    </div>
    </section>
  )
}

export default ContactForm