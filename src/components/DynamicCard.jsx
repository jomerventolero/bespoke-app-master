import { useState } from 'react'

const DynamicCard = ({image0, image1, text}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
    className={`p-5 rounded-[50px] w-[300px] 
               h-[500px] flex flex-col justify-start cursor-pointer ${ isHovered ? "text-white bg-violet-400" : "text-black"}`} 
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               >
        <img src={ isHovered ? image0 : image1 } className="h-[256px] w-auto"/>
        <span className={`text-center px-6 py-8 leading-relaxed  text-[25px]
        ${ isHovered ? "text-white" : "text-slate-600"}`}>{text}</span>
    </div>
  )
}

export default DynamicCard