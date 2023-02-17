import React, { useState } from 'react';
import JobsCard from './JobsCard';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrev = () => {
    const index = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleClickNext = () => {
    const index = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="">
      <div className="left-0 flex flex-row gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className={` ${index === currentIndex ? 'active' : ''}`}
          >
            <JobsCard position={item.position} description={item.description}/>
          </div>
        ))}
      </div>
      <div className="flex flex-row p-8 items-center justify-center gap-8">
        <button className="bg-brandBlack text-white p-2 w-[148px] rounded-full" onClick={handleClickPrev}>
            Prev
        </button>
        <button className="bg-brandBlack text-white p-2 w-[148px] rounded-full" onClick={handleClickNext}>
            Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;