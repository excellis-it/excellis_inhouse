import React from "react";
import "../ItServices/itservices.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import TestimonialSection from "../TestimonialSection";
import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import $ from "jquery";
import {
  FaUserLock,
  FaRegEye,
  FaFilter,
  FaHourglassEnd,
  FaAward,
  FaBullhorn,
} from "react-icons/fa";
import TechnologyWeUse from "../TechnologyWeUse";
const cta_bg =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcta_img.jpg?alt=media&token=80dff7e9-4f79-4258-ae00-734d63a84110";

const cta_bg2 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img2.jpg?alt=media&token=1fd153c0-9a1f-484a-9c12-e881ddd9d198";
const cta_bg3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img3.jpg?alt=media&token=ad3e770b-a126-4e64-b1c2-ab61338fcc0e";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SearchEngineOptimization = () => {
  const title = "Search Engine Optimization";
  const description =
    "“Best SEO service provider is here to help you with a complete digital transformation.”";

  var maxData = 3;
  let i = 2;

  $(document).ready(function () {
    var radius = 200;
    var fields = $(".itemDot");
    var container = $(".dotCircle");
    var width = container.width();
    radius = width / 2.5;

    var height = container.height();
    var angle = 0,
      step = (2 * Math.PI) / fields.length;
    fields.each(function () {
      var x = Math.round(
        width / 2 + radius * Math.cos(angle) - $(this).width() / 2
      );
      var y = Math.round(
        height / 2 + radius * Math.sin(angle) - $(this).height() / 2
      );
      if (window.console) {
        console.log($(this).text(), x, y);
      }

      $(this).css({
        left: x + "px",
        top: y + "px",
      });
      angle += step;
    });

    $(".itemDot").click(function () {
      var dataTab = $(this).data("tab");
      $(".itemDot").removeClass("active");
      $(this).addClass("active");
      $(".CirItem").removeClass("active");
      $(".CirItem" + dataTab).addClass("active");
      i = dataTab;

      $(".dotCircle").css({
        transform: "rotate(" + (360 - (i - 1) * 36) + "deg)",
        transition: "2s",
      });
      $(".itemDot").css({
        transform: "rotate(" + (i - 1) * 36 + "deg)",
        transition: "1s",
      });
    });

    setInterval(function () {
      var dataTab = $(".itemDot.active").data("tab");
      if (dataTab > maxData || i > maxData) {
        dataTab = 1;
        i = 1;
      }
      $(".itemDot").removeClass("active");
      $('[data-tab="' + i + '"]').addClass("active");
      $(".CirItem").removeClass("active");
      $(".CirItem" + i).addClass("active");
      i++;

      $(".dotCircle").css({
        transform: "rotate(" + (360 - (i - 2) * 36) + "deg)",
        transition: "2s",
      });
      $(".itemDot").css({
        transform: "rotate(" + (i - 2) * 36 + "deg)",
        transition: "1s",
      });
    }, 10000000);
  });

  return (
    <div>
      <Helmet>
        <title>
          Best Search Engine Optimization Company and SEO Agency in Kolkata,
          India: Excellis IT
        </title>
        <meta
          name="description"
          content="Excellis IT is a leading SEO Company & agency in Kolkata, India. We offer the best Organic and Local SEO services which helps to get more traffic and organic lead. Contact us +91 861 772 4646"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/search-engine-marketing/"
        />
      </Helmet>
      <Navbar />
      <InnerBanner title={title} description={description} />
      <section class="inner_page_first">
        <div class="s-BannerServices bg_dark">
          <div class="l-ContentColumn container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div
                  class="company_intro"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <h6>Search Engine Optimization</h6>
                  <h1 class="BannerServices__Subheader">
                    Best SEO Service Provider – Excellis IT
                  </h1>
                  <p>
                    Search Engine Optimization is an efficient digital marketing
                    strategy that enhances the online presence of your business.
                    SEO optimizes your website and takes it up on Google
                    rankings so that your website becomes searchable in spite of
                    huge competition. SEO is a sound digital strategy that
                    endeavors to maximize sales along with, minimizing customer
                    acquisition costs.
                  </p>
                  <p>
                    As a leading SEO company in India, Excellis IT offers the
                    best SEO services in Kolkata, India. Our affordable SEO
                    services takes care of the most important aspects of your
                    business. We are known for dealing with technical aspects
                    like increasing visibility, site backlinking, website
                    audits, optimizing content, keyword research, increasing
                    page speed, mobile optimization, and link building. Our SEO
                    experts boost your search rankings and make your website
                    more visible. Excellis IT ensures that your website is among
                    the links on the first page of Google search. We also make
                    sure that it is prominently visible in searches by other
                    search engines.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsearch-engine-optimization.jpg?alt=media&token=515093e5-4ed3-484b-810f-931ea91fc030"
                    alt="Sear engine optimization"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="u-Scanlines"></div>
        </div>
        <div class="l-ContentColumn s-BannerServices__After">
          <div class="row justify-content-center">
            <div class=" col-md-12">
              <div class="u-BigCross"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="all_services_sec pb-0">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="all_services_title">
                <h2>Best SEO Services Provided by Excellis IT</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="all_services_item_sec">
                <Scrollbars style={{ height: "70vh" }} className="" autoHide>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>On-Page SEO Services </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Excellis IT is best in on-page SEO methods. We
                            understand that to make your website more attractive
                            and readable you require content pings along with
                            search engine algorithms. Our experts would help you
                            optimize the content and pictures, would make sure
                            that your site is fast, mobile-friendly, and makes
                            sure that the material is of the best quality as
                            well as provides excellent external links to attract
                            more traffic.{" "}
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Off-Page SEO Services </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Excellis IT knows that off-Page SEO is more than
                            link building and website design. We promote your
                            website through ethical as well as effective methods
                            which would increase organic traffic and help to get
                            the top Google search ranking. Our experts conduct
                            social media marketing along with social bookmarking
                            campaigns which would help you in lead generation,
                            as well as improve the perception of your website.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Technical SEO Services </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our Technical SEO experts, work diligently on
                            improving the technical elements of your website
                            which would help Google bots crawl your website in a
                            better way as a result it would improve your site
                            rankings.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Keywords Research </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Using proper keywords makes your Search Engine
                            Optimization campaign successful as keywords propels
                            your search ranking. Our team of experts uses
                            assorted online tools to research trending keywords
                            that would take your website to the top of the
                            search engine.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Competitive Analysis </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Competitive analysis understands the strengths and
                            weaknesses of your online competitors and uses them
                            as opportunities. Our digital marketing experts
                            conduct a deep analysis of keywords being used by
                            competitors and help you choose the best ones so
                            that you can stay ahead.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Website Audit and Optimization </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            SEO audits and optimization is important to maintain
                            the online rankings of your website. We help you to
                            identify all the imperfections that would lower the
                            rankings of your websites. We also bring together
                            strategies of link building, SEO tagging as well as
                            content optimization to yield online success for
                            your website.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Analytics Research</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Search Engine Optimization services in Kolkata,
                            India not only bring traffic to your website but
                            also incorporate analysis too. Our Google Analytics
                            expertise enables the study of all the essential
                            metrics that would be needed for searches, visitors,
                            and trends. Based on the precise analytics research,
                            we help you create and implement effective digital
                            strategies that would in turn increase traffic and
                            conversions.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Traffic Generation</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our Search Engine Optimization experts have the
                            skill to merge different marketing tools to generate
                            higher traffic for your website which includes
                            social media, PR and branding, mobile SEO,
                            multimedia SEO as well as local and international
                            search optimization.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Content Marketing</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We at Excellis IT, deliver end-to-end services,
                            starting from serving excellent content to
                            optimizing it moving on to marketing it. We have
                            in-house professional content writers who consult
                            with our SEO experts and deliver rich content that
                            would boost your rankings and be engaging for your
                            customers at the same time.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Reporting</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Good Search Engine Optimization practices contain
                            reporting too. Our SEO experts provide interpretable
                            reports to their clients so that they can even know
                            the benefits of the campaign.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta2_section cta_block_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cta2_inner d-block d-sm-flex align-items-center"
                style={{ backgroundImage: `url(${cta_bg})` }}
              >
                <div className="cta2_content_sec text-left">
                  <h4 className="mb-4">
                    Do you want your website to rank no. 1 on Google?
                  </h4>
                  <Link className="light-btn" to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="fact_no why_hire_sec">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 ">
              <div className="big_title">
                <h2 data-aos="fade-down" data-aos-duration="1500">
                  <span>Why Hire </span> SEO Experts from Excellis IT
                </h2>
              </div>
            </div>

            <div className="col-md-12">
              <ul
                class="nav nav-pills mb-3 why_pill_tab"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-why1-tab"
                    data-toggle="pill"
                    href="#pills-why1"
                    role="tab"
                    aria-controls="pills-why1"
                    aria-selected="true"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexperience.png?alt=media&token=9713b80a-d008-4073-bea3-c2c2a1c04ccb"
                      alt=""
                    />
                    Experienced
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why2-tab"
                    data-toggle="pill"
                    href="#pills-why2"
                    role="tab"
                    aria-controls="pills-why2"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2FAssessableResults.png?alt=media&token=6354087b-41da-481c-ac13-e7fa24fdd80a"
                      alt=""
                    />
                    Assessable
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why3-tab"
                    data-toggle="pill"
                    href="#pills-why3"
                    role="tab"
                    aria-controls="pills-why3"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fidea.png?alt=media&token=944eb2a5-fcc5-46fa-bcd2-cf145bc86bd3"
                      alt=""
                    />
                    Strategies
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why4-tab"
                    data-toggle="pill"
                    href="#pills-why4"
                    role="tab"
                    aria-controls="pills-why4"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Freport.png?alt=media&token=98081286-1f75-48af-a528-48cfe6e1bf29"
                      alt=""
                    />
                    Reports
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why5-tab"
                    data-toggle="pill"
                    href="#pills-why5"
                    role="tab"
                    aria-controls="pills-why5"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsave-money.png?alt=media&token=54fd85ab-1b2d-4776-b87a-f1e81f8617f2"
                      alt=""
                    />
                    Affradable
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why6-tab"
                    data-toggle="pill"
                    href="#pills-why6"
                    role="tab"
                    aria-controls="pills-why6"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpert.png?alt=media&token=5c87f4ea-1c49-485b-89dd-feb005a4a6ae"
                      alt=""
                    />
                    Experts
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why7-tab"
                    data-toggle="pill"
                    href="#pills-why7"
                    role="tab"
                    aria-controls="pills-why7"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Ftransparency.png?alt=media&token=efac0773-ae7e-4658-8a38-3b8f38722375"
                      alt=""
                    />
                    Transparency
                  </a>
                </li>
              </ul>
              <div
                class="tab-content why_pill_tab_content"
                id="pills-tabContent"
              >
                <div
                  class="tab-pane fade show active"
                  id="pills-why1"
                  role="tabpanel"
                  aria-labelledby="pills-why1-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Experienced SEO professionals </h4>
                    <p>
                      Being among the best search engine optimization company in
                      Kolkata, India, Excellis IT has a skilled team of SEO
                      experts you can completely rely on.
                    </p>
                  </Animated>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-why2"
                  role="tabpanel"
                  aria-labelledby="pills-why2-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Assessable Results </h4>
                    <p>
                      We are a reputed SEO company in Kolkata, creating SEO
                      campaigns to generate assessable results for your company,
                      and we also inform you about your keyword ranking and ROI.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why3"
                  role="tabpanel"
                  aria-labelledby="pills-why3-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Data-driven Strategies </h4>
                    <p>
                      We are an experienced SEO company, creating strategies
                      that are based on genuine and authentic market
                      demographics data to make sure you get the best results.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why4"
                  role="tabpanel"
                  aria-labelledby="pills-why4-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Reports </h4>
                    <p>
                      We are a trusted SEO company, and we send our clients
                      weekly as well as monthly reports consisting of a detailed
                      description of the SEO activities that we have implemented
                      on their site so that even they can measure the results.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why5"
                  role="tabpanel"
                  aria-labelledby="pills-why5-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Affordable SEO packages </h4>
                    <p>
                      Excellis IT provides the best as well as affordable SEO
                      services in Kolkata, to both small and big businesses who
                      can easily afford our packages and make the best out of
                      them.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why6"
                  role="tabpanel"
                  aria-labelledby="pills-why6-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Experts of the field </h4>
                    <p>
                      We have a highly qualified as well as experienced team who
                      know every aspect of SEO.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why7"
                  role="tabpanel"
                  aria-labelledby="pills-why7-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Transparency </h4>
                    <p>
                      We prefer keeping a long-lasting relation with our clients
                      and that can only be possible with complete transparency
                      as well as honest business practices.
                    </p>
                  </Animated>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-Scanlines"></div>
      </section>

      <section className="expertise_section pl-170">
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-md-12">
              <div class="main_heading white_text">
                <h6 data-aos="fade-down" data-aos-duration="1000">
                  Expertise
                </h6>
                <h2
                  class="h2--WithLine"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Our Expertise
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation]}
                slidesPerView={4}
                spaceBetween={30}
                navigation
                autoplay={{ delay: 3000 }}
                className=""
                breakpoints={{
                  700: {
                    spaceBetween: 30,
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
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Finternational.png?alt=media&token=a0be277d-cbee-40d4-8dca-95fe50a452b9"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>International SEO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        International SEO optimizes your presence on your
                        website on the SERPs when the users place search queries
                        in various languages and countries. Geo-targeting and
                        other tactics to optimize your site locally helps you to
                        target customers all over the world.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fsearch-engine-optimization.png?alt=media&token=f131e9b9-490d-4f96-b575-ab94272b24a3"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Local SEO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        As the best SEO firm in Kolkata, India, Excellis IT with
                        Local SEO optimizes the online presence of your business
                        and drives traffic from the local relevant searches.
                        This helps in gaining sales from local potential
                        customers.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fecommerce.png?alt=media&token=705436e9-00d9-4d12-b3bf-1d195951f314"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>E-commerce SEO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        E-commerce SEO ensures that your product pages are among
                        the top results on the SERPs which in turn helps in
                        bringing you the desired traffic and sales.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Enterprise SEO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT offers a full-scale as well as broad
                        approach to use the power of SEO for enterprise-scale
                        businesses. We help you by creating high-end SEO
                        strategies that improve revenue for your enterprises.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fyoutube.png?alt=media&token=d586f867-cf6f-4b1f-9df3-92c2486fb3c8"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>YouTube SEO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT provides YouTube SEO services that optimize
                        your channel, playlists, metadata, description, and also
                        your video content.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fgoogle-analytics.png?alt=media&token=9f9d60a6-fc56-4e9d-b4ec-f3cf8bae2706"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Google Analytics</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT uses Google Analytics to track how many
                        visitors your site gets over a specific period of time
                        as well as which keywords bring in the best results.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Flink-building.png?alt=media&token=0b946a36-8cbe-43e2-8240-438bf6531586"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>High-Quality Link Building</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT puts in efforts to obtain the best
                        hyperlinks from various other websites to your website.
                        When other websites can easily link back to your
                        website, Google considers your website worth ranking.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fcompetitor.png?alt=media&token=66a294e2-b9b6-4322-823c-0104865b28d7"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Competitor Analysis</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Our experts study the competitive market and track the
                        online activities to decide what would help your site
                        stay ahead of the curve.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fmonitor.png?alt=media&token=dc342cef-0262-4746-bfb7-2942d0d638e6"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Reporting and Analysis</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Our experts provide interpretable reports to their
                        clients so that they can even know the benefits of the
                        campaign.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fsettings-seo.png?alt=media&token=6a76e932-64e4-4d95-9f38-da1c9a04d983"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>SEO Tools and Software</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT uses new-age SEO tools and software to
                        implement best SEO practices to make sure accurate
                        campaigns and strategies are based on the best data
                        collected with the help of such state-of-the-art SEO
                        tools.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Foptimization.png?alt=media&token=b5b2438b-a36b-4cb7-9b26-896e9be06942"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Mobile Optimization</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We optimize your website in such a way that the target
                        users can easily access the website from their mobile
                        devices.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fvoice-search.png?alt=media&token=77f36357-f3bb-4781-a201-5a8ee3b8c0f3"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Voice Search</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT provides their clients with voice search
                        optimization which ensures to optimize their web pages
                        according to voice searches. This service takes into
                        account the search terms the users use during their
                        voice search.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexpertise%2Fsettings.png?alt=media&token=95665084-cd06-4cf5-85ab-eee26e2f8cc6"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Featured Snippet Optimization</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Our Search Engine Optimization experts and content
                        writers curate content in a way that would increase its
                        chances to appear as a featured snippet. A featured
                        snippet, makes your website appear above the 1st ranking
                        site on the SERPs.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="inner_page_industries">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div
                class="main_heading white_text"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h6>Industries</h6>
                <h2 class="h2--WithLine">Industries WE served</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div
                className="inner_industries_inner"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation
                  autoplay={{ delay: 3000 }}
                  className="mySwiper"
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
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fagriculture.jpg?alt=media&token=7bd6589c-bc10-41ca-8118-72b04ba4eaed"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Agriculture</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fbanking.jpg?alt=media&token=31617527-b57e-4d92-9540-ad5a03a4b2f7"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Banking</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fecommerce.jpg?alt=media&token=432f7c80-2e48-4776-b397-75e58aaca633"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>E-commerce</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Feducation.jpg?alt=media&token=50c74e90-077f-4bb8-9800-f47d2e939a8e"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Education</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fenergy.jpg?alt=media&token=d6e9327d-cf5a-4bad-8922-146d0316fafc"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Energy</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ffood-resturent.jpg?alt=media&token=27c9bfa9-e3fa-4d04-b8ac-3bda56b6926d"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Food & Resrurent</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Flogistics.jpg?alt=media&token=8f039e42-a3cb-46e6-83c2-3d4835908c62"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Logistic</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fmanufacture.jpg?alt=media&token=fdfca7c2-a9cb-4493-ba34-7e1936216675"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4> Manufacture</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fmedia-entertainment.jpg?alt=media&token=19ea18ed-c6e1-4027-b40b-77f1af783358"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Media & Entertainment</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Freal-state.jpg?alt=media&token=32d06a45-6318-49b9-936c-4e817aaabf88"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Real State</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fretail.jpg?alt=media&token=3d936774-05a1-4442-b72b-cd7f8b230030"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Retail</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fsocial-network.jpg?alt=media&token=264215f6-fd0f-4a89-9d14-8d499ba255a8"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Social Networks</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fsports-gaming.jpg?alt=media&token=f070189a-a11b-4e8e-8d71-a1c6ee80cd12"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Sports & Gaming</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ftelecom.jpg?alt=media&token=f849fc3e-ff94-4aed-8b32-8f272be76ae9"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Telecome</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ftour.jpg?alt=media&token=24ef4900-5db4-44cd-a440-04d01cf5c797"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Tour & Travel</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="process_sec">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div
                class="main_heding_top"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h3>Our Process</h3>
                <ul className="swiper-pagination"></ul>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                className="process_swiper_wrapper"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation
                  autoplay={{ delay: 3000 }}
                  className="processswiper"
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
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">1</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Finformation-gathering.png?alt=media&token=cd43e973-7247-4fc7-b96c-4f3cf687be05"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Requirement Gathering</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We start with a thorough discussion with our clients
                            so that we understand their business offerings,
                            business requirements, target audience, audience
                            demographics, market competition, and industry
                            trends.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Finformation-gathering-bg.jpg?alt=media&token=d366692e-a4ca-4d83-8352-9ae192543245"
                          alt="Requirement Gathering image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">2</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fplaning.png?alt=media&token=20f7c9aa-2a16-4509-8e99-53ff56371100"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Strategy & Planning</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            After gaining an in-depth understanding of our
                            client's business requirements, we start with a
                            monthly plan as well as a yearly strategy for their
                            SEO campaign. The plans and strategies are created
                            as per the goals you are willing to accomplish with
                            your online marketing and Search Engine Optimization
                            strategy.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fplaning-bg.jpg?alt=media&token=33044ed0-34db-482c-b24e-f6ba2e16fd17"
                          alt="Strategy image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">3</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fkeyword-research.png?alt=media&token=e5b58c50-bdad-4ddb-a140-81028c31f61d"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Keyword Research</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            With the use of accurate keywords, you can make your
                            Search Engine Optimization campaign successful as
                            well as rank on SERPs. Our team uses the best online
                            tools to research trending keywords to rank your
                            website on the top of the search engine.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fkeyword-research-bg.jpg?alt=media&token=3c8446ea-eb56-4b74-964c-5c65338d14c4" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">4</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Famendments.png?alt=media&token=28aec408-64ce-41e4-9e7e-5c7b73e32b2e"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Website Amendments</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Our SEO experts then analyze the technicalities and
                            make the website in such a way that they meet the
                            essential technical standard for their Search Engine
                            Optimization campaign and bring in desired results.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Famendments-bg.jpg?alt=media&token=59192512-46c8-4601-9919-24557f75108a" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">5</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Flink-building.png?alt=media&token=cc348496-202e-4771-b1f2-a3c9ff513d48"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Link Building</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Then we focus on off-page optimization activities as
                            well as link building. We also initiate quality link
                            building so that the site ranks higher.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Flink-building-bg.jpg?alt=media&token=f2e9a022-4da3-49f1-a6c4-a380dce3e953" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">6</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcontent-creation.png?alt=media&token=af22f339-cf2c-45b1-90b6-a03921c7fc42"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Content Creation & Update</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Our content writers then curate content and the SEO
                            experts post them on various platforms. Our content
                            is fresh and unique so that it improves your site
                            rankings.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcontent-creation-bg.jpg?alt=media&token=72f9a8e1-d7fc-4649-897c-4c46c1c82d13" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="width_100">
                      <div class="swiper_heding">
                        <div className="step__count">7</div>
                      </div>
                      <div className="process__icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fregular-reporting.png?alt=media&token=0b91355e-a32a-496a-80e8-7a23b694b885"
                          alt="Requirement Gathering icon"
                        />
                      </div>
                      <div class="prosses_text">
                        <h3>Regular Reporting</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Good SEO practices contain reporting too. Our Search
                            Engine Optimization experts provide interpretable
                            reports to their clients so that they can even know
                            the benefits of the campaign.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fregular-reporting-bg.jpg?alt=media&token=cdad0edd-c40b-44f6-a29e-6b6223a403c1" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="iq-features">
        <div class="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div
                class="main_heading white_text"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <h6>Benefits</h6>
                <h2 class="h2--WithLine">
                  Benefits of Hiring SEO Service Provider
                </h2>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12">
              <div class="holderCircle">
                <div class="round"></div>
                <div
                  class="dotCircle"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <span class="itemDot active itemDot1" data-tab="1">
                    <FaRegEye />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot2" data-tab="2">
                    <FaFilter />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot3" data-tab="3">
                    <FaHourglassEnd />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot4" data-tab="4">
                    <FaAward />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot5" data-tab="5">
                    <FaBullhorn />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot6" data-tab="6">
                    <FaUserLock />
                    <span class="forActive"></span>
                  </span>
                </div>
                <div className="benefit_title_sec">
                  <h4 data-aos="zoom-in" data-aos-duration="2500">
                    Benefit
                  </h4>
                </div>
              </div>
            </div>
            <div
              class="col-lg-5 col-md-12"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div class="contentCircle">
                <div class="CirItem title-box active CirItem1">
                  <h2 class="title">
                    <span>Better Visibility </span>
                  </h2>
                  <p>
                    SEO is an organic way that would help you rank better as
                    well as establish a domain authority over your competitors.
                    Better visibility also means you can convert potential
                    buyers into customers.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>High conversion leads </span>
                  </h2>
                  <p>
                    If you use the correct SEO strategy then you can attract
                    more clients or customers to your website. These potential
                    customers are called leads and you must continue to get
                    higher leads to thrive in online business.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>It saves time </span>
                  </h2>
                  <p>
                    Search Engine Optimization is a constant process that
                    requires hours of research, optimization, as well as upkeep.
                    Thus, outsourcing your SEO to an agency gets you the best
                    team to work on it and in return frees you up to focus on
                    other business-related tasks.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Experienced professionals </span>
                  </h2>
                  <p>
                    Outsourcing to the best SEO Agencies in Kolkata, India gets
                    you experienced professionals who have worked with many
                    clients and industries with a solid understanding of the
                    strategies that work best. They’ve already been through many
                    years of trial and error thus, they’re ahead of the curve on
                    what drives best results.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Knows the trends </span>
                  </h2>
                  <p>
                    SEO trends are changing every day thus, you have to research
                    on the same every now and then to stay on top of the trends.
                    This is time-consuming and many companies do not have that
                    luxury thus, hiring an SEO service provider keeps your
                    website on top of the trends.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem6">
                  <h2 class="title">
                    <span>Safety for your business </span>
                  </h2>
                  <p>
                    SEO is a risky business and if you do not know what you’re
                    doing, you might open the doors for search penalties, spam,
                    and hacking. This is why you should hire an SEO agency as
                    they know what to look out for and how to avoid any negative
                    repercussions keeping your website and rankings safe.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta2_section cta_block_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cta2_inner d-block d-sm-flex align-items-center"
                style={{ backgroundImage: `url(${cta_bg2})` }}
              >
                <div className="cta2_content_sec text-left">
                  <h4 className="mb-4">
                    Get your page optimized by the best SEO service provider.
                  </h4>
                  <Link className=" light-btn" to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner_testimonial_Sec">
        <TestimonialSection />
      </section>

      <section className="inner_page_client_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="big_title">
                <h2 data-aos="fade-down" data-aos-duration="1500">
                  <span>Our CLients</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={15}
                navigation
                autoplay={{ delay: 3000 }}
                className="myclient"
                breakpoints={{
                  700: {
                    spaceBetween: 15,
                    slidesPerView: 5,
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
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient1.jpg?alt=media&token=b9bc7aa2-29b6-48eb-94ef-842493f92fed"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient2.jpg?alt=media&token=c9b685ed-6fee-45c4-90c0-c7f4dcbf0725"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient4.jpg?alt=media&token=f43626ae-3a1e-4cfd-8624-6f11f925b9e3"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient5.jpg?alt=media&token=42cf4061-500a-4c1f-95ae-0985589898f2"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient6.jpg?alt=media&token=108ba7f0-a3e4-42d9-89b4-e8360fe50cfb"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient7.jpg?alt=media&token=20e52744-0b35-4426-9973-c4afe7426967"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient8.jpg?alt=media&token=38c47c8b-8c77-4feb-a1a9-d16585527e52"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient9.jpg?alt=media&token=8476acd8-eeb2-40d3-bcd4-d78aea646fdb"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient10.jpg?alt=media&token=66186813-b268-49a9-9a24-1920851bee68"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient11.jpg?alt=media&token=fba28597-59d6-4911-9bd7-f8f2a6cb0892"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_inner_client">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/clients%2Fclient12.jpg?alt=media&token=e06ae285-084b-4fea-86ef-cd4f8891e5e5"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="cta2_section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cta2_inner d-block d-sm-flex align-items-center"
                style={{ backgroundImage: `url(${cta_bg3})` }}
              >
                <div className="cta2_content_sec text-center w-100">
                  <h4 className="mb-4">
                    Sort out your digital marketing needs with the best SEO
                    provider in town.{" "}
                  </h4>
                  <Link className=" light-btn" to="/contact-us">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnologyWeUse />

      <section className="common_faq_section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="faq_title">
                <h4>
                  Frequently
                  <br /> Asked Questions
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="faq_inner">
                <div class="accordion" id="faqaccordian">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          <span>1.</span> What are SEO services?
                        </button>
                      </h5>
                    </div>

                    <div
                      id="faq1"
                      class="collapse show"
                      aria-labelledby="heading1"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: SEO or search engine optimization is a marketing
                        technique that helps you to push your site ranking on
                        search engines like Google, Bing, Yahoo, etc.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq2"
                        >
                          <span>2.</span> Why is SEO needed?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq2"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: The digital market is very competitive and to
                        maintain the presence of your business online you need
                        SEO.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          <span>3.</span> How does it work?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq3"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: SEO makes certain changes to your website to
                        improve your online presence so that you can easily
                        reach out to your target audience. They also use
                        accurate keywords to optimize your content so that your
                        audience can be converted to buyers.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          <span>4.</span> Step by step process of SEO for a
                          website?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq4"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        The SEO process can be divided into 4 steps:
                        <ul>
                          <li>Target market analysis</li>
                          <li>Keyword research and development</li>
                          <li>Content optimization</li>
                          <li> Constant testing and measuring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          <span>5.</span>What is an SEO audit?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq5"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: SEO audit is done to analyze and check the
                        problems in a website so that they can be fixed to make
                        the website more accessible.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq6"
                          aria-expanded="false"
                          aria-controls="faq6"
                        >
                          <span>6.</span>What is SEO blogging?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq6"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: SEO blogging starts with keyword research and
                        the use of the best keywords while writing an authentic
                        plagiarism-free blog focusing on those keywords but at
                        the same time keeping the keyword flow natural.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq7"
                          aria-expanded="false"
                          aria-controls="faq7"
                        >
                          <span>7.</span> What is SEO content?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq7"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Answer: SEO content is all about creating content for
                        various websites by following the SEO guidelines.
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq7"
                          aria-expanded="false"
                          aria-controls="faq7"
                        >
                          <span>8.</span> How do you do SEO for E-commerce?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq7"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        SEO for E-commerce consists of:
                        <ul>
                          <li>Keyword research</li>
                          <li> Developing site architecture</li>
                          <li> Optimizing On-Page SEO</li>
                          <li>Local SEO to drive local traffic</li>
                          <li>Content marketing</li>
                          <li> Link building</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SearchEngineOptimization;
