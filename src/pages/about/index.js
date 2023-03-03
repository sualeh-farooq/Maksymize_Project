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

import { Services } from "@/components/lead_sec";

export default function AboutPage() {
    return <>
    <NavBar />
   <AboutHero />
   <AboutUs />
<Solar /> 
   <Founder />
    {/* <Hero /> */}
    {/* <Stats className='underline' stat_one_title="187+" stat_one_desc="clients" stat_two_title="1M+" stat_two_desc="leads generated" stat_three_title="100K+" stat_three_desc="appointments set" stat_four_title="252+" stat_four_desc="mgws sold" /> */}
{/* <Leads /> */}
{/* <BlackBook /> */}
{/* <Cloud /> */}
{/* <Services /> */}
{/* <Results /> */}
{/* <Boost /> */}
<Footer />

    </>
}