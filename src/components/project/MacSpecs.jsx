import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const MacSpecs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const currentRef = componentRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start main container animation
            setTimeout(() => {
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

            // Clean up timers after animations complete
            setTimeout(() => {
              cardTimers.forEach((timer) => clearTimeout(timer));
            }, 2000);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin for better timing
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const specs = [
    {
      url: "/images/mac-spec-1.jpg",
      title: "AI",
      description: "Transform your workflow with AI",
      color: "text-black",
    },
    {
      url: "/images/mac-spec-2.jpg",
      title: "Battery Life",
      description: "All-day battery life",
      color: "text-white",
    },
    {
      url: "/images/mac-spec-3.jpg",
      title: "Performance",
      description: "Power through your work",
      color: "text-black",
    },
    {
      url: "/images/mac-spec-4.jpg",
      title: "Connectivity",
      description: "Wi-Fi 6E and Thunderbolt 4",
      color: "text-black",
    },
    {
      url: "/images/mac-spec-5.jpg",
      title: "Security",
      description: "Your business is nobody else’s",
      color: "text-white",
    },
    {
      url: "/images/mac-spec-6.jpg",
      title: "Camera",
      description: "1080p FaceTime HD camera",
      color: "text-white",
    },
    {
      url: "/images/mac-spec-7.jpg",
      title: "Audio",
      description: "Studio-quality mics and speakers",
      color: "text-white",
    },
  ];

  return (
    <div ref={componentRef} className={`py-[50px] transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <p className={`font-semibold text-5xl transition-all duration-800 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Get to know Mac.</p>

      <div className={`my-15 transition-all duration-700 delay-400 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <Carousel>
          <CarouselContent>
            {specs.map((item, index) => (
              <CarouselItem
                key={index}
                className={`relative md:basis-1/2 lg:basis-1/3 h-[525px] rounded-3xl overflow-hidden
                  transition-all duration-700 transform group hover:scale-105 hover:shadow-xl cursor-pointer
                  ${visibleCards.has(index) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`}>
                {/* Image Container with proper overflow control */}
                <div className='w-full h-full rounded-3xl overflow-hidden'>
                  <img src={item.url} alt={`spec${index + 1}`} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                </div>

                {/* Text Content */}
                <div
                  className={`absolute top-10 left-10 ${item.color} transition-all duration-300 
                  group-hover:translate-y-[-4px] group-hover:translate-x-[-4px]`}>
                  <h3 className={`text-2xl font-semibold transition-all duration-300 group-hover:scale-105`}>{item.title}</h3>
                  <p className={`text-sm opacity-90 transition-all duration-300 group-hover:opacity-100`}>{item.description}</p>
                </div>

                <div
                  className={`absolute bottom-10 right-10 transition-all duration-300 
                  group-hover:translate-y-[-4px] group-hover:translate-x-[4px]`}>
                  <Button
                    variant='outline'
                    size='icon'
                    className='border-0 rounded-full bg-black hover:bg-black transition-all duration-300 
                      group-hover:bg-blue-600 group-hover:scale-110 group-hover:shadow-lg'>
                    <Plus className='text-white font-bold transition-transform duration-300 group-hover:rotate-90' />
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white' />
          <CarouselNext className='transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white' />
        </Carousel>
      </div>
    </div>
  );
};

export default MacSpecs;
