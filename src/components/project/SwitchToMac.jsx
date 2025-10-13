import { useState, useEffect } from "react";

const SwitchToMac = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`px-4 sm:px-6 lg:px-8 transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <p className={`font-semibold text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left transition-all duration-800 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Switch to Mac.</p>

      <div
        className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8 
        border-2 border-gray-200 rounded-2xl sm:rounded-3xl 
        p-6 sm:p-8 md:p-10 lg:px-20 lg:py-10 my-6 sm:my-8 lg:my-10 
        transition-all duration-300 delay-100 transform group 
        hover:scale-105 hover:shadow-xl hover:border-gray-300 cursor-pointer
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-300 delay-100 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <p className='font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-blue-600'>Mac does that.</p>
          <p className='text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-gray-900'>See how easy it to switch to Mac.</p>
          <p className='text-blue-400 text-sm sm:text-base cursor-pointer hover:text-blue-600 transition-colors duration-300 hover:underline'>Learn more {`>`}</p>
        </div>

        <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-700 delay-800 transform ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}>
          <img
            src='/images/switchToMac.png'
            alt='MacBook Air'
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto rounded-lg object-cover 
              transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110'
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchToMac;
