import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Home_Banner from "../../../public/assets/home.jpg";
import Flying from "../../../public/assets/flying.png";
import Image from "next/image";
// import '../../styles/hero.scss'
import Sell_Button, { Download_Button } from "../sell_button";
import SolarVideo from "../solar_video";
import Thumbnail from "../../../public/assets/video_thumbnail.png";
import { Access_Button } from "../sell_button";
import GetAcess from "../../../public/assets/get800.png";
// black_book
import BlackBookImg from '../../../public/assets/black_book.png'

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
          <div className="text-left max-w-xl	 flex flex-col justify-around   md:pt-2">
            {/* <SolarVideo thumbnail={Thumbnail}  /> */}
            <Image src={GetAcess} alt="Access 800" />
          </div>
        </div>
      </div>
    </>
  );
}


export function BlackBook() {
  return (
    <>
      <div className="px-6 flex ban-pan lg:px-6 pt-2 red-bg	 ">
        <div className="solar_con">
        <div className="text-left max-w-xl	 flex flex-col justify-around   md:pt-4">
            {/* <SolarVideo thumbnail={Thumbnail}  /> */}
            <Image src={BlackBookImg} alt="Access 800" />
          </div>
          <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-10">
            <h1 className=" text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
            The Solar Sales Blackbook
            </h1>
            <p className="mt-2 text-md leading-8 text-white">
            The secret methods Solar Pros are using to crush residential solar sales virtually and over the phone WITHOUT competing on price.

            <p className="text-md font-semibold leading-8 text-white mt-4 ">
            Warning: Do NOT download this ebook if you’re not interested in selling more KWs!
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


const people = [
  {
    name: 'Whitney Francis',
    role: 'Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export  function Cloud() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our approach</h2>
         
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          
            <li >
             <button className="w-28 h-28 rounded-full bg-gray-200 text-wh">s</button>
             
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  {/* <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500"> */}
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  {/* </a> */}
                </li>
                
              </ul>
            </li>
            <li >
             <button className="w-28 h-28 rounded-full bg-gray-200 text-wh">s</button>
             
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  {/* <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500"> */}
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  {/* </a> */}
                </li>
                
              </ul>
            </li>
            <li >
             <button className="w-28 h-28 rounded-full bg-gray-200 text-wh">s</button>
             
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  {/* <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500"> */}
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  {/* </a> */}
                </li>
                
              </ul>
            </li> <li >
             <button className="w-28 h-28 rounded-full bg-gray-200 text-wh">s</button>
             
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  {/* <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500"> */}
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  {/* </a> */}
                </li>
                
              </ul>
            </li>
            
        
        </ul>
      </div>
    </div>
  )
}
