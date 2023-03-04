import NavBar from "@/components/navbar";
import Solar from "@/containers/solar";
import Footer from "@/components/footer";
import AboutHero from "@/containers/about_hero";
import { AboutUs, Founder } from "@/containers/about_hero";
export default function AboutPage() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <AboutUs />
      <Solar />
      <Founder />
      <Footer />
    </>
  );
}
