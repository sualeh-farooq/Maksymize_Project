import NavBar from "@/components/navbar";
import { Contact_Section } from "@/containers/contact";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer";
export default function ContactPage() {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <NavBar />
      <Contact_Section />
      <Footer />
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
    </>
  );
}
