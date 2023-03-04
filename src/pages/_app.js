import "@/styles/globals.css";
import "@/styles/custom.css";
import Head from "next/head";
import Script from "next/script";
import "lightbox2/dist/css/lightbox.min.css";
import "lightbox2/dist/js/lightbox.js";
import { useEffect } from "react";
import 'lightbox2/dist/css/lightbox.css'

export default function App({ Component, pageProps }) {
  useEffect(function mount(){
    function onScroll() {
      console.log('Scroll')
    }
    window.addEventListener('scroll',onScroll)
    return function unMount(){
      window.removeEventListener('scroll',onScroll)
    }
  })
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
