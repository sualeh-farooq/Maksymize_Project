import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Home_Banner from "../../../public/assets/home.jpg";
import Flying from "../../../public/assets/flying.png";
import Image from "next/image";
// import '../../styles/hero.scss'
import Sell_Button from "../sell_button";
import SolarVideo from "../solar_video";
import Thumbnail from '../../../public/assets/video_thumbnail.png'
export default function Solar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>


       
        <div className="px-6 flex ban-pan lg:px-6  bg-black pb-10 ">
          
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-"></div> */}
            <div className="solar_con">
            <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-10">
              <h4 className=" uppercase text-md text-red-500 font-medium sm:text-md lg:text-md md:text-md">
                  we breathe
                </h4>
                <h1 className=" text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
                  Solar
                </h1>
                <p className="mt-6 text-md leading-8 text-white">
                Our team of ninja warrior marketers can not only provide you with a hands-on strategy on how to kick your competition’s butt but also explode your sales and help you grow your solar business.
                </p>
                <p className="mt-6 text-lg font-semibold leading-8 text-white pb-2 ">
                Watch this video to find out what truly makes us different.


                </p>
                
              </div>
              <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-16">
               
                <SolarVideo thumbnail={Thumbnail}  />


              </div>
             

              
          </div>
        </div>

    </>
  );
}
