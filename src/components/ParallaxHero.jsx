import CustomButton from './CustomButton'
import styles from '../style'
import Button from './Button'
import UnStyledButton from './UnStyledButton'
import marketing from '../assets/Icons/marketing.png'
import accounting from '../assets/Icons/accounting.png'
import lineseperator from '../assets/Icons/lineseperator.png'
import customer from '../assets/Icons/customersupport.png'
import dataentry from '../assets/Icons/dataentry.png'
import mainherosection from '../assets/mainherosection.png'
import building from '../assets/building.png'


const ParallaxHero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full h-full overflow-hidden bg-gradient-to-b from-indigo-300 via-blue-300 to-indigo-300 text-white font-bold justify-end">
        <img src={building} className="sm:hidden w-full"/>
        <div className={`flex flex-row items-center`}>
          
          <div className='absolute -left-0 justify-center pl-12'>
            <h1 className={`flex-1 ${styles.textResH1} font-poppins font-semibold pb-6 text-white pr-4 pt-8 drop-shadow-2xl`}>
              WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-yellow-400">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!
            </h1>
            <Button props="Read More"/>
            <UnStyledButton buttonStyle="xs:hidden md:hidden lg:hidden shadow-lg xs:w-[40px] ss:w-[45px] rounded-full p-4 bg-brandBlack" text="Contact Us!" redirect="contactus"/>
          </div>
        </div>
        <img className="sm:block hidden w-[70%] h-[100%]" src={mainherosection} alt="mainherosection" />
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
      <UnStyledButton buttonStyle="absolute top-[45%] left-[80%] xs:block hidden lg:hidden shadow-lg rounded-full p-4 bg-brandBlue shadow-2xl" text="Contact Us!" redirect="contactus"/>
    </div>
  )
}

export default ParallaxHero