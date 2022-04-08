import React from "react";
import Head from "next/head";
import logoicon from "../src/image/logo_icon.png";
import logoicon2 from "../src/image/logo_icon2.png";

function LogoCanvas() {
  return (
    <div>
      <div className="icon_logo_animated for-desktop">
        <img
          id="logo1"
          class="next-particle"
          data-init-position="random"
          data-init-direction="left"
          data-fade-position="left"
          data-fade-direction="left"
          data-particle-gap="1"
          data-width="700"
          data-height="400"
          data-max-width="900"
          data-max-height="500"
          data-mouse-force="80"
          data-gravity="0.07"
          data-noise="10"
          src={logoicon}
          data-sca
        />
      </div>
      <div
        className="icon_logo_animated for-mobile"
        style={{ display: "none" }}
      >
        <img
          id="logo1"
          class="next-particle"
          data-init-position="random"
          data-init-direction="left"
          data-fade-position="left"
          data-fade-direction="left"
          data-particle-gap="1"
          data-width="250"
          data-height="100"
          data-max-width="250"
          data-max-height="100"
          data-mouse-force="10"
          data-gravity="0.05"
          data-noise="10"
          src={logoicon2}
          data-sca
        />
      </div>
      <Head>
        <script
          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/js%2Fnextparticle.min.js?alt=media&token=4128d869-bbfb-422e-b648-7764e7ddca76"
          type="text/javascript"
        />
      </Head>
    </div>
  );
}

export default LogoCanvas;
