import React from 'react'
import UnStyledButton from './UnStyledButton'
import securityicon from '../assets/Icons/securityicon.png'
import kangaroowhite from '../assets/Icons/kangaroowhite.png'
import kangarooaustralia from '../assets/Icons/kangarooaustralia.png'
import cost0 from '../assets/Icons/cost0.png'
import cost1 from '../assets/Icons/cost1.png'
import scale0 from '../assets/Icons/scale0.png'
import scale1 from '../assets/Icons/scale1.png'
import leverage0 from '../assets/Icons/leverage0.png'
import leverage1 from '../assets/Icons/leverage1.png'
import talent0 from '../assets/Icons/talent0.png'
import talent1 from '../assets/Icons/talent1.png'
import DynamicCard from './DynamicCard'


const AboutUs = () => {
  return (
    <section id="testimonials">
        <div className="w-full h-full flex flex-row bg-gradient-to-b from-indigo-300 to-cyan-200 justify-evenly">
            <div className="flex flex-col pt-12 pl-5 max-w-[900px] w-900px pb-5">
                <span className="w-[3/4] h-full text-[25px] pb-4">
                    With the constant advancements in technology, you can be sure the data we <br/>process for you is secured in our in-house dedicated server under lock and key <br/>with 24 hours surveillance monitoring.
                    <br/>
                    <br/>
                    Our stringent measures that we have set in stone on all our Bespoke staff are<br/> implemented to the highest standard to prevent any data leak as we fully <br/>understand these sensitive data are proprietary to our customers only.
                </span>
                <UnStyledButton text="Find out more" buttonStyle="bg-brandBlue text-white rounded-full p-4 hover:bg-brandBlack font-semibold font-poppins" redirect="" />
            </div>
            <div className='items-center flex justify-center'>
                <img src={securityicon} alt="securityicon" className='w-[360px] h-[380px] items-center'/>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center px-10 py-2">
            <h1 className="font-poppins font-bold text-brandBlue text-[35px]">
                HOW YOUR BESPOKE STAFF CAN HELP WITH YOUR BUSINESS
            </h1>
            <div className="flex flex-row overflow-hidden bg-slate-200 rounded-[55px] w-[full] h-[500px]">
                <DynamicCard image0={ kangaroowhite } image1={ kangarooaustralia }  text="Australian reps at your beck and call"/>
                <DynamicCard image0={ scale1 } image1={ scale0 } text="Scale faster with efficiency"/>
                <DynamicCard image0={ cost1 } image1={ cost0 } text="Reduce staffing cost"/>
                <DynamicCard image0={ leverage1 } image1={ leverage0 } text="Leverage your productivity to focus on what you need to the most"/>
                <DynamicCard image0={ talent1 } image1={ talent0 } text="Widen Talent search"/>
            </div>
        </div>
    </section>
  )
}

export default AboutUs