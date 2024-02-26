import React from 'react'

const MobileCard = ({image1, text}) => {
  return (
    <div className="flex flex-col bg-slate-300 p-4 rounded-[10px] justify-center items-center w-[50%]">
        <img src={image1} className="w-[64px]"/>
        <h1 className='text-[8px] text-center font-poppins font-medium'> { text } </h1>
    </div>
  )
}

export default MobileCard