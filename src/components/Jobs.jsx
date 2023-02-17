import React from 'react'
import jobs from '../assets/jobs.png'
import Carousel from './Carousel'


const jobsList = [
    {
        position: "Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.",
        view: "jobs-marketing"
    },
    {
        position: "Accounting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.",
        view: "jobs-accounting"
    },
    {
        position: "Customer Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.",
        view: "jobs-customersupport"
    },
    {
        position: "Data Entry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.",
        view: "jobs-dataentry"
    },

]



const Jobs = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${jobs})` }}>
        <div className='flex flex-row gap-5 justify-center'>
            <span className='text-brandBlack font-poppins font-semibold text-[50px]'>APPLY TO</span>
            <span className='text-white font-poppins font-semibold text-[50px]'>PERMANENT REMOTE JOBS</span>
        </div>
        <div className="flex flex-row gap-8 items-center justify-evenly p-[150px]">
            <Carousel items={jobsList} />
        </div>
    </div>
  )
}

export default Jobs