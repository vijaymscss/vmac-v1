import React, { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AppleShopCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger card animations
    const cardTimers = [];
    for (let i = 0; i < 7; i++) {
      const cardTimer = setTimeout(() => {
        setVisibleCards((prev) => new Set([...prev, i]));
      }, 700 + i * 100);
      cardTimers.push(cardTimer);
    }

    return () => {
      clearTimeout(timer);
      cardTimers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const featureCards = [
    {
      title: "Monthly payment options available.",
      description: "Choose an easy way to finance with convenient payment options.",
      icon: "CreditCard",
    },
    {
      title: "Customise your Mac.",
      description: "Choose your chip, memory, storage, even colour.",
      icon: "Monitor",
    },
    {
      title: "Save on new Mac with education pricing.",
      description: "Students and educators can save exclusively through the Apple Store.",
      icon: "GraduationCap",
    },
    {
      title: "Get flexible delivery and easy pickup.",
      description: "Get free delivery or pickup at your Apple Store.",
      icon: "Truck",
    },
    {
      title: "Shop with a Specialist",
      description: "Whether you shop in a store or online, our Specialists can help you pick something perfect.",
      icon: "UserRound",
    },
    {
      title: "Join an online Personal Setup session.",
      description: "Talk one-to-one with a Specialist to set up your Mac and discover new features.",
      icon: "Users",
    },
    {
      title: "Save with Apple Trade In.",
      description: "Get credit towards your next Mac when you trade in an eligible device at an Apple Store.",
      icon: "Smartphone",
    },
  ];

  return (
    <div className={`my-20 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className={`transition-all duration-800 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <p className={`font-semibold text-5xl transition-all duration-700 delay-300 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>Why Apple is the best</p>
        <p className={`font-semibold text-5xl transition-all duration-700 delay-500 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}>place to buy Mac.</p>
      </div>

      <div className={`my-10 transition-all duration-600 delay-600 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className='w-full max-w-7xl mx-auto'>
          <CarouselContent className='ml-2 md:ml-4'>
            {featureCards.map((item, index) => {
              const IconComponent = LucideIcons[item.icon];
              return (
                <CarouselItem
                  key={index}
                  className={`md:basis-1/2 lg:basis-1/3 p-4 transition-all duration-700 transform
                    ${visibleCards.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}>
                  <div
                    className='relative bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-100
                     transition-all duration-300 p-6 h-full flex flex-col justify-between pb-10 group
                     hover:scale-105 hover:-translate-y-2 cursor-pointer border border-transparent hover:border-blue-200'>
                    <div>
                      <IconComponent
                        className='w-8 h-8 text-gray-800 mb-4 transition-all duration-300 
                        group-hover:scale-110'
                      />
                      <h3
                        className='text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 
                        '>
                        {item.title}
                      </h3>
                      <p
                        className='text-gray-600 text-sm leading-relaxed transition-colors duration-300 
                        group-hover:text-gray-700'>
                        {item.description}
                      </p>
                    </div>
                    <div
                      className='absolute bottom-4 right-4 bg-gray-900 text-white rounded-full p-2 
                      hover:bg-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-90'>
                      <LucideIcons.Plus className='w-4 h-4 transition-transform duration-300' />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious
            className='hidden sm:flex transition-all duration-300 hover:scale-110 
            hover:bg-blue-600 hover:text-white hover:border-blue-600'
          />
          <CarouselNext
            className='hidden sm:flex transition-all duration-300 hover:scale-110 
            hover:bg-blue-600 hover:text-white hover:border-blue-600'
          />
        </Carousel>
      </div>
    </div>
  );
};

export default AppleShopCard;

{
  /* <CarouselItem
                  key={index}
                  className='relative  md:basis-1/2 lg:basis-1/3 bg-white rounded-3xl shadow-sm hover:shadow-md 
                       transition-all duration-300 p-6 flex flex-col justify-between '>
                  <div>
                    <IconComponent className='w-8 h-8 text-gray-800 mb-4' />
                    <h3 className='text-lg font-semibold text-gray-900 mb-2'>{item.title}</h3>
                    <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                  </div>
                  <div className='absolute bottom-4 right-4 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-700 transition'>
                    <LucideIcons.Plus className='w-4 h-4' />
                  </div>
                </CarouselItem> */
}
