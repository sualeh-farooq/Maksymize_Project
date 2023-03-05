import White_Logo from "../../../public/assets/white_logo.png";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

const navigation = {
  footer: [
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ],
  social: [
    { title: "Ivan Pashov", icon: faFacebook, href: "https://www.facebook.com/ivanpashovofficial1" , target:'_blank' },
    { title: "@ivanpashov", icon: faInstagram, href: "https://www.youtube.com/channel/UC-bDlkxuykSgmcofltCyboQ?view_as=subscriber" ,target:'_blank'},
    { title: "Ivan Pashov", icon: faLinkedin, href: "https://www.instagram.com/ivanpashov__/?hl=en",target:'_blank' },
    { title: "Ivan Pashov", icon: faYoutube, href: "https://www.linkedin.com/in/ivan-pashov-28a18b126/" , target:'_blank'},
  ],
  contact: [
    { icon: faPhone, text: " +1 713-701-5597" ,href:"tel:+1 713-701-5597" },
    { icon: faEnvelope, text: "info@maksymizesolar.com" , href:"mailto:info@maksymizesolar.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black " aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 sm:py-6 lg:px-8 ">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8  py-2">
          <div className="white-logo space-y-4 ml-16 relative  mb-4">
            <Image className="w-64" src={White_Logo} alt="Company name" />
            {navigation.contact.map((item) => (
              <div className="flex space-x-6 ml-2 hover:text-red-500 ">
                <FontAwesomeIcon
                  className="text-white w-4 hover:text-red-500"
                  icon={item.icon}
                />
                <a href={item.href} className="text-white text-sm font-semibold hover:text-red-500">
                  {item.text}
                </a>
              </div>
            ))}
          </div>
          <div className="about space-y-8 mt-4 ml-16">
            {navigation.footer.map((item) => (
              <div className="flex space-x-4  ml-2 hover:text-red-500 ">
                <a
                  href={item.href}
                  className="text-white text-md font-bold leading-4 hover:text-red-500"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
          <div className="social space-y-8 mt-4 ml-16">
            {navigation.social.map((item) => (
              <div className="flex space-x-4  ml-2 hover:text-red-500 ">
                <FontAwesomeIcon
                  className="text-white w-4 hover:text-red-500"
                  icon={item.icon}
                />
                <a
                  href={item.href}
                  target={item.target}
                  className="text-white text-md font-bold leading-4 hover:text-red-500"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
