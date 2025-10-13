import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Video, Monitor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import Laptops from "./Laptop";
import Desktops from "./Desktops";
import Displays from "./Displays";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  //   const macProducts = [
  //     {
  //       name: "iMac",
  //       description: "A stunning all-in-one desktop for creativity and productivity.",
  //       imageUrl: "/images/imac.png",
  //       price: "From $1,299",
  //       displaySize: "60.96 cm ",
  //       displayDes: "(24″) 4.5K Retina display with 500 nits of brightness delivers sharp and vibrant detail.11",
  //       chip: "/images/m3m4.svg",
  //       ai: "/images/ai.svg",
  //       ports: "6 ports",
  //       portsDes: ["Two Thunderbolt", "two USB 3 ports", "a headphone jack", "and Gigabit Ethernet.", "-"],
  //       colors: ["#F2F2F7", "#FF453A", "#FF9F0A", "#FFD60A", "#32D74B", "#64D2FF", "#0A84FF", "#5E5CE6"],
  //       ram: "upto 32GB",
  //       storage: "upto 2TB",
  //     },
  //     {
  //       name: "Mac Mini",
  //       description: "A compact desktop that’s big on performance and versatility.",
  //       imageUrl: "/images/mac-mini.png",
  //       price: "From $599",
  //       displaySize: "",
  //       displayDes: "Supports one display with up to 6K resolution at 60Hz, or two displays with up to 4K resolution at 60Hz.",
  //       chip: "/images/m4pro.svg",
  //       ai: "/images/ai.svg",
  //       ports: "4 ports",
  //       portsDes: ["Two Thunderbolt 3 ports", "two USB 3 ports", "an HDMI 2.0 port", "a headphone jack", "and Gigabit Ethernet."],
  //       colors: ["#F2F2F7"],
  //       ram: "upto 32GB",
  //       storage: "upto 2TB",
  //     },
  //     {
  //       name: "Mac Studio",
  //       description: "A powerhouse desktop for pro users with demanding workflows.",
  //       imageUrl: "/images/mac-studio.png",
  //       price: "From $1,999",
  //       displaySize: "",
  //       displayDes: "Supports up to four Pro Display XDRs and one 4K TV.",
  //       chip: "/images/m4.svg",
  //       ai: "/images/ai.svg",
  //       ports: "8 ports",
  //       portsDes: ["Four Thunderbolt 4 ports", "two USB 3 ports", "an HDMI port", "a 10Gb Ethernet port", "and a headphone jack."],
  //       colors: ["#1C1C1E"],
  //       ram: "upto 128GB",
  //       storage: "upto 2TB",
  //     },
  //     {
  //       name: "Mac Pro",
  //       description: "The most powerful Mac ever, designed for the professionals.",
  //       imageUrl: "/images/mac-pro.png",
  //       price: "From $5,999",
  //       displaySize: "",
  //       displayDes: "Supports up to six Pro Display XDRs and one 4K TV.",
  //       chip: "/images/m4pro.svg",
  //       ai: "/images/ai.svg",
  //       ports: "8 ports",
  //       portsDes: ["Two Thunderbolt 4 ports", "two USB 3 ports", "two 10Gb Ethernet ports", "an HDMI port", "and a headphone jack."],
  //       colors: ["#D4D4D8"],
  //       ram: "upto 256GB",
  //       storage: "upto 2TB",
  //     },
  //   ];

  //   const macBookProducts = [
  //     {
  //       name: "MacBook Air",
  //       description: "The thinnest and lightest notebook, now supercharged by M3and M4.",
  //       imageUrl: "/images/macair-13.png",
  //       price: "From $1,199",
  //       displaySize: "33.78 cm ",
  //       displayDes: "(13.3″) Retina display with True Tone for a more natural viewing experience.",
  //       chip: "/images/m3m4.svg",
  //       ai: "/images/ai.svg",
  //       ports: "2 ports",
  //       portsDes: ["Two Thunderbolt 3 ports", "and a headphone jack."],
  //       colors: ["#F2F2F7", "#C0C0C0", "#A3A3A3", "#000000"],
  //       ram: "upto 24GB",
  //       storage: "upto 2TB",
  //     },
  //     {
  //       name: "MacBook Pro 13",
  //       description: "A powerful notebook with M4 and M4 Pro for everyday tasks and more.",
  //       imageUrl: "/images/macair-13.png",
  //       price: "From $2,299",
  //       displaySize: "33.78 cm ",
  //       displayDes: "(13.3″) Retina display with True Tone for a more natural viewing experience.",
  //       chip: "/images/m4.svg",
  //       ai: "/images/ai.svg",
  //       ports: "2 ports",
  //       portsDes: ["Two Thunderbolt 3 ports", "and a headphone jack."],
  //       colors: ["#F2F2F7", "#C0C0C0", "#A3A3A3", "#000000"],
  //       ram: "upto 24GB",
  //       storage: "upto 2TB",
  //     },
  //   ];

  //   const displays = [
  //     {
  //       name: "Studio Display ",
  //       description: "A 5K Retina display with stellar camera and audio.",
  //       imageUrl: "/images/studio-disp.png",
  //       price: "From $2,499",
  //       displaySize: '27"',
  //       displayDes: "Retina display with 5120x2880 pixels",
  //       resolution: "5K",
  //       resolutionDes: "Retina display for gorgeous colour and spectacular detail",
  //       brightness: "600 nits",
  //       brightnessDes: "Extreme Dynamic Range (XDR) for true-to-life images",
  //       color: "P3 wide colour gamut and 10-bit colour depth",
  //       camera: "10MP Ultra Wide camera with Centre Stage for more natural video calls",
  //       displayTech: "True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light",
  //     },
  //     {
  //       name: "Pro Display XDR",
  //       description: "An advanced 6K XDR display for pro workflows.",
  //       imageUrl: "/images/pro-disp.png",
  //       price: "From $4,999",
  //       displaySize: '32"',
  //       displayDes: " Retina XDR display with 6016x3384 pixels",
  //       resolution: "6K",
  //       resolutionDes: "Retina XDR display for the most immersive viewing experience",
  //       brightness: "1000 nits",
  //       brightnessDes: "Extreme Dynamic Range (XDR) for true-to-life images",
  //       color: "P3 wide colour gamut and 10-bit colour depth",
  //       camera: "12MP Ultra Wide camera with Centre Stage for more natural video calls",
  //       displayTech: "True Tone, anti-reflective coating and a nano-texture glass option for optimal viewing in any light",
  //     },
  //   ];

  return (
    <div className={`py-[50px] transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <p className={`font-semibold text-5xl transition-all duration-800 delay-200 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Explore the line-up.</p>

      <div className={`py-[50px] transition-all duration-700 delay-400 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <Tabs defaultValue='Desktops'>
          <TabsList className={`bg-gray-300 rounded-4xl px-1 py-5 transition-all duration-600 delay-600 transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <TabsTrigger value='Laptops' className='data-[state=active]:bg-black data-[state=active]:text-white text-gray-700  px-4 py-4 rounded-4xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
              Laptops
            </TabsTrigger>
            <TabsTrigger value='Desktops' className='data-[state=active]:bg-black data-[state=active]:text-white text-gray-700  px-4 py-4 rounded-4xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
              Desktops
            </TabsTrigger>
            <TabsTrigger value='Displays' className='data-[state=active]:bg-black data-[state=active]:text-white text-gray-700  px-4 py-4 rounded-4xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md'>
              Displays
            </TabsTrigger>
          </TabsList>
          <TabsContent value='Laptops' className='transition-all duration-500 animate-in fade-in slide-in-from-left-4'>
            <Laptops />
          </TabsContent>
          <TabsContent value='Desktops' className='transition-all duration-500 animate-in fade-in slide-in-from-left-4'>
            <Desktops />
          </TabsContent>
          <TabsContent value='Displays' className='transition-all duration-500 animate-in fade-in slide-in-from-left-4'>
            <Displays />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
