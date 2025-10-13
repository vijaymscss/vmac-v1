import React, { useState, useEffect } from "react";

const MacEssentials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className={`text-center sm:text-left transition-all duration-700 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className='font-semibold text-3xl sm:text-4xl lg:text-5xl'>Mac essentials.</p>
      </div>

      <div className='flex flex-col md:flex-row gap-4 sm:gap-6 py-6 sm:py-8 lg:py-10'>
        <div
          className={`w-full md:w-1/2 bg-gray-100 rounded-2xl sm:rounded-3xl 
          py-6 sm:py-8 lg:py-10 px-4 sm:px-6 text-center 
          transition-all duration-700 delay-400 transform hover:scale-105 hover:shadow-xl
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <div className='mb-4 sm:mb-6'>
            <p className='font-semibold text-lg sm:text-xl mb-2 transition-colors duration-300 hover:text-blue-600'>Mac Accessories</p>
            <p className='text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4'>Explore keyboard, mice and other accessories</p>
            <p className='text-blue-500 text-sm sm:text-base cursor-pointer hover:text-blue-700 transition-colors duration-300'>Shop accessories {`>`}</p>
          </div>

          <div className='overflow-hidden rounded-xl sm:rounded-2xl'>
            <img src='/images/prod1.png' alt='Mac Accessories' className='w-full h-auto object-cover transition-transform duration-500 hover:scale-110' />
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 bg-gray-100 rounded-2xl sm:rounded-3xl 
          py-6 sm:py-8 lg:py-10 px-4 sm:px-6 text-center 
          transition-all duration-700 delay-600 transform hover:scale-105 hover:shadow-xl
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className='mb-4 sm:mb-6'>
            <p className='font-semibold text-lg sm:text-xl mb-2 transition-colors duration-300 hover:text-blue-600'>Studio Display</p>
            <p className='text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4'>A 5K Retina display with stellar camera and audio.</p>
            <p className='text-blue-500 text-sm sm:text-base cursor-pointer hover:text-blue-700 transition-colors duration-300'>Learn more {`>`}</p>
          </div>

          <div className='overflow-hidden rounded-xl sm:rounded-2xl'>
            <img src='/images/prod2.png' alt='Studio Display' className='w-full h-auto object-cover transition-transform duration-500 hover:scale-110' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacEssentials;
