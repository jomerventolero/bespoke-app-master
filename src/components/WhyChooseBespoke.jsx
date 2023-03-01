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
    </div>
  )
}

export default WhyChooseBespoke
