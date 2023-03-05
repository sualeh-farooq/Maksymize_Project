import "@/styles/globals.css";
import "@/styles/custom.css";
import Head from "next/head";
import Script from "next/script";
// import "lightbox2/dist/css/lightbox.min.css";
// import "lightbox2/dist/js/lightbox.js";
import { useEffect } from "react";
// import 'lightbox2/dist/css/lightbox.css'

export default function App({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <link href="/lightbox2/dist/css/lightbox.css" ></link>
    </Head>
      
      <Component {...pageProps} />
      <Script src="/lightbox2/dist/js/lightbox.js" />
    </>
  );
}
