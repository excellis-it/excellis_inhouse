import React from "react";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client1 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient1.jpg?alt=media&token=b9bc7aa2-29b6-48eb-94ef-842493f92fed";
const client2 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient2.jpg?alt=media&token=c9b685ed-6fee-45c4-90c0-c7f4dcbf0725";
const client3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient3.jpg?alt=media&token=a1d60065-a617-432e-80f3-1c32f9606cfb";
const client4 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient4.jpg?alt=media&token=f43626ae-3a1e-4cfd-8624-6f11f925b9e3";
const client5 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient5.jpg?alt=media&token=42cf4061-500a-4c1f-95ae-0985589898f2";
const client6 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient6.jpg?alt=media&token=108ba7f0-a3e4-42d9-89b4-e8360fe50cfb";
const client7 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient7.jpg?alt=media&token=20e52744-0b35-4426-9973-c4afe7426967";
const client8 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient8.jpg?alt=media&token=38c47c8b-8c77-4feb-a1a9-d16585527e52";
const client9 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient9.jpg?alt=media&token=8476acd8-eeb2-40d3-bcd4-d78aea646fdb";
const client10 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient10.jpg?alt=media&token=66186813-b268-49a9-9a24-1920851bee68";
const client11 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient11.jpg?alt=media&token=fba28597-59d6-4911-9bd7-f8f2a6cb0892";
const client12 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient12.jpg?alt=media&token=e06ae285-084b-4fea-86ef-cd4f8891e5e5";
const client13 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient13.jpg?alt=media&token=ee5908b4-ea9b-4840-8d55-e6e34da1ae6d";

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: -3,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div>
      <section className="our_clients_sec">
        <div className="section_typing">
          <Typed strings={["With Love, from our Clients"]} typeSpeed={150} />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="our_client_text_area">
                <h4>Clients who benefited from our Experience</h4>
                <p>
                  Being a well-known IT company in India, we cannot deny the
                  fact that whatever we have achieved today is all because of
                  the love, appreciation, and constant iteration brought in by
                  our cherished extended family- our clients.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="client_logo_slider_wrapper">
                <div className="slider_row mb-3">
                  <Slider {...settings}>
                    <div className="client_logo_wrapper">
                      <img src={client1} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client2} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client3} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client4} className="img-fluid" />
                    </div>
                  </Slider>
                </div>
                <div className="slider_row mb-3">
                  <Slider {...settings2}>
                    <div className="client_logo_wrapper">
                      <img src={client5} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client6} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client7} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client8} className="img-fluid" />
                    </div>
                  </Slider>
                </div>
                <div className="slider_row">
                  <Slider {...settings3}>
                    <div className="client_logo_wrapper">
                      <img src={client9} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client10} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client11} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client12} className="img-fluid" />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client13} className="img-fluid" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurClients;
