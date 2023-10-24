import bespokeProfile from '../assets/bespoke-profile.png'
import styles from '../style'

const WhyChooseBespoke = () => {
  return (
    <div classNAme="px-[10%]">
      <div className={`flex flex-row justify-center bg-gradient-to-b from-violet-500 to-indigo-400 font-poppins font-semibold py-[30px] gap-4 my-2`}>
        <span className={`${styles.textResHeadline} text-white`}>WHY CHOOSE</span>
        <span className={`${styles.textResHeadline} text-brandBlack`}>BESPOKE?</span>
      </div>
      <img src={bespokeProfile} alt="Bespoke" draggable="false" className="w-screen"/>
      <div className={`bg-gradient-to-t from-blue-400 to-indigo-400 w-auto h-auto justify-center py-8 sm:flex hidden`}>
        <a href="/contactus" className={`bg-brandBlack hover:bg-brandBlue text-center text-white rounded-[50px] w-[15%] h-[80%] my-2 py-4`}>Contact Us</a>
      </div>
    </div>
  )
}

export default WhyChooseBespoke
