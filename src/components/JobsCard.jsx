import React from 'react'
import Button from './Button'

const JobsCard = ({position, description, view}) => {
  return (
    <div className='flex flex-col items-center bg-white p-12 m-2'>
        <h1 className='font-poppins font-semibold text-brandBlack text-[20px] text-center p-2'>{ position }</h1>
        <p className='font-poppins p-5 text-brandBlack text-center '>
            { description }
        </p>
        <Button redirect={view} props="VIEW"/>
    </div>
)
}

export default JobsCard

