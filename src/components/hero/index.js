import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Home_Banner from "../../../public/assets/home.jpg";
import Flying from "../../../public/assets/flying.png";
import Image from "next/image";
// import '../../styles/hero.scss'
import Sell_Button from "../sell_button";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative z-0 mt-20 isolate overflow-hidden bg-indigo-500">
        <Image
          src={Home_Banner}
          width={100}
          height={100}
          alt="banner"
          className="absolute bg-zinc-900 inset-0 blur-sm -z-10 h-full w-full object-cover"
        />

        <div className="px-6 flex ban-pan lg:px-8  bg-black bg-opacity-90">
          
        
            <div className="banner-con flex">
              <div className="text-left max-w-lg	 flex flex-col justify-around h-48  md:pt-16">
                <h1 className=" text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
                  We <span className="text-red-500"> Maksy</span>mize your solar sales
                </h1>
                <p className="mt-6 text-md leading-8 text-white">
                  Don’t let amateurs run your ads. Apply now to start generating
                  new installs and grow your business without door knocking,
                  cold calling, or any other in person events!
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-300 pb-8 sm:pt-4">
                <Sell_Button title="Schedule a free strategy call"/>
                </p>
              </div>
              <div className="text-left max-w-lg    md:py-2">
                <div className=" relative  p-0 mb-2">
                  <Image
                    src={Flying}
                    className=" w-auto flying h-auto	"
                  />
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
