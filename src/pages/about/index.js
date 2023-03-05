import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/containers/about_hero";
import { AboutUs, Founder } from "@/containers/about_hero";
import "../../../node_modules/lightbox2/dist/css/lightbox.css";
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
