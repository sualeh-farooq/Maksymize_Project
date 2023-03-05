import NavBar from "@/components/navbar";
import Hero from "@/containers/hero";
import Stats from "@/containers/stats";
import Solar from "@/containers/solar";
import { Approach } from "@/containers/approach";
import Leads from "@/containers/leads";
import Footer from "@/components/footer";
import { Services } from "@/containers/services";
import { Results } from "@/containers/result";
import { Boost } from "@/containers/boost";
import { BlackBook } from "@/containers/blackbook";
import { Clients } from "@/containers/clients/home";
export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stats
        className="underline"
        stat_one_title="187+"
        stat_one_desc="clients"
        stat_two_title="1M+"
        stat_two_desc="leads generated"
        stat_three_title="100K+"
        stat_three_desc="appointments set"
        stat_four_title="252+"
        stat_four_desc="mgws sold"
      />
      <Solar />
      <Leads />
      <BlackBook />
      <Approach  />
      <Services />
      <Results />
      <Boost />
      <Clients />
      <Footer />
    </>
  );
}

