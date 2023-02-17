import React from 'react'
import aboutus from '../assets/aboutus.png'
import gradientbox from '../assets/gradient-box.png'

const AboutUs = () => {
  return (
    <div id="aboutus" className="flex flex-col overflow-hidden justify-center">
        <div className="flex flex-col justify-center">
            <img src={ aboutus } alt="aboutus" className="w-auto h-auto"/>
            <div className="flex justify-center py-5">
                <h1 className="text-brandBlue font-poppins font-semibold text-[30px]">WHO WE ARE</h1>
            </div>
            <span className="flex justify-center text-center py-5 px-[10%]">
            Bespoke is led by a team of professionals that have at least 20 years combined experience in the freight forwarding industry in Australia. We are well versed with the importation and exportation requirements that are unique to Australia. Be it the rules and regulations of AQIS (Australian Quarantine and Inspection Scheme) or the daily operations of the various departments such as the operations / forwarding team to the cartage department and the customs broker department, we have done it all. Do drop us a quick enquiry of how we can be of service to you on your staffing requirements. We are certain we would even be able to advise you on building a team of staff that can generate more income for your business that you didn't know you needed.
            </span>    
        </div>
        <div className="flex flex-row px-[10%]">
            <img src={gradientbox} alt="box" className="w-[40%] h-auto"/>
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE MISSION</h1>
                <span className="px-[20%]">We work towards operating in a manner where our client's are satisfied that their business processes are met with the highest standard of service and effort by the top class talents that we hire.</span>
            </div>
        </div>
        <div className="flex flex-row px-[10%]">
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE VISION</h1>
                <span className="px-[20%]">We believe in quality over quantity. Therefore we ensure that we get the best person to do the job right with no expense spared on the constant upgrade of workforce skills, technology and productivity.</span>
            </div>
            <img src={gradientbox} alt="box" className="w-[40%] h-auto transform rotate-180"/>
        </div>
        <div className="flex flex-row px-[10%]">
            <img src={gradientbox} alt="box" className="w-[40%] h-auto"/>
            <div className="flex flex-col justify-center text-center">
                <h1 className="font-poppins font-semibold text-brandBlue text-[30px] py-2">BESPOKE CORE VALUES</h1>
                <span className="px-[20%]">We strive to maintain our integrity whenever it comes to fairness in the workplace, stellar productivity on the services we provide and securing the data that we process on behalf of our customers.</span>
            </div>
        </div>
    </div>
  )
}

export default AboutUs