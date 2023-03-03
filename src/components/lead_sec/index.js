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
import { Result_Button } from "../sell_button";
import BlackBookImg from "../../../public/assets/black_book.png";
import LCDImage from "../../../public/assets/client.png";
import { Strat_Button } from "../sell_button";
import Service_Funnel from "../../../public/assets/ser_funnel.png";
import Service_Chart from "../../../public/assets/ser_chart.png";
import Service_Boost from "../../../public/assets/ser_boost.png";

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

export function BlackBook() {
  return (
    <>
      <div className="px-6 flex ban-pan lg:px-6 pt-2 red-bg	 ">
        <div className="solar_con justify-between">
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

export function Cloud() {
  return (
    <div className="approach-bg py-10">
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
                Step 2
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Building the campaign
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-4 font-thin leading-7">
                  Instead of running generic solar ads that people have been
                  exposed to for years and have become immune towards we use
                  solar offers that go hand in hand with the concept of solar
                  and have a much better chance of competing and even winning
                  over solar companies with 6-7 figures monthly marketing
                  budgets.
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
                Step 3
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Designing the funnel
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  We use the solar funnel instead of a simple “facebook lead
                  form ad” to further educate and entice homeowners interested
                  in going solar to go through the process of giving us their
                  personal information so they can be contacted.
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
                Step 4
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Pre-qualifying stage
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  Our application process is designed to collect homeowners
                  information who are interested in going solar and filter out
                  the ones who aren’t homeowners and have below average credit
                  score or in other words people who don’t fit the criteria of
                  being eligible for solar.
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
                Step 5
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">
                  Automation
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  As the successful leads meet our requirements, they are then
                  encouraged to schedule an appointment on your calendar at a
                  time of their convenience. This automation process means that
                  instead of chasing unqualified, discarded leads, you can spend
                  your time with trained and motivated buyers.
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
                Step 6
              </div>
            </button>

            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-gray-800	">Nuturing</p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-8 font-thin leading-7">
                  This is where we continue to educate and inform the homeowners
                  who have expressed interest in switching to solar using SMS
                  and email sequences. The main purpose for nurturing of the
                  solar leads is to make sure your company stays top of mind
                  even long after your prospects have gone through the
                  application process.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

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

export function Services() {
  return (
    <div className="bg-black py-10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Services
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <li>
            <Image className="mx-auto" src={Service_Funnel} />
          </li>
          <li>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-white	">
                  Building the campaign
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-10 text-white font-thin leading-8">
                  Is your Solar business here to stay? In this day and age
                  nothing says “We’re a legit company and we take pride in
                  everything that we do!” more than a well built Company Brand.
                  <br />
                  The moment people feel like they can relate to what the
                  company stands for is the moment they will be willing to pay
                  for an install more than they otherwise would with any other
                  company!
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Image className="mx-auto" src={Service_Chart} />
          </li>
          <li>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-white	">
                  Fresh & Exclusive Lead Generation​​
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-10 text-white font-thin leading-8">
                  We do NOT sell leads! We’re not in the business of selling or
                  reselling leads.
                  <br />
                  We build you your very own lead generation funnel that spits
                  out leads like crazy EVERY. SINGLE. DAY! More importantly, we
                  help you turn those leads into closed deals.{" "}
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Image className="mx-auto" src={Service_Boost} />
          </li>
          <li>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="text-2xl font-semibold text-white	">
                  Solar Sales Training​
                </p>
              </li>
            </ul>
            <ul role="list" className="mt-6 flex justify-center gap-x-6">
              <li>
                <p className="px-10 text-white font-thin leading-8">
                  If you’ve been canvassing to sign solar deals up until now and
                  you want to make the switch to selling from a distance but you
                  don’t really have a legitimate system to follow…
                  <br />
                  Not to worry! We have all the resources you possibly need to
                  turn those leads into closed deals without going through a
                  bunch of trial and error!
                </p>{" "}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Boost() {
  return (
    <>
      <div class="boost_div flex items-center flex-col  justify-center h-72  bg-fixed bg-center w-100 custom-img">
        <h1 className=" text-4xl font-bold text-white  sm:text-4xl lg:text-6xl md:text-4xl">
          Boost Your Leads{" "}
        </h1>

        <span className="mt-8">
          <Strat_Button title="Schedule a free strategy call" />
        </span>
      </div>
    </>
  );
}
