import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState, useEffect } from "react";

const SignificantOthers = () => {
  const [activeItem, setActiveItem] = useState("item-1");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const imageMap = {
    "item-1": "/images/mac_iphone.jpg",
    "item-2": "/images/mac_ipad.jpg",
    "item-3": "/images/mac_watch.jpg",
  };

  return (
    <div className={`my-12 sm:my-16 lg:my-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className={`text-center sm:text-left mb-6 sm:mb-8 lg:mb-10 transition-all duration-800 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className='font-semibold text-3xl sm:text-4xl lg:text-5xl'>Significant Others.</p>
      </div>

      <div
        className={`flex flex-col lg:flex-row items-start justify-between 
        gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto 
        p-6 sm:p-8 lg:p-10 bg-gray-100 rounded-2xl sm:rounded-3xl
        min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]
        transition-all duration-700 delay-400 transform hover:shadow-xl hover:bg-gray-50
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-98"}`}>
        {/* LEFT: Accordion Section */}
        <div className={`w-full lg:w-2/5 order-2 lg:order-1 transition-all duration-600 delay-600 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <Accordion type='single' collapsible className='w-full' defaultValue='item-1' onValueChange={(value) => setActiveItem(value)}>
            <AccordionItem value='item-1' className='border-b border-gray-300'>
              <AccordionTrigger className='hover:no-underline focus:no-underline text-base sm:text-lg font-medium py-3 sm:py-4'>Mac and iPhone</AccordionTrigger>
              <AccordionContent className='pb-4 sm:pb-6'>
                <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>Answer calls or messages from your iPhone directly on your Mac. See and control what's on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. Thanks to iCloud, you can access your files from either your iPhone or your Mac — and much more.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2' className='border-b border-gray-300'>
              <AccordionTrigger className='hover:no-underline focus:no-underline text-base sm:text-lg font-medium py-3 sm:py-4'>Mac and iPad</AccordionTrigger>
              <AccordionContent className='pb-4 sm:pb-6'>
                <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while referencing the other. You can even start a Final Cut Pro project on your iPad and continue it on your Mac.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3' className='border-b border-gray-300'>
              <AccordionTrigger className='hover:no-underline focus:no-underline text-base sm:text-lg font-medium py-3 sm:py-4'>Mac and Apple Watch</AccordionTrigger>
              <AccordionContent className='pb-4 sm:pb-6'>
                <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>Automatically log in to your Mac when you're wearing your Apple Watch with Auto Unlock. No password typing required.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* RIGHT: Image Section */}
        <div
          className={`w-full lg:w-3/5 order-1 lg:order-2 flex justify-center items-center
          mb-6 lg:mb-0 px-4 sm:px-6 lg:px-8 xl:px-12
          transition-all duration-600 delay-800 transform ${isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-8 scale-95"}`}>
          <div className='w-full max-w-md sm:max-w-lg lg:max-w-full overflow-hidden rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-500'>
            <img src={imageMap[activeItem || "item-1"]} alt={`Mac integration with ${activeItem === "item-1" ? "iPhone" : activeItem === "item-2" ? "iPad" : "Apple Watch"}`} className='w-full h-auto object-cover transition-all duration-700 ease-in-out hover:brightness-110' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignificantOthers;
