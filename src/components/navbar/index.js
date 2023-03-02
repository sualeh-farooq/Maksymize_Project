import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MakLogo from '../../../public/assets/logo.png'
// import Image from 'next/image'
import Contact_Btn from '../contact_button'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(){
    return <>
        { <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto bg-fixed  h-20 sticky	 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative  flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex mt-6 flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex pt-0.25 flex-shrink-1 items-center">
                  <Image
                    className="block h-14 w-auto lg:hidden"
                   src={MakLogo}
                    alt="Your Company"
                    width={100}
                    height={50}


                  />
                  <Image
                    width={100}
                    height={50}
                   src={MakLogo}

                    className="hidden h-14  w-auto lg:block"
                  
                    alt="Your Company"
                  />
                </div>



                <div className="hidden mr-6  sm:flex sm:space-x-16">
                 
                  <a
                    href="#"
                    className=" inline-flex items-center  font-semibold	focus:text-red-400  px-1 pt-1 text-sm  text-xl	"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="font-sans hover:font-serif font-semibold inline-flex items-center 	 focus:text-red-400 border-b-2 border-transparent px-1 pt-1 text-sm  text-xl"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center font-semibold  focus:text-red-400	 border-b-2 border-transparent px-1 pt-1 text-sm  text-xl"
                  >
                    Contact
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 font-semibold	 focus:text-red-400 border-transparent px-1 pt-1 text-sm  text-xl"
                  >
                    Results
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                 
                 <Contact_Btn />
               </div>
              </div>
             
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4"> 
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50  hover:text-gray-700" */}
               <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  hover:text-red-500 hover:bg-gray-50"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4  font-medium text-gray-500 hover:text-red-500  hover:bg-gray-50 hover:text-gray-700 hover:font-bold"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4  font-medium text-gray-500  hover:bg-gray-50 hover:text-red-500 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4  font-medium text-gray-500  hover:bg-gray-50 hover:text-gray-700 hover:text-red-500 " 
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure> }
    </>
}


