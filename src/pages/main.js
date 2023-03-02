import Greet from "./Home";
import Hero from "@/components/hero";
import Stats from "@/components/stats";


export default function Main() {
    return <>
    <Greet  />
    <Hero />
    <Stats stat_one_title="187+" stat_one_desc="clients" stat_two_title="1M+" stat_two_desc="leads generated" stat_three_title="100K+" stat_three_desc="appointments set" stat_four_title="252+" stat_four_desc="mgws sold" />
    </>
}