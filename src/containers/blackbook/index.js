import { Download_Button } from "@/components/buttons";
import BlackBookImg from '../../../public/assets/black_book.png'
import Image from "next/image";
export function BlackBook() {
    return (
      <>
        <div className="px-6 flex ban-pan lg:px-6 pt-2 red-bg	 ">
          <div className="solar_con justify-between container mx-auto">
            <div className="black-book text-left max-w-lg pr-20	 flex flex-col justify-center   md:pt-4">
              <Image src={BlackBookImg} alt="Access 800" />
            </div>
            <div className="text-left max-w-md	 flex flex-col justify-around   md:pt-10">
              <h1 className=" text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
                The Solar Sales Blackbook
              </h1>
              <p className="mt-2 text-lg leading-8 text-white">
                The secret methods Solar Pros are using to crush residential solar
                sales virtually and over the phone WITHOUT competing on price.
                <p className="text-md font-semibold leading-8 text-white mt-4 ">
                  Warning: Do NOT download this ebook if you’re not interested in
                  selling more KWs!
                </p>
              </p>
              <p>
                <Download_Button title="Download for free" />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  