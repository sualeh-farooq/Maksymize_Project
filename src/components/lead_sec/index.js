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
import BlackBookImg from "../../../public/assets/black_book.png";

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

const people = [
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

export function Cloud() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our approach
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <button className="w-32 h-32 rounded-full bg-gray-200 text-wh">
              {/* <p className="">Sualeh</p> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 ml-10 opacity-40 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <div class="relative inline-flex items-center justify-center w-16  h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-10 py-4 -right-8 dark:border-gray-900">
                Step 1
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Mining of solar data
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  We have gathered many years’ worth of information from
                  homeowners living in over 25 states. We have spent millions
                  online collecting this data to use in our solar campaigns to
                  be able to bring our solar clients “credit qualified”
                  homeowners who have a high interest into your pipeline.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <button className="w-32 h-32 rounded-full bg-gray-200 text-wh">
              {/* <p className="">Sualeh</p> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 ml-10 opacity-40 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <div class="relative inline-flex items-center justify-center w-16  h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-10 py-4 -right-8 dark:border-gray-900">
                Step 1
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Mining of solar data
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  We have gathered many years’ worth of information from
                  homeowners living in over 25 states. We have spent millions
                  online collecting this data to use in our solar campaigns to
                  be able to bring our solar clients “credit qualified”
                  homeowners who have a high interest into your pipeline.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <button className="w-32 h-32 rounded-full bg-gray-200 text-wh">
              {/* <p className="">Sualeh</p> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 ml-10 opacity-40 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                />
              </svg>

              <div class="relative inline-flex items-center justify-center w-16  h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-10 py-4 -right-8 dark:border-gray-900">
                Step 1
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Mining of solar data
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  We have gathered many years’ worth of information from
                  homeowners living in over 25 states. We have spent millions
                  online collecting this data to use in our solar campaigns to
                  be able to bring our solar clients “credit qualified”
                  homeowners who have a high interest into your pipeline.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
