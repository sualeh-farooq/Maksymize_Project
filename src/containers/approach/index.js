import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  design from '../../../public/assets/design.svg'
import  campaign from '../../../public/assets/campaign.svg'
import  server from '../../../public/assets/server.svg'
import  flag from '../../../public/assets/flag.svg'
import  auto from '../../../public/assets/auto.svg'
import  rocket from '../../../public/assets/rocket.svg'
import Image from "next/image";
export function Approach() {
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
             
          <Image src={flag} className="w-14 h-14  opacity-60 ml-10 absolute"  />
              

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
          <Image src={campaign} className="w-16 h-16 -mt-2  opacity-60 ml-8 absolute"  />
             

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
          <Image src={design} className="w-12 h-14 opacity-60 ml-10 absolute"  />

           

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
         

            <Image src={server} className="w-12 h-14 opacity-60 ml-10 absolute"  />
          
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

            <Image src={auto} className="w-14 h-14 -mt-1 opacity-40 ml-9 absolute"  />
            

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
            <Image src={rocket} className="w-14 h-12 opacity-60 ml-9 absolute"  />
           

              

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
