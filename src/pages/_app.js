import '@/styles/globals.css'
import '@/styles/custom.css'
import 'animate.css';
import Head from 'next/head';
import Script from 'next/script';
// import 'bootstrap/dist/css/bootstrap.css'
// import { useEffect } from 'react'


export default function App({ Component, pageProps }) {

  return<>

   <Component {...pageProps} />
   </>
}
