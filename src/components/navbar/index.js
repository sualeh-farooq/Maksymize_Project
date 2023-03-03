import Head from "next/head";
import Image from "next/image";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MakLogo from "../../../public/assets/logo.png";
import Contact_Btn from "../contact_button";
import { useRouter } from "next/router";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const router = useRouter()
  return (
    <>
      {
        <Disclosure as="nav" className="bg-white z-10 shadow top-0 right-0 fixed w-full  " style={{boxShadow:"0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%)"}}>
          {({ open }) => (
            <>
              <header >
                <div className="mx-auto bg  h-20 sticky	 max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative  flex h-16 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
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
                     <Link href="/">   <a
                          className={router.pathname == "/" ? "active inline-flex items-center  font-semibold	focus:text-red-400  px-1 pt-1 text-sm  text-xl" : "inline-flex items-center  font-semibold	focus:text-red-400  px-1 pt-1 text-sm  text-xl"}
      
                        >
                          Home
                        </a></Link>
                         <Link  href="/about"> <a
                         
                         className={router.pathname == "/about" ? "active inline-flex items-center  font-semibold	focus:text-red-400  px-1 pt-1 text-sm  text-xl" : "inline-flex items-center  font-semibold	focus:text-red-400  px-1 pt-1 text-sm  text-xl"}
                         >
                          About
                        </a></Link>
                       
                      </div>
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Contact_Btn />
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-4">
                <Link href="/">
                  <Disclosure.Button
                    as="a"
                  className={router.pathname=="/"?"block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  text-white bg-black" : "block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  hover:text-white hover:bg-black"}
                  >
                   
                    Home
                  </Disclosure.Button>
                    </Link>
                    <Link href="/about">
                  <Disclosure.Button
                    as="a"
                  
                    className={router.pathname=="/about"?"block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  text-white bg-black" : "block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  hover:text-white hover:bg-black"}
                    >
                    About
                  
                  </Disclosure.Button>
                  </Link>
                  <Link href="/contact">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className={router.pathname=="/contact"?"block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  text-white bg-black" : "block border-l-4  py-2 pl-3 pr-4 text-gray-500 font-medium  hover:text-white hover:bg-black"}
                    >
                    Contact
                  </Disclosure.Button>
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      }
    </>
  );
}
