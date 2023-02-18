import React from 'react'
import photoRight from '../assets/photoRight.png'
import photoLeft from '../assets/photoLeft.png'

const WhyChooseBespoke = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 justify-center bg-gradient-to-t from-blue-500 to-blue-300 py-[5%]">
        <h1 className={`font-poppins font-semibold text-brandBlack text-[35px] text-center`}>WHY CHOOSE </h1>
        <h1 className={`font-poppins font-semibold text-brandBlue text-[35px] text-center`} > BESPOKE</h1>
        <h1 className={`font-poppins font-semibold text-brandBlack text-[35px] text-center`} >?</h1>
      </div>
      <div className="flex flex-row gap-2 justify-evenly">
        <img src={photoRight} alt="photoRight" className="w-[50%]"/>
        <span className="font-poppins font-semibold text-[34px]  text-justify py-[5%] px-8">We are not middlemen. We find out what you need, train your bespoke staff and  implement your requirements and expectations.
</span>
      </div>
      <div className="flex flex-row gap-2">
        <img src={photoLeft} alt="photoLeft" className="w-[50%]"/>
        <span className="font-poppins font-semibold text-[34px] text-justify py-[5%] px-8">20 years combined experience with key personnel having experience in the main functions of the freight forwarding and international trade industry. Just by speaking to us, you can tell immediately whether we are a fit or not to your business.</span>
      </div>
    </div>
  )
}

export default WhyChooseBespoke
