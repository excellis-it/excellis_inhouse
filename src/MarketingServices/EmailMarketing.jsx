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
  FaRegEye,
  FaUsers,
  FaUserCheck,
  FaAward,
  FaBullhorn,
} from "react-icons/fa";
import TechnologyWeUse from "../TechnologyWeUse";
import ClientSecInner from "../ClientSecInner";
const cta_bg =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcta_img.jpg?alt=media&token=80dff7e9-4f79-4258-ae00-734d63a84110";

const cta_bg2 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img2.jpg?alt=media&token=1fd153c0-9a1f-484a-9c12-e881ddd9d198";
const cta_bg3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img3.jpg?alt=media&token=ad3e770b-a126-4e64-b1c2-ab61338fcc0e";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const EmailMarketing = () => {
  const title = "Email Marketing";
  const description =
    "Let your audience know about you through email campaigns.”";

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
          Email Marketing Company and Agency in Kolkata, India: Excellis IT
        </title>
        <meta
          name="title"
          content="Email Marketing Company and Agency in Kolkata, India: Excellis IT"
        />
        <meta
          name="description"
          content="Excellis IT is a leading email marketing company and agency in Kolkata, India. We promote your product and generate revenue, leads, and customers through bulk mailing."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/email-marketing"
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
                    Grow your business with PPC Management Services
                  </h1>
                  <p>
                    Despite the fact that SEO and SEM have become the most
                    important components of a digital strategy, sending direct
                    mail to clients remains the most effective approach to
                    engage with them. As a result, email marketing services in
                    Kolkata, India are still a critical component of every
                    company's internet marketing strategy. These emails could be
                    about promotional commercials, new product releases, special
                    discounts, and other topics. An agency can market its
                    products as well as develop its customer base by sending
                    tailored or group emails to existing and new consumers. An
                    affordable email marketing services can provide a company
                    with a plethora of chances and help it establish itself as a
                    brand.
                  </p>
                  <p>
                    Excellis IT is a well-known digital marketing agency that
                    provides a variety of services, including email marketing
                    and advertising. We ensure that the emails we create are
                    capable of engaging customers and encouraging them to finish
                    the conversion because we are a goal-focused agency. We
                    assist companies in carving out a niche online by developing
                    email campaigns that strengthen their client relationships.
                    Our campaigns are built to ensure that the right material is
                    delivered to the right customer at the right time, resulting
                    in a great experience. Take advantage of our experienced
                    email marketing services to shorten your sales cycle and
                    strengthen your customer relationships.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fsocial-media-marketing.jpg?alt=media&token=30d10037-9b6e-4698-b4c1-256bd5042e00"
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
                <h2>Services We Offer</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="all_services_item_sec">
                <Scrollbars style={{ height: "70vh" }} className="" autoHide>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Audience Research </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            The foundation of any effective marketing is having
                            relevant information about the target audience. You
                            may learn about the preferences, expectations, and
                            attitudes of your mail recipients by conducting
                            audience research. To gather all of the information
                            needed for the study, we construct relevant email
                            registration forms. Simultaneously, we ensure that
                            no excessive requests are made, as this may turn the
                            user away.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Design Campaign </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            The campaign's success is assured by a consistent
                            and compelling email design. Our professionals build
                            custom campaigns that capture the attention of the
                            receivers using their unrivaled skills and
                            experience. We create compelling and meaningful CTAs
                            that compel recipients to take the requested action.
                            We design emails that meet your goals, whether
                            you're trying to reach out to new people or
                            retargeting old ones.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Email Optimization</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            It is not enough to create interesting emails; they
                            must be optimized to provide an exceptional user
                            experience. We use sophisticated technologies like
                            user history, analytics, and segmentation to
                            guarantee that the right messages are sent to the
                            right people at the right time. To improve
                            click-through and open rates, our campaigns are
                            subjected to extensive A/B testing. We make emails
                            that are precisely targeted for your target audience
                            by using email best practices.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Automated marketing </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Marketing automation is an important part of an
                            email campaign since it allows a company to build
                            strong relationships with its clients. To send
                            emails to the correct customers at the right time,
                            we use sophisticated automation software.
                            Personalized greetings, product recommendations,
                            cart abandonment reminders, membership renewal
                            reminders, and other topics may be addressed in the
                            automated letters.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Reporting & Analysis</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            A campaign's performance must be assessed on a
                            regular basis in order to determine the value it
                            provides. At Excellis IT, we meticulously examine
                            campaign results in order to understand everything
                            there is to know about user analytics. Our experts
                            also provide their expertise in the form of reports
                            on the campaign's performance as well as
                            recommendations for improvements.
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
                    Wanna reach your target audience through email?
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
                  <span>Why Hire </span> PPC service provided from Excellis IT
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
                    Delivery
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
                    Reporting & Tracking
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
                    Setup is quick
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
                    Mailing Lists Unlimited
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
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Freport.png?alt=media&token=98081286-1f75-48af-a528-48cfe6e1bf29"
                      alt=""
                    />
                    High-speed
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
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsave-money.png?alt=media&token=54fd85ab-1b2d-4776-b87a-f1e81f8617f2"
                      alt=""
                    />
                    Support
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
                    <h4>Delivery of Emails </h4>
                    <p>
                      Every time you send a campaign, we use cloud data centre
                      architecture to ensure that every subscriber receives it
                      in their inbox.
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
                    <h4>Reporting & Tracking</h4>
                    <p>
                      With a dedicated panel, you can track real-time data on
                      your email bounces, email clicks, and unsubscribes.
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
                    <h4>Setup is quick and seamless.</h4>
                    <p>
                      We have a thorough set of APIs and documentation so you
                      can spend less time adding email and more time creating
                      your campaign.
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
                    <h4>Mailing Lists Unlimited</h4>
                    <p>
                      Bulk The number of recipients per email is not limited by
                      the sender. It's a huge benefit because you may be sending
                      to hundreds of thousands of prospects and consumers.
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
                    <h4>High-speed data transmission</h4>
                    <p>
                      Your emails will be sent swiftly using our SMTP server, or
                      you can add as many SMTP servers as you want for even
                      faster delivery.
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
                    <h4>Customer Support</h4>
                    <p>
                      We offer support through phone and email 24/7. Any issue
                      can be resolved quickly by our professional support team.
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
                    <h4>Email Marketing Campaigns</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Email marketing is direct emails sent to your target
                        audience that speaks about your brand and your services.
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
                    <h4>Customer Database Generation</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We generate the database for our clients as per their
                        need and then analyze each data. This database is
                        sometimes generated through clients’ paid and organic
                        campaigns.
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
                    <h4>Customer Relationship Management</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Customer relationship management is a solution that
                        provides businesses with the products and services that
                        their customers would require for better customer
                        service.
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
                    <h4>Interest-Based Email Targeting</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Being the leading email marketing agency in Kolkata,
                        India we have specific target audience for each client
                        and through our thorough research we find out the likes
                        and dislikes of our clients and then target our email
                        marketing strategy accordingly.
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
                    <h4>Analyze and mine data</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Data mining is the process of analyzing data from
                        various angles and distilling it into valuable
                        information — knowledge that can be utilized to enhance
                        income, reduce costs, or do both.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fsocial-ads.png?alt=media&token=d68a8980-38ce-4d84-a123-4e0bebd60a01"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Email Programs with Interactivity </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        By refining your email marketing program, we expect to
                        attract new customers and convert more sales. We can
                        tailor a program to match your individual needs because
                        our services are technology-agnostic.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fsocial-ads.png?alt=media&token=d68a8980-38ce-4d84-a123-4e0bebd60a01"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Getting Emails and Getting Leads</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        The Acquisition and Lead Generation Expert Group is
                        dedicated to learning about and discussing how new
                        technologies, content, and new media are influencing how
                        data-driven marketers find new customers, interact with
                        them, and convert them.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fsocial-ads.png?alt=media&token=d68a8980-38ce-4d84-a123-4e0bebd60a01"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Direct Marketing</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Data, accountability, and the client are highlighted in
                        direct marketing campaigns. As a result, in addition to
                        real communication, any successful Direct Marketing
                        campaign must include the formation of actionable
                        segments, pre- and post-campaign analytics, and results
                        monitoring.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <div className="expertise_icon_single">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fsmm%2Fsocial-ads.png?alt=media&token=d68a8980-38ce-4d84-a123-4e0bebd60a01"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>Multivariate testing and campaign optimization</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        These options control how the optimizer sets bids and
                        spends your campaign's monthly budget in a way that best
                        matches your business goals and values after you've
                        turned on campaign optimization. Multivariate testing
                        allows marketers to test an endless number of different
                        combinations of elements on a web page and determine the
                        impact of those changes on the conversion rate of the
                        site.
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
                          Healthcare industry drives traffic to their sites with
                          the help of email marketing by pushing educational
                          content to the audience base.
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
                          Manufacturing sector uses email marketing as a form of
                          PR tactics to announce their new product launch and
                          gain the attention of their audience.
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
                          Travel and hospitality sector has gained many
                          customers via email marketing after the pandemic scare
                          became low. During the pandemic as well email
                          marketing came in handy to push important
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
                        <h4>Ecommerce And Retail </h4>
                        <p>
                          Retail gains a lot from email marketing as sending out
                          email blasts about upcoming products to your target
                          audience gets you to notice as well as website
                          traffic.
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
                        <h4>Finance </h4>
                        <p>
                          Pushing targeted emails on time gives the financial
                          sector the necessary push that it needs to gain the
                          attention of its target audience.
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
                        <h3>Define your audience </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Only relevant email is an effective one. The first
                            step for email marketing is to know your buyer’s
                            persona so that you can tailor-make the email
                            marketing campaign to meet your audience’s needs.
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
                        <h3>Establish your goals </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Before starting any email marketing campaign it is
                            essential to do research and know the average email
                            stats so that you can use them as the benchmark for
                            your goals.
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
                        <h3>Ways for people to sign up </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            For your email marketing to work you need people to
                            send emails to. This is why you need an email list.
                            You need to build this list by using ways like
                            newsletters so that your target audience can receive
                            your mail.
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
                        <h3>Choose email campaign type </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            There is different type of email marketing campaigns
                            like weekly newsletter, new product announcement
                            mail, or new blog online announcement. Choosing the
                            right one depends on your target audience as every
                            audience have a different preference thus the type
                            of email campaign mainly depends on that.
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
                        <h3>Make a schedule </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Once you know how to contact your list you can
                            inform your audience so that they know what to
                            expect so that you can maintain a consistent
                            schedule to build trust and stay in the spotlight.
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
                        <h3>Measure your results</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Excellis IT is one of the best email marketing
                            agencies in Kolkata, India we measure each result so
                            that we can make appropriate changes to the email
                            marketing campaign to meet the goals of our clients.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcontent-creation-bg.jpg?alt=media&token=72f9a8e1-d7fc-4649-897c-4c46c1c82d13" />
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
                    <FaRegEye />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot2" data-tab="2">
                    <FaUsers />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot3" data-tab="3">
                    <FaUserCheck />
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
                    <span>Manage Leads</span>
                  </h2>
                  <p>
                    A successful email marketing agency's primary goal is to
                    achieve this. It develops unique techniques to assist your
                    company in managing a diverse set of leads. Our
                    professionals can assist you in sending promotional emails
                    to potential clients. These emails are intended to generate
                    new leads.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>Getting in Touch With Your Audience</span>
                  </h2>
                  <p>
                    You'll need to communicate with the audience that has agreed
                    to receive your emails for a large portion of your email
                    marketing campaign. You may effortlessly communicate with
                    and send emails to those subscribers. It also helps you
                    ensure that each email you send is delivered to people who
                    are interested in receiving your material.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Easy Bulk Communication</span>
                  </h2>
                  <p>
                    We being an email marketing company in Kolkata, India,
                    provide you Bulk Email Marketing Services that give your
                    business leverage. This makes it easier for you to send
                    promotional messages to a large number of contacts at the
                    same time.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Faster Impact</span>
                  </h2>
                  <p>
                    Email marketing always brings faster impact than traditional
                    marketing. Email marketing services for business helps you
                    to obtain the anticipated outcome by sending emails to your
                    target audience.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Global Reach</span>
                  </h2>
                  <p>
                    With email marketing, you can target a worldwide audience
                    and send emails to anyone anywhere and at any time.
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
                    Want to send email that put value to your brand?
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
                  <h4 className="mb-4">Send emails that would get views.</h4>
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
                          <span>1.</span> How to design an attractive email?
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
                        To design an attractive email you should use catchy
                        images, animated GIFs as well as calls to actions to get
                        the attention of your audience. You should not use too
                        many font types, font colors, as well as font sizes, the
                        mail should have good readability.
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
                          <span>2.</span> Which email marketing strategy would
                          be perfect for my business?
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
                        Once you hire an email marketing service our team will
                        do thorough research and let you know the best email
                        marketing strategy for your business.
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
                          <span>3.</span> Will sales increase with email
                          marketing service?
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
                        Email marketing campaigns hike sales, provided you
                        inspire the audience to click on your email and move to
                        your website.
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
                          <span>4.</span> How to grow email subscribers’ list?
                          Should one buy an email list or build it themselves?
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
                        Buying an email list is not at all a good idea as the
                        list may not be as per your target audience thus the
                        strategy might turn out to be a complete bust. So, you
                        should build your subscriber list so that you can target
                        the audience as per your preference.
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
                          <span>5.</span>What should be the frequency of sending
                          emails?
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
                        It’s ideal if you send 3-4 mails a month as that would
                        create consistency in your audience’s mind and would not
                        create a nuisance at the same time.
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

export default EmailMarketing;
