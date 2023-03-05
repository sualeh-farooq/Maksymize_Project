import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/containers/about_hero";
import { AboutUs, Founder } from "@/containers/about_hero";
// import { Clients } from "@/containers/clients/about";
import Head from "next/head";
import "../../../node_modules/lightbox2/dist/css/lightbox.css";
import Script from "next/script";
import Jonah from "../../../public/assets/jonah.jpg";
import { ImageWithVideoModal } from "@/components/slider";
import { ModalExample } from "@/components/slider";
import { Clients } from "@/containers/clients/about";
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
