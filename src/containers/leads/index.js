import { useState } from "react";
import { Access_Button } from "@/components/buttons";
import GetAcess from "../../../public/assets/get800.png";
import Image from "next/image";
import Service_Funnel from "../../../public/assets/ser_funnel.png";

export default function Leads() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <>
        <div className="px-6 flex ban-pan lg:px-6  lead-bg	 ">
          <div className="solar_con">
            <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-8">
              <h1 className=" text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
                Get Early Access to The Solar Boss Lead Gen
              </h1>
              <p className=" text-md text-white pt-0">
                Learn The Step-By-Step Blueprint For Generating Qualified Leads
                For Your Solar Business
              </p>
              <p className="text-md font-semibold pb-10 text-white ">
                *** LIMITED TIME BONUS *** <br />
                Get 8000 FREE Solar Leads When You Join
              </p>
              <p>
                <Access_Button title="Get Early Access Now" />
              </p>
            </div>
            <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-2">
              <Image src={GetAcess} alt="Access 800" />
            </div>
          </div>
        </div>
      </>
    );
  }