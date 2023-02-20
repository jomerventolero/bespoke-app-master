import Button from './Button'
import CustomButton from './CustomButton'
import marketing from '../assets/Icons/marketing.png'
import accounting from '../assets/Icons/accounting.png'
import lineseperator from '../assets/Icons/lineseperator.png'
import customer from '../assets/Icons/customersupport.png'
import dataentry from '../assets/Icons/dataentry.png'
import mainherosection from '../assets/mainherosection.png'
import styles from '../style'

const Hero = () => (
  <section id="home" className={`md:flex-row flex-col w-full`}>
      <div className="w-full h-full overflow-hidden bg-gradient-to-r from-indigo-500 via-blue-300 to-blue-500 text-white font-bold pl-5">
        <div className={`flex flex-row justify-between items-center`}>
          <div className='pl-12'>
            <h1 className={`flex-1 font-poppins font-semibold ${styles.textResH1} pb-6 text-white ss:leading-[100px] leading-[75px]`}>
              WE TAKE THE {" "}<br className="sm:block hidden"/>
              <span className="text-yellow-400">COMPLICATED</span> {" "} OUT OF <br />
              YOUR OUTSOURCING NEEDS!
            </h1>
            <Button props="Read More"/>
          </div>
          <img src={ mainherosection } alt="main" className='relative w-[58%] h-full'/>
        </div>
      </div>
      <div className='pr-[50px] pl-[50px]'>
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

export default Hero