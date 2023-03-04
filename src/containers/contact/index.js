import { Submit_Button } from "@/components/buttons";
import Head from "next/head";
import Script from "next/script";
export function Contact_Section() {
  return (
    <>
     {/* <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        </Head> */}
      <div className="approach-bg h-96 order-1 z-0" style={{ height: "65rem" }}>
        <div className="w-full flex items-center justify-center ">
          <div className="absolute top-36 w-full approach-bg  rounded py-12 lg:px-28 px-8">
            <p className="md:text-lg md:mb-10 text-md uppercase font-bold leading-7 text-center text-red-500">
              get in touch
            </p>

            <p className="md:text-7xl text-5xl font-bold tracking-wide text-center text-black">
              Contact Us
            </p>
            <p className="md:text-md mt-10 text-md  font-semibold tracking-wide text-center text-black ">
              {" "}
              Send us a message to talk with an expert.
            </p>

            <div className="row mt-10">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <input
                  className="form-control inp-field  sm:mt-10   md:mt-10 lg:mt-10"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <input
                  className="form-control inp-field lg:mt-10 md:mt-8 sm:md-6 "
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <input
                  className="form-control inp-field lg:mt-2 md:mt-8 sm:md-6"
                  type="email"
                  placeholder="E-mail Address"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12">
                <input
                  className="form-control inp-field lg:mt-2 md:mt-8 sm:md-6"
                  type="number"
                  placeholder="Phone"
                />
              </div>

              <div className="col-md-12 col-lg-12 col-sm-12">
                <textarea
                  className="form-control inp-text"
                  rows={8}
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Submit_Button title="submit message" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
    </>
  );
}
