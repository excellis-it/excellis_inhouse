import React from "react";
import { useEffect, useState, useRef } from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import * as $ from "jquery";
// import "slick-carousel";

const IndustriesWeCovered = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  var settingnav = {
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="industries_slider_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pl-0 pr-0">
              <div className="section_typing">
                <Typed strings={["Industries We Serve"]} typeSpeed={150} />
              </div>

              <div className="indus_slider_wrapper">
                <Slider
                  className="slider-for"
                  asNavFor={nav2}
                  ref={slider1}
                  fade={true}
                  dots={false}
                >
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/tour-travel.jpg?alt=media&token=7229d626-9f21-49d1-afe5-9d434b0070d9"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/banking-finance.jpg?alt=media&token=db5cf889-0cfb-48d3-97db-c86c19f26c7c"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/real-estate.jpg?alt=media&token=e9cd17bf-f496-4f5d-ae16-0f15c98234e5"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/retail.jpg?alt=media&token=586a576f-60e4-4eff-9923-9eadb46075c0"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/manufacture.jpg?alt=media&token=6dee8358-7596-48e5-81cd-8297a43e9dd8"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/energy.jpg?alt=media&token=87494ec9-f791-4930-8133-3ad20587b5f6"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/media.jpg?alt=media&token=424d33d5-3f83-4b51-87c0-6562a589daf4"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/telecom.jpg?alt=media&token=c561a531-7bcf-42f0-b20b-0509dae85247"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/food-resturent.jpg?alt=media&token=e53e21d8-2197-4b05-9953-b7c471e5fd07"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/agriculture.jpg?alt=media&token=1cb507fe-7071-4a21-a77e-1e56e7ba9dc8"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/sports.jpg?alt=media&token=565ba513-bb2d-40d0-98fb-4a219e89dfcd"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/logistic.jpg?alt=media&token=2c979c9e-8e5b-4e52-95a9-80d3546ac749"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/education.jpg?alt=media&token=033d4eed-6066-4b21-874e-9d1eef44d549"
                      className="img-fluid"
                    />
                  </div>
                  <div className="industries_bg">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ecommerce.jpg?alt=media&token=b396e262-f2a5-498c-9c7f-24793187d9c4"
                      className="img-fluid"
                    />
                  </div>
                </Slider>
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={6}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  className="slider-nav"
                  arrows={false}
                  autoplay
                  autoplaySpeed={5000}
                  speed={1000}
                  dots={false}
                  {...settingnav}
                >
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Travel & Tourism</h4>
                      <p>
                        We provide profit-driven IT solutions for hoteliers,
                        travel agents/agencies, travel partners, hospitality
                        providers, as well as airlines.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Banking & Finance</h4>
                      <p>
                        We combine top notch technological developments with
                        applications to help businesses grow as well as adapt to
                        this new digital business age.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Real Estate & Property</h4>
                      <p>
                        We help to transform Real Estate Industry with state of
                        the art technology solutions which streamline real
                        estate process and build a smarter collaboration
                        technique between customers, agents, real estate
                        companies as well as brokers.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Retail</h4>
                      <p>
                        We provide customized outcomes which are tailored for
                        our customer based on a profound understanding of their
                        needs and wants.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Manufacturing</h4>
                      <p>
                        We provide wide range of Manufacturing IT Services that
                        combat your production challenges while empowering your
                        business to inspire innovation.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Energy</h4>
                      <p>
                        {" "}
                        We are a leading Hybrid IT solutions provider to power
                        your business systems.Media and Entertainment – We
                        design content-driven engaging, ready to publish, and
                        engaging solutions allow our clients to convert their
                        traffic into customers
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Media & Enrtainment</h4>
                      <p>
                        Excellis IT provides reliability at scale for content
                        companies, build customer 360 platforms to offer
                        personalized services, implement media supply chains in
                        the cloud for agility and flexibility, and streamline
                        media operations.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Telecom</h4>
                      <p>
                        We help you with the most innovative and efficient
                        enterprise and business solutions that streamline
                        business processes and minimize challenges in
                        telecommunication market.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Food & Restaurant</h4>
                      <p>
                        Food and Beverages are not only a great part of our
                        lives but they are a huge part of online business as
                        well. For this mushrooming business, we provide the most
                        innovative and impressive web and mobile development
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        We are a versatile agriculture software development
                        company with a wide range of tailored agriculture
                        software for farmers who seek growth along with maximum
                        ROI.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Sports & Gaming</h4>
                      <p>
                        Sports and gaming is already a multibillion-dollar
                        market and we are here to channelize that revenue to
                        your side by helping you develop sports and gaming
                        websites and apps.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Logistics</h4>
                      <p>
                        Our logistics software and application development
                        solutions provide advanced automation, analytical, and
                        management solutions that make swarming and fast-paced
                        business of logistic a smart and growing business.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Education </h4>
                      <p>
                        We make education interactive as well as simple with the
                        power of technology and help of user friendly website
                        and apps.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>E-commerce </h4>
                      <p>
                        We help you grow your business and reach a wider
                        audience with E-commerce website and app development.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndustriesWeCovered;
