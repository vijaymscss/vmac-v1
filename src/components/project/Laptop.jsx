import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Video, Monitor } from "lucide-react";

const Laptops = () => {
  const macBookProducts = [
    {
      name: "MacBook Air",
      description: "The thinnest and lightest notebook, now supercharged by M3and M4.",
      imageUrl: "/images/macair-13.png",
      price: "From $1,199",
      displaySize: "33.78 cm ",
      displayDes: "(13.3″) Retina display with True Tone for a more natural viewing experience.",
      chip: "/images/m3m4.svg",
      ai: "/images/ai.svg",
      ports: "2 ports",
      portsDes: ["Two Thunderbolt 3 ports", "and a headphone jack."],
      colors: ["#F2F2F7", "#C0C0C0", "#A3A3A3", "#000000"],
      ram: "upto 24GB",
      storage: "upto 2TB",
    },
    {
      name: "MacBook Pro 13",
      description: "A powerful notebook with M4 and M4 Pro for everyday tasks and more.",
      imageUrl: "/images/macair-13.png",
      price: "From $2,299",
      displaySize: "33.78 cm ",
      displayDes: "(13.3″) Retina display with True Tone for a more natural viewing experience.",
      chip: "/images/m4.svg",
      ai: "/images/ai.svg",
      ports: "2 ports",
      portsDes: ["Two Thunderbolt 3 ports", "and a headphone jack."],
      colors: ["#F2F2F7", "#C0C0C0", "#A3A3A3", "#000000"],
      ram: "upto 24GB",
      storage: "upto 2TB",
    },
  ];

  return (
    <div className=''>
      <div className=''>
        <Carousel>
          <CarouselContent>
            {macBookProducts.map((item, index) => (
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

                  <img src={item.chip} alt='chip' className='mx-auto' />
                  <div>
                    <img src={item.ai} alt='ai' className='mx-auto' />
                    <p className='text-xs'>Apple Intelligence</p>
                  </div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.ports}</p>
                    {item.portsDes?.map((port, idx) => (
                      <p key={idx} className='text-xs  opacity-90 '>
                        {port}
                      </p>
                    ))}
                  </div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.ram}</p>
                    <p className='text-xs  opacity-90 py-2'>unified memory</p>
                  </div>

                  <div className='text-center'>
                    <p className='text-2xl font-semibold'>{item.storage}</p>
                    <p className='text-xs  opacity-90 py-2'>storage</p>
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

export default Laptops;
