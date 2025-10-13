import { useEffect, useRef, useState } from "react";

const MacHero = () => {
  const videoRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;

    // Trigger animations after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} mt-10`}>
      <div className='flex justify-between'>
        <p className={`font-semibold text-7xl transition-all duration-1200 delay-200 transform ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 -translate-x-12 scale-95"} hover:text-blue-600 hover:scale-105 cursor-default`}>Mac</p>
        <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <p className={`text-2xl font-medium transition-all duration-700 delay-600 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} hover:text-gray-600`}>If you can dream it,</p>
          <p className={`text-2xl font-medium transition-all duration-700 delay-800 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} hover:text-gray-600`}>Mac can do it.</p>
        </div>
      </div>

      <div className={`my-10 rounded-xl transition-all duration-1200 delay-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"} hover:scale-105 hover:shadow-2xl`}>
        <video ref={videoRef} src='/videos/mac-hero.mp4' className='rounded-4xl transition-all duration-500 hover:brightness-110' autoPlay loop muted playsInline />
      </div>
    </div>
  );
};

export default MacHero;
