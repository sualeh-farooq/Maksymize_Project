import Service_Funnel from "../../../public/assets/ser_funnel.png";
import Service_Chart from "../../../public/assets/ser_chart.png";
import Service_Boost from "../../../public/assets/ser_boost.png";
import Image from "next/image";

export function Services() {
    return (
      <div className="bg-black py-10">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Services
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <Image className="mx-auto" src={Service_Funnel} />
            </li>
            <li>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="text-2xl font-semibold text-white	">
                    Building the campaign
                  </p>
                </li>
              </ul>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="px-10 text-white font-thin leading-8">
                    Is your Solar business here to stay? In this day and age
                    nothing says “We’re a legit company and we take pride in
                    everything that we do!” more than a well built Company Brand.
                    <br />
                    The moment people feel like they can relate to what the
                    company stands for is the moment they will be willing to pay
                    for an install more than they otherwise would with any other
                    company!
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <Image className="mx-auto" src={Service_Chart} />
            </li>
            <li>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="text-2xl font-semibold text-white	">
                    Fresh & Exclusive Lead Generation​​
                  </p>
                </li>
              </ul>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="px-10 text-white font-thin leading-8">
                    We do NOT sell leads! We’re not in the business of selling or
                    reselling leads.
                    <br />
                    We build you your very own lead generation funnel that spits
                    out leads like crazy EVERY. SINGLE. DAY! More importantly, we
                    help you turn those leads into closed deals.{" "}
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <Image className="mx-auto" src={Service_Boost} />
            </li>
            <li>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="text-2xl font-semibold text-white	">
                    Solar Sales Training​
                  </p>
                </li>
              </ul>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <p className="px-10 text-white font-thin leading-8">
                    If you’ve been canvassing to sign solar deals up until now and
                    you want to make the switch to selling from a distance but you
                    don’t really have a legitimate system to follow…
                    <br />
                    Not to worry! We have all the resources you possibly need to
                    turn those leads into closed deals without going through a
                    bunch of trial and error!
                  </p>{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  