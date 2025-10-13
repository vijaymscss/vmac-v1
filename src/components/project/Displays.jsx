import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Video, Monitor } from "lucide-react";

const Displays = () => {
  const displays = [
    {
      name: "Studio Display ",
      description: "A 5K Retina display with stellar camera and audio.",
      imageUrl: "/images/studio-disp.png",
      price: "From $2,499",
      displaySize: '27"',
      displayDes: "Retina display with 5120x2880 pixels",
      resolution: "5K",
      resolutionDes: "Retina display for gorgeous colour and spectacular detail",
      brightness: "600 nits",
      brightnessDes: "Extreme Dynamic Range (XDR) for true-to-life images",
      color: "P3 wide colour gamut and 10-bit colour depth",
      camera: "10MP Ultra Wide camera with Centre Stage for more natural video calls",
      displayTech: "True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light",
    },
    {
      name: "Pro Display XDR",
      description: "An advanced 6K XDR display for pro workflows.",
      imageUrl: "/images/pro-disp.png",
      price: "From $4,999",
      displaySize: '32"',
      displayDes: " Retina XDR display with 6016x3384 pixels",
      resolution: "6K",
      resolutionDes: "Retina XDR display for the most immersive viewing experience",
      brightness: "1000 nits",
      brightnessDes: "Extreme Dynamic Range (XDR) for true-to-life images",
      color: "P3 wide colour gamut and 10-bit colour depth",
      camera: "12MP Ultra Wide camera with Centre Stage for more natural video calls",
      displayTech: "True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light",
    },
  ];

  return (
    <div className=''>
      <div className=''>
        <Carousel>
          <CarouselContent>
            {displays.map((item, index) => (
              <CarouselItem key={index} className='relative md:basis-1/2 lg:basis-1/4 '>
                <div className='flex flex-col items-center p-10 gap-10'>
                  <img src={item.imageUrl} alt={`spec${index + 1}`} />
                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.name}</p>
                    <p className='text-xs  opacity-90 pt-3'>{item.description}</p>
                  </div>

                  <p className='text-lg font-semibold'>{item.price}</p>
                  <div className='flex gap-2 justify-center items-center'>
                    <p className='bg-blue-500 rounded-4xl px-3 py-2 text-white text-xs cursor-pointer'>Learn more</p>
                    <p className='text-xs text-blue-500 cursor-pointer'>Buy now {`>`}</p>
                  </div>

                  <div className='w-full border-t border-gray-300'></div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.displaySize}</p>
                    <p className='text-xs  opacity-90 py-2'>{item.displayDes}</p>
                  </div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.resolution}</p>
                    <p className='text-xs  opacity-90 py-2'>{item.resolutionDes}</p>
                  </div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.brightness}</p>
                    <p className='text-xs  opacity-90 py-2'>{item.brightnessDes}</p>
                  </div>

                  <div className='flex flex-col text-center items-center'>
                    <Video strokeWidth={1} className='h-8 w-8' />
                    <p className='text-xs  opacity-90 py-2'>{item.camera}</p>
                  </div>

                  <div className='flex flex-col text-center items-center'>
                    <Monitor strokeWidth={1} className='h-8 w-8' />
                    <p className='text-xs  opacity-90 py-2'>{item.displayTech}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Displays;
