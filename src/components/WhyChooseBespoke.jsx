import photoRight from '../assets/photoRight.png'
import photoLeft from '../assets/photoLeft.png'
import styles from '../style'

const WhyChooseBespoke = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 justify-center bg-gradient-to-t from-blue-500 to-blue-300 py-[5%]">
        <h1 className={`font-poppins font-semibold text-brandBlack text-[35px] text-center`}>WHY CHOOSE </h1>
        <h1 className={`font-poppins font-semibold text-brandBlue text-[35px] text-center`} > BESPOKE</h1>
        <h1 className={`font-poppins font-semibold text-brandBlack text-[35px] text-center`} >?</h1>
      </div>
      <div className="flex flex-row gap-2 justify-evenly">
        <img src={photoRight} alt="photoRight" className="w-[350%]"/>
        <div className={`font-poppins font-semibold self-center text-brandBlack ${styles.textResP} text-justify py-[5%] px-8 w-[275%]`}>We are not middlemen. We find out what you need, train your bespoke staff and  implement your requirements and expectations.
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className={`font-poppins font-semibold self-center text-brandBlack ${styles.textResP} text-justify py-[5%] px-8 w-[350%]`}>20 years combined experience with key personnel having experience in the main functions of the freight forwarding and international trade industry. Just by speaking to us, you can tell immediately whether we are a fit or not to your business.
        </div>
        <img src={photoLeft} alt="photoLeft" className="w-[335%] h-full"/>
        
      </div>
    </div>
  )
}

export default WhyChooseBespoke
