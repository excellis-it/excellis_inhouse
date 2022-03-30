import React from "react";
import "../ItServices/itservices.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import OurBlogs from "../Appcontainer/OurBlog";
import TestimonialSection from "../TestimonialSection";
import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import $ from "jquery";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import TechnologyWeUse from "../TechnologyWeUse";
import ClientSecInner from "../ClientSecInner";
const cta_bg =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcta_img.jpg?alt=media&token=80dff7e9-4f79-4258-ae00-734d63a84110";

const cta_bg2 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img2.jpg?alt=media&token=1fd153c0-9a1f-484a-9c12-e881ddd9d198";
const cta_bg3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img3.jpg?alt=media&token=ad3e770b-a126-4e64-b1c2-ab61338fcc0e";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const CallCenterOutsourcing = () => {
  const title = "Call center outsourcing ";
  const description =
    "Our call center outsourcing services assist your company in creating great omnichannel experiences that exceed consumer expectations.";

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
          Call Center Outsourcing Company In Kolkata, India: Excellis IT
        </title>
        <meta
          name="title"
          content="Call Center Outsourcing Company In Kolkata, India: Excellis IT"
        />
        <meta
          name="description"
          content="Excellis IT is a leading Call center outsourcing Services provider in Kolkata, India. We provide inbound, outbound, telemarketing, technical, email support, chat support services, etc. "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/call-center-outsourcing-service/"
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
                  <h1 class="BannerServices__Subheader">
                    Best call center outsourcing services – Excellis IT
                  </h1>
                  <p>
                    By enhancing critical areas of operation, call center
                    outsourcing may help your company boost customer
                    satisfaction. We are a prominent call center outsourcing
                    service provider in kolkata, India. We have a lot of
                    expertise with voice, email, and live chat assistance, lead
                    generation, technical support, and appointment setup. You
                    may rest confident that our call center outsourcing services
                    in Kolkata, India, will increase your sales by utilizing
                    highly trained call center operators and innovative
                    technology. Our call center outsourcing solution is an
                    affordable approach to create new leads, respond to client
                    inquiries, and assist customers with technical issues. This
                    may be yours for a fraction of what you are paying now.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/inner_about_image%2Fcall-center.jpg?alt=media&token=2705c84d-65a7-4cf9-97c8-e007ab2a994f"
                    alt="Call Center"
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
                <h2>Services We Offer</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="all_services_item_sec">
                <Scrollbars style={{ height: "70vh" }} className="" autoHide>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Inbound call center services</h4>
                        <Scrollbars style={{ height: 300 }}>
                          <p>
                            Our professionals ensure that all your company's
                            customers are loyal to you. Our professionals
                            receive inbound calls from your customers, where
                            they express their questions, comment, or complaint,
                            which we handle on your behalf.
                          </p>
                          <p>
                            An inbound call center provides the following
                            services:
                          </p>
                          <ul>
                            <li>Process of Order</li>
                            <li>Customer Service</li>
                            <li>Processing of Requests</li>
                            <li>Client assistance</li>
                            <li>Services with No Charge</li>
                            <li>Requests for Product Specification</li>
                            <li>Managing the warranty</li>
                          </ul>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Outbound call center services</h4>
                        <Scrollbars style={{ height: 300 }}>
                          <p>
                            It differs from inbound services in several ways. On
                            the one hand, inbound services focus on client
                            management; on the other hand, outbound service
                            professionals gear up to find future consumers who
                            could need your product or service.
                          </p>
                          <p>
                            On the other hand, outbound services are primarily
                            concerned with the sales aspect of your company,
                            assuring an ever-increasing graph in your sales
                            report. An outbound call center provides the
                            following services:
                          </p>
                          <ul>
                            <li>Scheduling of Appointments</li>
                            <li>Collection and MNP</li>
                            <li>Obtaining Leads</li>
                            <li>Survey of Customers</li>
                            <li>Telemarketing</li>
                            <li>Verification by a 3rd Party</li>
                          </ul>
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
                    Are you looking for an affordable call center solution?
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

      <section class="fact_no why_hire_sec">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-12 ">
              <div className="big_title">
                <h2 data-aos="fade-down" data-aos-duration="1500">
                  <span>Why Hire </span> call center outsourcing services from
                  us
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
                    Trained Employees
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
                    Save Cost
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
                    High-end technology
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
                    Best practices
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
                    <h4>Trained Employees</h4>
                    <p>
                      We connect our clients with a tribe of youthful, dynamic,
                      and well-trained call center executives equipped to
                      provide a variety of outsourced call center and
                      knowledge-based outsourcing services to clients in various
                      industries.
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
                    <h4>Save Cost</h4>
                    <p>
                      You may save large amounts of money by outsourcing your
                      call center needs to a professional service provider.
                      Bringing in people and educating them on call center
                      processes is expensive. Another significant issue for the
                      sector is attrition. If you outsource your call center
                      procedure to us, you can be certain of superior workers at
                      lesser costs and free from any such problems.
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
                    <h4>High-end technology</h4>
                    <p>
                      We extensively invest in the latest tools and technology
                      to provide our clients with the most advanced call center
                      solutions. Our innovative IVR technology and
                      internet-based telephony let you get the most out of your
                      outsourced contact center's resources, resulting in lower
                      costs and more profitability.
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
                    <h4>Best practices in the industry</h4>
                    <p>
                      We adhere to industry best practices in-process
                      monitoring, client reporting, feedback system, and
                      escalation matrix. Our process mechanisms were created
                      using leading process management concepts to ensure that
                      our clients' processes run smoothly.
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
                    <h4>Access to Latest Technologies & Resources</h4>
                    <p>
                      BPO services have access to the most modern tools as well
                      as technology to aid in the completion of routine
                      corporate activities. You do not want to waste money on
                      equipment and software that is not essential to your new
                      firm.
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
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Ffacebook-page.png?alt=media&token=a9e8076b-6b59-4483-a850-c3bfadb0520b"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Telemarketing</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        The most popular and active method of direct marketing
                        is telemarketing. Simply, a strategy for effectively
                        spreading the word about your products/services among
                        your target audience. Telemarketing services assist
                        firms in raising interest among potential consumers in
                        the launch of new products and services and growing a
                        client base, and producing qualified sales leads.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Ftwitter-page.png?alt=media&token=457317b5-9f48-4e23-bb03-918627265ce8"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Lead Generation call center services</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        B2B organizations widely use lead generation services to
                        collect and assess new leads to turn them into new
                        clients.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Flinkedin-page.png?alt=media&token=90f00ec5-e110-45d1-a426-cb245027fc73"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Help desk</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        A help desk service serves as a single point of contact
                        (SPOC) for the service provider (IT) and the users.
                        Queries are handled via help desk services, and service
                        changes are arranged as needed.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fpinterest-marketing.png?alt=media&token=3b392249-d4f9-40c2-8c98-35850f5f93c3"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Customer support services</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Tracking critical performance indicators is easier with
                        customer support services. These metrics are maintained
                        because of customer service contacts with customers.
                        Customer behavior KPIs let you discover which potential
                        clients should be engaged to keep their business ahead
                        of time. This lessens the chances of your consumers
                        vanishing without a trace.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Finstagram-marketing.png?alt=media&token=79b8228d-d7dc-4742-80c1-73f1aa431301"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Domestic BPO</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Domestic outsourcing is exactly what it sounds like:
                        providing and receiving services within a country's
                        borders. Another way, a vendor in one city, state, or
                        province can be hired to deliver services to a company
                        in another city, state, or province. This can be caused
                        by various variables, including the availability of
                        specialist talents in specific areas or regional
                        variances in rates and expenses.
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
                  autoplay={{ delay: 300000 }}
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
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fhealthcare.jpg?alt=media&token=d826e1e0-a94b-4941-80a8-3422d5bf6dde"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Healthcare </h4>
                        <p>
                          Healthcare sector uses tailor-made content marketing
                          services to spread awareness.
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
                          manufacturing or the business sector needs content
                          marketing services to build trust.
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
                          The travel and tourism sector uses content marketing
                          services to advertise and promote its services and
                          brand.
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
                        <h4>Education </h4>
                        <p>
                          The education sector depends on content marketing
                          services to gain brand value as only rich content that
                          is specific to their brand can provide you the same.
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
                        <h4>Food & Restaurants </h4>
                        <p>
                          The food and Restaurant sector requires content
                          marketing services to promote their new offerings as
                          well as advertise their products.
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
                        <h4>Real Estate </h4>
                        <p>
                          Having personally planned content marketing services
                          helps the real estate to build relations.
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
                        <h4>Entertainment </h4>
                        <p>
                          The world of entertainment is all about online
                          presence these days. Thus, content marketing comes
                          into play.
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
                        <h3>Gather information requirements and documents.</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            The Excellis IT team will work closely with you to
                            understand your company's practices and goals. Our
                            subject matter experts and expert consultants will
                            conduct a review of these methods and activities.
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
                        <h3>
                          Service Level Agreement and Process Contract (SLA)
                        </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We will legally contract the partnership agreement
                            and sign the SLA after settling on the specific call
                            center outsourcing services.
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
                        <h3>
                          Start the process, train your employees, and document
                          everything.
                        </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Excellis IT will begin agent training to acquaint
                            our agents with your company's technologies and CRM.
                            Furthermore, it will assist our staff in
                            understanding your process in the same way that your
                            in-house personnel does. Every step of the way, the
                            process will be documented.
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
                        <h3>
                          Tasks should be delegated to a potential workforce
                        </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We will assess agents for cultural fit and assign
                            duties inside the outsourced call center program
                            once we optimize the customer support process.
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
                        <h3>
                          Candidates must be finalized before they can be
                          onboarded.
                        </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We ensure that all our hired representatives have a
                            thorough understanding of customer service
                            operations. FWS will map initiatives and mentors for
                            future supervision based on the merits of
                            specializations and expertise.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Flink-building-bg.jpg?alt=media&token=f2e9a022-4da3-49f1-a6c4-a380dce3e953" />
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
                  Benefits of Hiring Social Media Marketing Services
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
                    <RiNumber1 />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot2" data-tab="2">
                    <RiNumber2 />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot3" data-tab="3">
                    <RiNumber3 />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot4" data-tab="4">
                    <RiNumber4 />
                    <span class="forActive"></span>
                  </span>
                </div>
                <div className="benefit_title_sec">
                  <h4 data-aos="zoom-in" data-aos-duration="2500">
                    Benefits
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
                    <span>Benefits in terms of cost</span>
                  </h2>
                  <p>
                    India has a plethora of call center service providers that
                    give high-quality services at a low cost. Outsourcing your
                    call center operations will save you money overall.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>Increased earnings</span>
                  </h2>
                  <p>
                    By outsourcing call center services, you may boost your
                    company's profitability. Call center outsourcing may improve
                    your organization's quality, performance, and productivity
                    in every way.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Save on resources</span>
                  </h2>
                  <p>
                    You may save money on people and infrastructure by
                    outsourcing call center services. You may use your resources
                    for essential company procedures and experience profits
                    without spending money on training or pricey software.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Specific talents</span>
                  </h2>
                  <p>
                    Using call center outsourcing services, you may have access
                    to seasoned individuals' specialized abilities.
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
                    Want to outsource your call center services to India?{" "}
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

      <ClientSecInner />

      <section className="cta2_section pb-0 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="cta2_inner d-block d-sm-flex align-items-center"
                style={{ backgroundImage: `url(${cta_bg3})` }}
              >
                <div className="cta2_content_sec text-center w-100">
                  <h4 className="mb-4">
                    Need help to form your offshore call center team?
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
      <OurBlogs />

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
                          <span>1.</span> What Is Outsourcing a Call Center?
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
                        Incoming and outbound call center outsourcing is the
                        procedure of contracting an organization's inbound and
                        outbound call center Solutions to an external specialist
                        rather than conducting them in-house to save money and
                        overhead.
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
                          <span>2.</span> What Are Outsourcing's Benefits?
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
                        <p>
                          Outsourcing relieves employees of unneeded
                          responsibilities, allowing them to concentrate on more
                          important duties that contribute to the company's
                          success. Recruiting devoted, full-time staff may save
                          organizations a lot of money in terms of electricity
                          expenses, office space, and compensation. Outsourcing
                          organizations operate in shifts, ensuring 24x7
                          service, so businesses may communicate with clients
                          even after business hours.
                        </p>
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
                          <span>3.</span>When picking a call center, what should
                          you look for?
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
                        A good call center should have a well-trained workforce,
                        be incredibly knowledgeable about contemporary tools and
                        technology, be able to operate across time zones, have
                        multilingual employees, and provide cost-effective
                        service.
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
                          <span>4.</span> What is the Purpose of Call Center
                          Outsourcing?
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
                        Any business's top priority is its customers. Your
                        organization may give excellent services with the
                        optimum output if you choose the proper call center
                        outsourcing company in India. Call center outsourcing
                        firms with a good reputation enhance client engagement
                        rates and help your business succeed.
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
                          <span>5.</span>When should a customer satisfaction
                          survey be conducted?
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
                        Customer satisfaction surveys should often be delivered
                        to consumers after interacting with you about your
                        products and services. It is best to send the surveys
                        within the following 24 hours when they are still
                        thinking about your engagement. Remember that open email
                        rates are greater towards the start of the week. Client
                        satisfaction surveys may be issued at several points
                        during the customer's lifetime, including onboarding,
                        renewal, and cancellation.
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

export default CallCenterOutsourcing;
