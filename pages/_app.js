import React, { useState, useEffect, useRef } from "react";
import "../css/style.css";
import "../css/index.css";
import "../css/about.css";
import "../css/itservices.css";
import "../css/navigation.css";
import "../css/services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  <Head>
    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
      integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/js%2Fnextparticle.min.js?alt=media&token=4128d869-bbfb-422e-b648-7764e7ddca76"
      type="text/javascript"
    />
  </Head>;

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
