import Button from './Button'
import CustomButton from './CustomButton'
import marketing from '../assets/Icons/marketing.png'
import accounting from '../assets/Icons/accounting.png'
import lineseperator from '../assets/Icons/lineseperator.png'
import customer from '../assets/Icons/customersupport.png'
import dataentry from '../assets/Icons/dataentry.png'
import mainherosection from '../assets/mainherosection.png'
import styles from '../style'
import UnStyledButton from './UnStyledButton'

const Hero = () => {
  return(
  <section id="home" className={`md:flex-row flex-col w-full`}>
      <div className="w-full h-full overflow-hidden bg-gradient-to-b from-indigo-400 via-blue-400 to-blue-500   text-white font-bold pl-5">
        <div className={`flex flex-row justify-between items-center`}>
          <div className='pl-12'>
            <h1 className={`${styles.textResH1} flex-1 font-poppins font-semibold pb-6 text-white ss:leading-[100px] leading-[75px] pr-4`}>
              WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-yellow-400">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!
            </h1>
            <Button props="Read More"/>
            <UnStyledButton buttonStyle="lg:hidden shadow-lg rounded-full p-4 bg-brandBlack" text="Contact Us!"/>
          </div>
          <img src={ mainherosection } alt="main" className='w-[68%] h-full md:block hidden'/>
        </div>
      </div>
      <div className='pr-[50px] pl-[50px] md:block hidden'>
        <div className='w-full h-full p-12 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Marketing" tpx="40" icon={marketing} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Accounting" tpx="40" icon={accounting} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='w-full h-full pt-2 p-10 gap-10 content-around flex flex-row'>
          <CustomButton name="My Bespoke Staff Customer Support" tpx="40" icon={customer} seperator={lineseperator} redirect="contactus"/>
          <CustomButton name="My Bespoke Staff Data Entry" tpx="40" icon={dataentry} seperator={lineseperator} redirect="contactus"/>
        </div>
        <div className='items-center justify-center self-center p-6 flex pt-2'>
          <CustomButton name="My Bespoke Staff Front/Back Office Support" tpx="40" icon={dataentry} seperator={lineseperator} redirect="contactus"/>
        </div>
      </div>
  </section>
)
}

export default Hero