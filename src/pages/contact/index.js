import NavBar from "@/components/navbar"
// import Greet from "./Home";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Solar from "@/components/solar";
import Leads, { Cloud } from "@/components/lead_sec";
import { BlackBook } from "@/components/lead_sec";
import { Results } from "@/components/lead_sec";
import { Boost } from "@/components/lead_sec";
// import { TestNav } from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/components/about_hero";
import { AboutUs , Founder } from "@/components/about_hero";
import ContactForm from "@/components/contact_form";

import { Services } from "@/components/lead_sec";
import { Contact_Section } from "@/components/contact_sec";
import Head from "next/head";
import Script from "next/script";
export default function ContactPage() {
    return <>
       <Head> 
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
crossOrigin="anonymous"
        />
    </Head>
    <NavBar />
    <Contact_Section />

    <Script
      id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
   

{/* /<Footer /> */}

    </>
}