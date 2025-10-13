import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Video, Monitor } from "lucide-react";

const Desktops = () => {
  const macProducts = [
    {
      name: "iMac",
      description: "A stunning all-in-one desktop for creativity and productivity.",
      imageUrl: "/images/imac.png",
      price: "From $1,299",
      displaySize: "60.96 cm ",
      displayDes: "(24″) 4.5K Retina display with 500 nits of brightness delivers sharp and vibrant detail.11",
      chip: "/images/m3m4.svg",
      ai: "/images/ai.svg",
      ports: "6 ports",
      portsDes: ["Two Thunderbolt", "two USB 3 ports", "a headphone jack", "and Gigabit Ethernet.", "-"],
      colors: ["#F2F2F7", "#FF453A", "#FF9F0A", "#FFD60A", "#32D74B", "#64D2FF", "#0A84FF", "#5E5CE6"],
      ram: "upto 32GB",
      storage: "upto 2TB",
    },
    {
      name: "Mac Mini",
      description: "A compact desktop that’s big on performance and versatility.",
      imageUrl: "/images/mac-mini.png",
      price: "From $599",
      displaySize: "",
      displayDes: "Supports one display with up to 6K resolution at 60Hz, or two displays with up to 4K resolution at 60Hz.",
      chip: "/images/m4pro.svg",
      ai: "/images/ai.svg",
      ports: "4 ports",
      portsDes: ["Two Thunderbolt 3 ports", "two USB 3 ports", "an HDMI 2.0 port", "a headphone jack", "and Gigabit Ethernet."],
      colors: ["#F2F2F7"],
      ram: "upto 32GB",
      storage: "upto 2TB",
    },
    {
      name: "Mac Studio",
      description: "A powerhouse desktop for pro users with demanding workflows.",
      imageUrl: "/images/mac-studio.png",
      price: "From $1,999",
      displaySize: "",
      displayDes: "Supports up to four Pro Display XDRs and one 4K TV.",
      chip: "/images/m4.svg",
      ai: "/images/ai.svg",
      ports: "8 ports",
      portsDes: ["Four Thunderbolt 4 ports", "two USB 3 ports", "an HDMI port", "a 10Gb Ethernet port", "and a headphone jack."],
      colors: ["#1C1C1E"],
      ram: "upto 128GB",
      storage: "upto 2TB",
    },
    {
      name: "Mac Pro",
      description: "The most powerful Mac ever, designed for the professionals.",
      imageUrl: "/images/mac-pro.png",
      price: "From $5,999",
      displaySize: "",
      displayDes: "Supports up to six Pro Display XDRs and one 4K TV.",
      chip: "/images/m4pro.svg",
      ai: "/images/ai.svg",
      ports: "8 ports",
      portsDes: ["Two Thunderbolt 4 ports", "two USB 3 ports", "two 10Gb Ethernet ports", "an HDMI port", "and a headphone jack."],
      colors: ["#D4D4D8"],
      ram: "upto 256GB",
      storage: "upto 2TB",
    },
  ];

  return (
    <div className=''>
      <div className=''>
        <Carousel>
          <CarouselContent>
            {macProducts.map((item, index) => (
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

export default Desktops;
