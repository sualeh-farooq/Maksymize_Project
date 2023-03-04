import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/containers/about_hero";
import { AboutUs, Founder } from "@/containers/about_hero";
import { Clients } from "@/containers/clients";
import Head from "next/head";
import '../../../node_modules/lightbox2/dist/css/lightbox.css'
import Script from "next/script";
export default function AboutPage() {
  return (
    <>

      <NavBar />
      <AboutHero />
      <AboutUs />
      <Clients />
      <Founder />
      <Footer />
    </>
  );
}
