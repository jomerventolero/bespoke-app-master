import { useState } from 'react'
import styles from '../style'

const DynamicCard = ({image0, image1, text}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
    className={`p-5 rounded-[50px] w-[300px] 
               h-[50%] flex flex-col justify-start ${ isHovered ? "text-white bg-violet-400" : "text-black"}`} 
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               >
        <img src={ isHovered ? image0 : image1 } className="h-[35%] w-[75%] self-center aspect-square"/>
        <span className={`text-center px-6 py-8 leading-relaxed  ${styles.textResCard}
        ${ isHovered ? "text-white" : "text-slate-600"}`}>{text}</span> 
    </div>
  )
}

export default DynamicCard