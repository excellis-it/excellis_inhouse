import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Portfolio = ({}) => {
  const title = "Portfolio";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  const atpata =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FAtpata.jpg?alt=media&token=dfded930-0331-4b39-8c10-5bbba96de316";
  const bill_specialist =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FBill_Specialists.jpg?alt=media&token=070aa59d-943e-403a-9586-c139c67bcd4f";
  const country_land_aus =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FCountry_Land_Australia.jpg?alt=media&token=95539cf5-5547-4fe5-8405-c4fd5b8266b5";
  const excellis_reality =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FExcellis_Realty.jpg?alt=media&token=e2ff9a2b-a804-4395-a69c-f778b97f5111";
  const fm_ostello =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FFM_Ostello.jpg?alt=media&token=9dec33d6-cd7d-4c1e-94b1-04e16c8b793d";
  const lederfield =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fladerfield.jpg?alt=media&token=9a28cd72-94c6-4788-bebc-1566da33fb25";
  const fmfavicon =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflight_mantra_fav_icon.png?alt=media&token=43b9dd5b-2c86-4d81-90b0-6384939e36d8";
  const fmapp1 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_1.png?alt=media&token=59faab91-2d78-4cab-9a28-1b3ada3b32ce";
  const fmapp2 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_2.png?alt=media&token=2f95cb39-26d0-4fe1-8635-a3a451d16427";
  const fmapp3 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_3.png?alt=media&token=3eb1eb3f-332d-4715-9bce-e24077aa25d8";
  const fmapp4 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_4.png?alt=media&token=864c2485-a8a4-4722-b4db-ea42091ff930";
  const fmapp5 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_5.png?alt=media&token=2566e341-b2ed-4ae0-9a9c-d73876c51478";
  const fmapp6 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_6.png?alt=media&token=fe465a46-08a1-4293-b04d-e5163c9fbc0c";
  const fmapp7 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra%2Fflightmantra_app_7.png?alt=media&token=e915840c-d5ff-4b03-93f8-36ae7a405768";
  const switcherfavicon =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_fav_icon.png?alt=media&token=80870a2d-0536-4a9c-80b4-6ac2d3e5e918";
  const switcherapp1 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_1.png?alt=media&token=607711b0-7a00-4d99-a20b-ca14f3c78510";
  const switcherapp2 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_2.png?alt=media&token=b7d1f204-bda6-4795-aec0-8c577866caea";
  const switcherapp3 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_3.png?alt=media&token=6c289d61-54cd-4159-8107-62299c297b2a";
  const switcherapp4 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_4.png?alt=media&token=9911f85e-e58b-47f4-8821-a78be7cf8079";
  const switcherapp5 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_5.png?alt=media&token=d1253564-f6c5-49f9-b6e5-3b114c42a2f6";
  const switcherapp6 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fswithcer%2Fswitcher_app_6.png?alt=media&token=6552ea66-5de6-499c-9395-2ac925c1ccfa";

  return (
    <div>
      <Helmet>
        <title>
          Excellis IT: Digital Marketing, Web and Mobile App Development
          Portfolio
        </title>
        <meta
          name="description"
          content="Find out some of our Digital Marketing, Web and Mobile App Development works which we have delivered to our clients. We always meet our clients’ expectations and ensure that they are getting the best service"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.excellisit.com/Portfolio" />
      </Helmet>
      <Navbar activeStatus="partner" />
      <InnerBanner title={title} description={description} />
      <section className="portfolio_sec" id="">
        <Element name="web_port" className="element">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="portfolio_inner pr-170 pl-2 pl-sm-5">
                  <div className="single_portfolio">
                    <div className="row align-items-center">
                      <div className="col-md-4 pr-0">
                        <div className="portfolio_desc">
                          <h6>DESIGNING & DEVELOPMENT</h6>
                          <h4>Atpata</h4>
                          <p>
                            We knew how to combine the design and technological
                            aspect that delivers on the promise made to the
                            client. We used the best of the technological stack,
                            kept the right formulation for content and visual
                            depiction and produced a website that is fast to
                            load, provide easy information and have the users
                            find all they are looking for while being fully
                            engaged.
                          </p>
                          <a href="#" className="visit_portfolio">
                            Visit Link
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div
                          className="portfolio_imgwrapper"
                          data-aos="fade-up"
                        >
                          <div className="overflow_hidden">
                            <div className="portfolio_img_box">
                              <div className="show_port_folio_img">
                                <img src={atpata} className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_portfolio">
                    <div className="row align-items-center">
                      <div className="col-md-4 pr-0">
                        <div className="portfolio_desc">
                          <h6>DESIGNING & DEVELOPMENT</h6>
                          <h4>Country Land Australia</h4>
                          <p>
                            We knew how to combine the design and technological
                            aspect that delivers on the promise made to the
                            client. We used the best of the technological stack,
                            kept the right formulation for content and visual
                            depiction and produced a website that is fast to
                            load, provide easy information and have the users
                            find all they are looking for while being fully
                            engaged.
                          </p>
                          <a href="#" className="visit_portfolio">
                            Visit Link
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div
                          className="portfolio_imgwrapper"
                          data-aos="fade-up"
                        >
                          <div className="overflow_hidden">
                            <div className="portfolio_img_box">
                              <div className="show_port_folio_img">
                                <img
                                  src={country_land_aus}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_portfolio">
                    <div className="row align-items-center">
                      <div className="col-md-4 pr-0">
                        <div className="portfolio_desc">
                          <h6>DESIGNING & DEVELOPMENT</h6>
                          <h4>FMOstello</h4>
                          <p>
                            We knew how to combine the design and technological
                            aspect that delivers on the promise made to the
                            client. We used the best of the technological stack,
                            kept the right formulation for content and visual
                            depiction and produced a website that is fast to
                            load, provide easy information and have the users
                            find all they are looking for while being fully
                            engaged.
                          </p>
                          <a href="#" className="visit_portfolio">
                            Visit Link
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div
                          className="portfolio_imgwrapper"
                          data-aos="fade-up"
                        >
                          <div className="overflow_hidden">
                            <div className="portfolio_img_box">
                              <div className="show_port_folio_img">
                                <img src={fm_ostello} className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single_portfolio">
                    <div className="row align-items-center">
                      <div className="col-md-4 pr-0">
                        <div className="portfolio_desc">
                          <h6>DESIGNING & DEVELOPMENT</h6>
                          <h4>Excellis Reality</h4>
                          <p>
                            We knew how to combine the design and technological
                            aspect that delivers on the promise made to the
                            client. We used the best of the technological stack,
                            kept the right formulation for content and visual
                            depiction and produced a website that is fast to
                            load, provide easy information and have the users
                            find all they are looking for while being fully
                            engaged.
                          </p>
                          <a href="#" className="visit_portfolio">
                            Visit Link
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div
                          className="portfolio_imgwrapper"
                          data-aos="fade-up"
                        >
                          <div className="overflow_hidden">
                            <div className="portfolio_img_box">
                              <div className="show_port_folio_img">
                                <img
                                  src={excellis_reality}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_portfolio">
                    <div className="row align-items-center">
                      <div className="col-md-4 pr-0">
                        <div className="portfolio_desc">
                          <h6>DESIGNING & DEVELOPMENT</h6>
                          <h4>Laderfield</h4>
                          <p>
                            We knew how to combine the design and technological
                            aspect that delivers on the promise made to the
                            client. We used the best of the technological stack,
                            kept the right formulation for content and visual
                            depiction and produced a website that is fast to
                            load, provide easy information and have the users
                            find all they are looking for while being fully
                            engaged.
                          </p>
                          <a href="#" className="visit_portfolio">
                            Visit Link
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div
                          className="portfolio_imgwrapper"
                          data-aos="fade-up"
                        >
                          <div className="overflow_hidden">
                            <div className="portfolio_img_box">
                              <div className="show_port_folio_img">
                                <img src={lederfield} className="img-fluid" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="mobile_port" className="element">
          <div className="mobile_app_portfolio">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="app_slider">
                    <Swiper
                      modules={[Navigation]}
                      grabCursor="true"
                      centeredSlides="true"
                      spaceBetween={0}
                      slidesPerView={4}
                      navigation
                      loop="true"
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      breakpoints={{
                        700: {
                          spaceBetween: 0,
                          slidesPerView: 4,
                        },
                        500: {
                          spaceBetween: 100,
                          slidesPerView: 2,
                        },
                        411: {
                          spaceBetween: 100,
                          slidesPerView: 2,
                        },
                        300: {
                          spaceBetween: 0,
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img src={fmapp1} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp2} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp3} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp4} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp5} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp6} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={fmapp7} />
                      </SwiperSlide>
                    </Swiper>
                    <div className="app_details text-center">
                      <div className="app_favicon">
                        <img src={fmfavicon} alt="" />
                      </div>
                      <h4>Flight Mantra</h4>
                      <p>
                        The LuxLighting app allows you to control your LED
                        lights from your phone. You can create custom themes or
                        have the lights sync with the music playing around you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="app_slider">
                    <Swiper
                      modules={[Navigation]}
                      grabCursor="true"
                      centeredSlides="true"
                      spaceBetween={0}
                      slidesPerView={4}
                      navigation
                      loop="true"
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                      }}
                      breakpoints={{
                        700: {
                          spaceBetween: 0,
                          slidesPerView: 4,
                        },
                        500: {
                          spaceBetween: 100,
                          slidesPerView: 2,
                        },
                        411: {
                          spaceBetween: 100,
                          slidesPerView: 2,
                        },
                        300: {
                          spaceBetween: 0,
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <img src={switcherapp1} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={switcherapp2} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={switcherapp3} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={switcherapp4} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={switcherapp5} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={switcherapp6} />
                      </SwiperSlide>
                    </Swiper>
                    <div className="app_details text-center">
                      <div className="app_favicon">
                        <img src={switcherfavicon} alt="" />
                      </div>
                      <h4>Switcher</h4>
                      <p>
                        The LuxLighting app allows you to control your LED
                        lights from your phone. You can create custom themes or
                        have the lights sync with the music playing around you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </section>
      <div class="sticky_portfolio_menu">
        <ul className="d-flex align-items-center">
          <li>
            <Link
              activeClass="active"
              className="web_port"
              to="web_port"
              spy={true}
              smooth={true}
              duration={500}
            >
              Web Design
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="mobile_port"
              to="mobile_port"
              spy={true}
              smooth={true}
              duration={500}
            >
              Mobile App
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="logo_port"
              to="logo_port"
              spy={true}
              smooth={true}
              duration={500}
            >
              Logo
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
