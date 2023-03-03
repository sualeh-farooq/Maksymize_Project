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
import Head from "next/head";
import Script from "next/script";
import { Services } from "@/components/lead_sec";

export default function AboutPage() {
    return <>
   
    <NavBar />
   <AboutHero />
   <AboutUs />
    <Solar /> 
   <Founder />
<Footer />
    


    </>
}