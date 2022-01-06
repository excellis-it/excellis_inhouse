import React from 'react';
import Typed from 'react-typed';
import anime from 'animejs/lib/anime.es.js';

const Innerbanner = () => {
    const wave1 =
    "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z",
  wave2 =
    "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
  wave3 =
    "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
  wave4 =
    "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";
    anime({
    targets: ".wave-top > path",
    easing: "linear",
    duration: 15000,
    loop: true,
    d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 }
    ]
    });
    return(
        <div>           
            <section class="new_inner_banner"> 
                <svg class="wave-top" width="100" viewBox="500 50 100 200">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z" fill="#000" />
                </svg>
                <div class="new_inner_banner_title text-center">
                    <h2><span class="reveal-text">Who</span> <span class="reveal-text"> We Are</span></h2>
                </div> 
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </section>

            <section class="banner_desc_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="inner_banner_desc">
                            <p class="sentence"><Typed
                                strings={["<b>EXCELLIS IT</b> is one of the pioneers providing <b>valued</b> services which are capable of meeting industrial standards for various ventures. It is the perseverance and eagerness of our Mandarins which has made us one of the humongous names in <b>IT industry</b>."
                            ]}
                                typeSpeed={30}                             
                            /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Innerbanner;