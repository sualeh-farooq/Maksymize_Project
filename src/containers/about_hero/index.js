
import Image from "next/image";
import {Result_Button } from "@/components/buttons";
import About_Cover from '../../../public/assets/about_cover.jpg'
import FounderImg from '../../../public/assets/profile.png'
import Together from '../../../public/assets/together.png'
export default function AboutHero() {
  return (
    <>
      <div className="relative z-0 mt-20 isolate overflow-hidden bg-indigo-500">
        <Image
          src={About_Cover}
          width={100}
          height={100}
          alt="banner"
          className=" flying-img absolute bg-zinc-900 inset-0 blur-0 -z-10 h-full w-full object-cover"
        />

        <div className="px-6 flex ban-pan lg:px-8  bg-black bg-opacity-70">
          
        
            <div className="about-con py-20 ">
              <div className="hero-con text-left  pb-8	 flex flex-col justify-around   md:pt-16">
              <h4 className=" uppercase text-md text-red-600 pb-6 font-semibold sm:text-md lg:text-md md:text-md">
                  we are
                </h4>
                <h1 className=" text-4xl uppercase font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl">
                  {/* We <span className="text-red-500"> Maksy</span>mize your solar sales */}
                  Maksymize solar
                </h1>
                <p className="mt-6 text-lg tracking-widest	 font-semibold leading-8 text-white">
                YOUR GO TO SOLAR MARKETING PARTNER


                </p>
                
              </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}


export function AboutUs(){
    return <>
       <div className="px-6 flex ban-pan lg:px-6  approach-bg pb-10 ">
          
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-"></div> */}
          <div className="about_con">
          <div className="text-left max-w-lg	 flex flex-col justify-around   md:pt-10">
            
              <h1 className=" uppercase my-8  tracking-widest text-4xl font-semibold text-red-500 sm:text-4xl lg:text-3xl md:text-4xl">
                About Us
              </h1>
              {/* <span className="bg-black w-12 -mt-14 h-1"> </span> */}
              {/* <hr className="bg-gray-900" /> */}
              <p className=" text-md text-black leading-8 ">
              We take great pride in being different in the marketplace and delivering to our clients way more than what they pay for because we believe that that’s the recipe for long term success.              
            
            <br/>
              <br />
              We can truly say that we have cracked the code when it comes to growing a solar business using paid advertising for lead generation and appointment setting and all of our testimonials displayed throughout this site solidify that statement.
            <br/>
            <br/>
            Nothing makes us happier than knowing our clients are consistently closing sales and completely transforming the way they do business because of our team efforts.
            <br />
            <br />
            The system we have worked so long and hard to figure out has allowed us to provide our clients with a piece of mind that every single marketing dollar has its use and nothing goes to waste.
            <br />
            <br />
            With over $4M spent specifically in solar lead generation we’d have to be fools not to see patterns hence why we’ve been able to build something that removes all the question marks out of the equation and deliver results consistently and with extreme predictability.
            <br />
            <br />
            Yet so many Solar business owners don’t realise the potential to multiply their revenue simply by investing in a better online strategy. That’s why we’ve made it our mission to boost as many Solar businesses as we can.
            </p>
        <p className="mt-4 sm:mb-10" >
            <Result_Button title="I want to boost my sales!" />
        </p>
            
            </div>
            <div className="text-left max-w-lg 	 flex flex-col justify-around sm:mt-10  md:pt-16 lg:mb-72 ">
             
             <Image src={Together} />


            </div>
           

            
        </div>
      </div>
    </>
}

export function Founder(){
    return <>
       <div className="px-6 flex ban-pan lg:px-6  approach-bg pb-10 ">
          
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-"></div> */}
          <div className="founder_con">
          <div className="text-left max-w-md  px-6	 flex flex-col justify-around   md:pt-16 lg:mb-72 ">
             <span className="founder-img-span    relative">
             <Image width={300}  src={FounderImg}  />
             </span>

            </div>
          <div className="text-left flex-1 max-w-3xl  flex flex-col justify-around   md:pt-10">
            
              <h1 className=" uppercase   tracking-widest text-4xl font-semibold text-black sm:text-4xl lg:text-5xl md:text-4xl">
                the founder
              </h1>
              {/* <span className="bg-black w-12 -mt-14 h-1"> </span> */}
              {/* <hr className="bg-gray-900" /> */}
              <h1 className=" uppercase   tracking-widest font-semibold mt-10 text-red-500 sm:text-3xl lg:text-xl md:text-3xl">
                ivan pashov
              </h1> <br />
              <p className=" text-md text-black leading-8 ">

              Ivan Pashov’s considered one of the most audacious entrepreneurs in the industry and he is highly sought after for his marketing and sales experience in the solar space.            
            <br/>
              <br />
              He is only 25 and is already an advisor/consultant to 85+ solar businesses from all over the US and the UK ranging from startups to multi-million dollar giants.            <br/>
            <br/>
            Not only does Ivan and his company Maksymize Solar help other ambitious Solar entrepreneurs to scale and grow their businesses but one of his main goals is to leave a footprint within the solar lead generation space by being among the most reputable and high performing digital agencies of the 21st century.            <br />
            <br />
            His business and marketing advice can easily run up to $1,000+ an hour and he has a huge track record to show you for those prices.            <br />
            <br />
            Things weren’t always like this for the young entrepreneur though.
            <br />
            <br />
            He comes from a dark past that he isn’t afraid to talk about.
            <br />
            <br />
            His early teens he was in and out of homes. He and his family moved to the UK when he was 15. Not being able to speak a word of english he navigated through one of the toughest phases in his life.
            <br />
            <br />He ended up dropping out of high school when he was 17 years old. 

<br />
<br />Shortly after, he started his very first real entrepreneurial venture which he failed at. 

<br />
<br />In the last 7 years, Ivan has founded a dozen companies for himself including a solar sales company which he founded 18 months ago. He’s worked with tens of other Solar business owners across the United States to help them implement proper lead generation and sales systems in place and be able to sell from a distance and rapidly grow their teams and revenue
<br />
<br />
Ivan cares about every single one of his clients no matter the size of the business and he truly wants to provide the best possible service and deliver results that would not only meet the client’s expectations but be able to surpass them. 

</p>
        <p className="mt-4 sm:mb-10" >
            <Result_Button title="Schedule your solar strategy call" />
        </p>
            
            </div>
           
           

            
        </div>
      </div>
    </>
}
