import phone from '../assets/Icons/21.png'
import mail from '../assets/Icons/22.png'
import location from '../assets/Icons/23.png'
import fb_logo from '../assets/fb_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'
import UnStyledButton from './UnStyledButton'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
  const submitForm = (value) => {
    return console.log("Captcha value: ", value)
  }
  return (
    <section id="contactus">
    <div className="flex flex-row justify-center pt-[5%] pb-[30px]">
        <div className="flex flex-col bg-slate-900 shadow-2xl rounded-[15px] pt-[3%] h-auto w-[25%] pl-8 pr-8 py-6 object-contain">
            <h1 className="text-white font-poppins font-semibold xl:text-xl lg:text-lg md:text-md">CONTACT <br/>INFORMATION</h1>
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
                <img src={location} alt="location" className="w-[10%] h-[50%] aspect-square" />
                <span className="text-white font-semibold self-center pl-4 xl:text-xl lg:text-lg md:text-md sm:text-sm ss:text-ss">King's Court Building 1, Level 8, Chino Roces Ave, Makati, Metro Manila, Philippines.</span>
            </div>
            <div className="flex flex-row gap-4 justify-start pt-[4rem] pb-[2rem]">
                <img src={ fb_logo } alt="fblogo" className="w-[10%] "/>
                <img src={ linkedin_logo } alt="fblogo" className="w-[10%] aspect-square"/>
            </div>
        </div>
        <form className="flex flex-col px-8">
            <div className='flex flex-col'>
                <span className="text-brandBlue font-semibold text-[35px]">Explore More about our Services.</span>
                <span>Talk to us.</span>
                <h5>You are just a form away. </h5>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Name*" type="text" name="name" id="name" required/>
                <div className="flex flex-row gap-4 justify-between">
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Email Address*" type="text" name="email" id="email" required/>
                    <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Phone Number*" type="text" name="phonenumber" id="phonenumber" required/>
                </div>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Company Name*" type="text" name="companyname" id="companyname" required/>
                <input className="border-b-2 border-slate-300 pt-4 outline-none" placeholder="Tell us about your requirement" type="text" name="requirement" id="requirement" required/>
                <ReCAPTCHA 
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={submitForm}
                    className="py-4"

                />
                <div className="flex flex-row pt-4">
                    <UnStyledButton buttonStyle="bg-brandBlue text-white shadow-xl text-[75%] px-[4rem] py-[1rem] rounded-[20px] font-poppins font-semibold" text="Submit" onClick={submitForm}/>
                </div>
            </div>
        </form>
    </div>
    </section>
  )
}

export default ContactForm