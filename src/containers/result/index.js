import LCDImage from "../../../public/assets/client.png";
import Image from "next/image";
import { Result_Button } from "@/components/buttons";
export function Results() {
    return (
      <>
        <div className=" flex ban-pan lg:px-6 pt-2 approach-bg	 ">
          <div className="solar_con">
            <div className="text-left lcd-div max-w-lg	 flex flex-col justify-around   md:pt-4">
              {/* <SolarVideo thumbnail={Thumbnail}  /> */}
              <Image src={LCDImage} alt="LCD" />
            </div>
            <div className="text-left max-w-lg	pl-2 flex flex-col justify-around pb-10 -mt-8  md:pt-10">
              <h4 className=" uppercase text-md text-red-500 font-semibold pt-2 sm:text-md lg:text-md md:text-md">
                WE FOCUS ON{" "}
              </h4>
              <h1 className=" text-4xl font-bold text-black  sm:text-4xl lg:text-6xl md:text-4xl">
                Results
              </h1>
              <p className=" text-md leading-8 text-black ">
                Check out some of the results we’ve been able to generate for our
                clients as well as what they had to say about working with us.
                Proof tastes good.
              </p>
  
              <p>
                <Result_Button title="See our results" />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }