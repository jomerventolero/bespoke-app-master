import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const jobs = [
    {
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.'
    },
    {
      position: 'UI/UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.'
    },
    {
      position: 'Digital Marketing Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.'
    },
    {
      position: 'Product Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed orci ut elit bibendum viverra.'
    },
  ];
  
  function JobCard({ position, description }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-bold">{position}</h3>
        <p className="mt-2">{description}</p>
      </div>
    );
  }

const JobsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
}
  

  return (
    <Slider {...settings}>
        {jobs.map((job) => 
            <div key={job.position}>
                <JobCard position={job.position} description={job.description}/>
            </div>
        )}
    </Slider>
  )
}

export default JobsCarousel