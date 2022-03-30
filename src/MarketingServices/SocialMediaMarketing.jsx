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
  FaUserLock,
  FaRegEye,
  FaUsers,
  FaUserCheck,
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

const SocialMediaMarketing = () => {
  const title = "Social Media Marketing";
  const description =
    "“Harness the power of Social media and boost your business with the help of innovative Social media marketing strategies.”";

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
          Social Media Marketing Company & Social Media Optimization Agency in
          Kolkata, India: Excellis IT
        </title>
        <meta
          name="description"
          content="Excellis IT is one of the best advertising agencies providing creative SMO services at an affordable price to Corporate, SME’s, Startups, and Celebrities. Contact us now. "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/social-media-marketing/"
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
                    Every click counts – Social Media Marketing
                  </h1>
                  <p>
                    In this fast-changing digital world, social media has become
                    one of the most influential marketing channels; most
                    businesses have already realized the need of having a strong
                    social presence on various SNS. Social media marketing
                    harnesses the power of social networks to increase
                    engagement, boost sales, as well as build your brand. It
                    empowers your business to take advantage of the popularity
                    of social media platforms like Facebook, Twitter, Instagram,
                    YouTube, and others. By using engaging content across these
                    channels, the businesses generate interest for their
                    products and services as well as engage their customers. In
                    short, social media marketing service strengthens your brand
                    as well as build customer trust and loyalty.
                  </p>
                  <p>
                    Excellis IT is one of the leading social media marketing
                    companies in Kolkata, India that encompasses reliable as
                    well as comprehensive services for your business across
                    diverse industry verticals. Our expert digital marketers
                    craft rich as well as targeted content that would engage
                    potential shoppers and influence their purchase decisions.
                    At the same time, they also work on building as well as
                    establishing their brand reputation across different social
                    channels. We ensure that your business creates an online
                    buzz and explores new territories for unparalleled growth.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/inner_about_image%2Fsocial-media-marketing.jpg?alt=media&token=eb2c47af-3cae-4d36-86b6-5a364e469e4b"
                    alt="Social Media Marketing"
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
                        <h4>Social Media Strategy</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We provide a result-driven strategy so that your
                            social media marketing plan is a success. This
                            starts with understanding your business as well as
                            its goals so that we could curate a solution that
                            would be perfect for your brand.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Content Marketing</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            The tonality of your content reflects the tonality
                            of your brand thus, the content that goes out on
                            your social pages must be sound and unique as well
                            as engaging. We also realize its significance and
                            thus, create content that would engage your
                            customers with your business and strengthen your
                            brand.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Social Media Management</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Social media management is an important aspect of
                            SMM. Excellis IT is one of the leading Social media
                            marketing agency in Kolkata, India, gives your
                            business an influential online presence across
                            platforms like Facebook, Linkedin, Instagram,
                            Twitter and many more. We also schedule brand
                            messages along with promoting content for ideal
                            engagement with our target audience and also
                            coordinate social alliances so that you could reach
                            out to your new audience.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Promotions And Contests</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            If you wish to get instant audience engagements to
                            your social channels then targeted promotions and
                            contests can help you to infuse new life in your
                            campaign. Excellis IT designs as well as implements
                            innovative ideas for promotions, contests, coupons
                            for new customers, etc. Such promotional ideas
                            benefit you with high engagement as well as sales
                            that boost the popularity of your brand.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Monitoring And Reporting</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Social media marketing agency doesn’t only design
                            and implement marketing plans. They also monitor the
                            efficacy of the implemented plan. Our experts at
                            Excellis IT keep an eye on the performance of the
                            strategy that they had applied. We also provide
                            reports to our clients so that they can also see and
                            evaluate the value they are getting from our
                            services.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Consulting</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Apart from all the traditional SMM plans we also
                            provide consultancy services to our clients. We have
                            a team of experts who would provide you with the
                            best consultancy so that you can avail the benefits
                            of the strategy and make it better.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Influencer Marketing</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            In recent times Influencer Marketing is the most
                            effective marketing tool for businesses. Social
                            Media influencers have a pool of loyal followers who
                            trust their reviews. This can be very beneficial for
                            businesses as they can easily leverage the power of
                            these influencer marketers to promote their business
                            offerings. As a social media marketing agency, we
                            offer the best influencer marketing services for
                            your business.
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
                    We offer the best Social Media services to take your
                    business ahead
                  </h4>
                  <Link className="light-btn" to="/contact-us">
                    Talk to Us
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
                  <span>Why Hire </span> SMO Experts from Excellis IT
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
                    Measurable
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
                    Unique Designs
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
                    <h4>Experienced Team </h4>
                    <p>
                      Being the best SMO company in Kolkata, India; we have a
                      team of skilled enthusiasts, experts as well as leaders
                      within the digital industry who strongly believe in
                      delivering timely results.
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
                    <h4>Measurable Results </h4>
                    <p>
                      We create campaigns with measurable results. We inform you
                      about your social media analytics in detail by showing you
                      which content is being preferred by your audience as well
                      as which social media platform is generating more traffic
                      to your website.
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
                      Our SMO and SMM teams create techniques and campaigns that
                      depend on market information and analytic data. This
                      guarantees precise strategies and easy execution. We
                      assist you by reaching out to the perfect individuals
                      through the ideal platform at the right platform.
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
                    <h4>Unique Designs </h4>
                    <p>
                      We not only create effective and engaging content but also
                      design eye-catching social media posts which would trigger
                      the interest of your audience. We also help you redirect
                      your audience to your website by putting a call to action
                      button at the right place.
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
                    <h4>Affordable SMO packages </h4>
                    <p>
                      Excellis IT provides you with the best social media
                      services in India at a very affordable rate.
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
                    <h4>Facebook Page and Profile Management</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Facebook is the most used social media platform with a
                        huge as well as diverse audience- along with a customer
                        base. Today every business has its own Facebook pages so
                        that it could strengthen its social media presence.
                        Excellis IT is a social media optimization company in
                        Kolkata, India that would help you by managing your
                        Facebook page and profile efficiently.
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
                    <h4>Twitter Page and profile Management</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Recently Twitter has become an influential platform for
                        businesses as well as business owners to attract an
                        audience as well as create an influence by actively
                        posting and with interaction. As a next-gen social media
                        advertising company in Kolkata, India, Excellis IT
                        provides effective Twitter Page & Account Management
                        services that would help your brand create an influence
                        on your audience.
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
                    <h4>LinkedIn Page and profile Management</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        LinkedIn, is a platform for enterprises, brands, job
                        aspirants, employers, and professionals well, it's all
                        about business. LinkedIn allows businesses to come in
                        contact with job aspirants and brand influencers.
                        Excellis IT is among the best SMO company in Kolkata,
                        India which has the best team of social media marketers
                        who provides the best LinkedIn Page and profile
                        Management Services.
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
                    <h4>Pinterest Marketing</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Pinterest has recently gained a huge amount of
                        popularity as it is an image posting platform, it is a
                        very beneficial platform for product base businesses as
                        they can post their offering on this platform to gain
                        traction. As one of the popular social media marketing
                        companies in Kolkata, we offer the best Pinterest
                        Marketing services for your business.
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
                    <h4>Instagram Marketing</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        In recent times, Instagram has surpassed Twitter and
                        Facebook's popularity quotient. Influencers, youngsters,
                        as well as celebrities are active on Instagram, and
                        businesses are also diving in to get on to this market.
                        With the help of Instagram their stories, reels, IGTV
                        videos, and feed posts, Excellis IT provides an
                        effective Instagram Marketing campaign to our clients to
                        boost sales.
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
                    <h4>Paid Social Ads </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Paid social media advertising varies from traditional
                        outbound advertising. We help you to find, target, and
                        reach your audience with ease. Each ad that we design
                        facilitates the goals of your business, such as brand
                        awareness, lead generation, website traffic, and more.
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
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Feducation.jpg?alt=media&token=50c74e90-077f-4bb8-9800-f47d2e939a8e"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Education</h4>
                        <p>
                          We help the education sector develop its outreach with
                          our cutting-edge SMM services.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
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
                          We help the Healthcare sector with strategized SMM to
                          spread awareness.
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
                          Food and restaurant business owners benefit from our
                          SMM services in Kolkata, India as we can help them to
                          direct their audience to their website from their
                          social sites.
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
                          Our social media service can help the manufacturing
                          industry to build trust as well as gain an audience.
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
                          Engaging social media posts gets more traffic to your
                          website and we can help with that which in turn will
                          help you build connections in real estate.
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
                          Appropriate advertising along with attractive and
                          engaging social media presence ensures the success of
                          your business in the travel & tourism industry.
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
                          The entertainment world is all about visual appeal
                          thus we provide you with the best social media designs
                          to keep you ahead of the curve.
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
                        <h3>Audit Your Current Social Presence </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Before strategizing where you are headed, you should
                            pause and take look at where your page is at the
                            moment. Here are a few things you should consider
                            before auditing:
                            <ul>
                              <li>• The networks you are currently on</li>
                              <li>
                                • If your networks are optimized (photo and
                                cover images, bio, URL, etc.)
                              </li>
                              <li>
                                • The networks that are bringing you more
                                traffic
                              </li>
                              <li>
                                {" "}
                                • Whether your profile stands out to your
                                competitors' profile
                              </li>
                            </ul>
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
                        <h3>Identify Your Ideal Customer </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            It is very ideal to be specific about your target
                            audience. As even the best marketing strategies fail
                            if applied to the wrong target audience. Thus,
                            knowing your audience is very crucial and then you
                            can make your social media strategy accordingly.
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
                        <h3>Create A Social Media Mission Statement</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            A social media mission statement would drive your
                            future actions. Thus, make sure that you know what
                            your mission statement should be as that would
                            reflect your brand identity. While choosing a
                            statement make sure you keep in mind your target
                            audience.
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
                        <h3>Your Key Success Metrics</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            You should always keep a check if your social media
                            strategy is working or not as there is no use in
                            spending money if the plan does not improve your
                            bottom line.
                            <p>Here are a few metrics we consider measuring:</p>
                            <li>• Conversion Rate</li>
                            <li>• Time Spent on Website</li>
                            <li>• Reach</li>
                            <li>• Brand Mentions</li>
                            <li>• Sentiment</li>
                            <li>• Total Shares</li>
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
                        <h3>Create and Curate Engaging Content</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Our in-house content writers then start creating
                            content that would be posted on various social media
                            platforms. We create unique and engaging content
                            that would improve brand visibility.
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
                        <h3>Social Media Management Tool</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Invest in social media management tools and leverage
                            the benefit of the tools to boost your productivity.
                            Having a social media management tool also allows
                            you to scale your efforts on social media with ease.
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
                        <h3>Track, Analyse, Optimize</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Social media success runs on trial and error. So
                            this is one of the most crucial steps in the process
                            as you need to track and analyze your results daily
                            and make changes accordingly.
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
                  <span class="itemDot itemDot6" data-tab="6">
                    <FaUserLock />
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
                    <span>Increase brand visibility </span>
                  </h2>
                  <p>
                    Social Media Marketing helps in improving your brand
                    visibility by using different social media platforms like
                    Facebook, Twitter, Instagram, and others. Social media
                    platforms give your brand access to the digital space so
                    that you can build your brand's visibility to gain an
                    audience.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>More followers </span>
                  </h2>
                  <p>
                    When your followers start to grow online there is an
                    increase in word of mouth and referrals. Our social media
                    marketing services in Kolkata, India would help you grow
                    your followers as well as ensure that your followers would
                    match the demographics, interests, and behaviors of your
                    target audience.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Gaining More Customers </span>
                  </h2>
                  <p>
                    SMM and SMO services in Kolkata, India help more people to
                    know about your brand and what it offers. This in turn helps
                    you to gain more customers and drive more sales. Sharable
                    content is also useful as they increase post engagement and
                    opens your brand to a larger customer pool.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Increase conversion and sales </span>
                  </h2>
                  <p>
                    Increasing your website traffic influences leads and sales.
                    Thus, we pair this service with our affordable social media
                    services in Kolkata, India, which focuses on developing
                    social media advertising campaigns to drive more traffic to
                    your website.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Tell your brand story </span>
                  </h2>
                  <p>
                    Social Media platforms can be used as a storytelling
                    platform for your brand where you can tell your brand story
                    in a way that your target audience can relate to your brand
                    and feel a sense of attachment. This increases website
                    traffic and posts engagement.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem6">
                  <h2 class="title">
                    <span>Build Relationships </span>
                  </h2>
                  <p>
                    We help you build a strong and long relationship with your
                    customer through engaging with your target audience. We also
                    help you increase your engagement through interesting
                    content on your social media posts which will, in turn, help
                    you build a strong connection with your audience.
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
                    Want to expand your online reach with social media
                    marketing?
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
                    Know about the complete spectrum of SMM services provided by
                    us?
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
                          <span>1.</span> Why your brand needs social media
                          marketing?
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
                        Answer: Social media has become an integral part of our
                        lives. So, today it is very important for the business
                        to also be active on social media so that they can boost
                        their social presence as well as engage and interact
                        with their target audience to convert them into
                        customers.
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
                          <span>2.</span> How helpful is social media?
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
                        Answer:Social media helps businesses to find customers
                        from their target audience pool as well as drives
                        traffic to the business's website.
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
                          <span>3.</span> What should you see while selecting
                          social media marketing services?
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
                        Answer: The questions you should consider while
                        selecting the best social media marketing services:
                        <ul>
                          <li>
                            • Does the company gel with the vibe of your brand?
                          </li>
                          <li>• Is the company ethical?</li>
                          <li>
                            • Is the company good at its job and provides the
                            best services?
                          </li>
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
                          data-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          <span>4.</span> How is social media useful for
                          start-ups?
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
                        A start-up needs an audience and customers thus, social
                        media is the perfect platform to provide you both.
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
                          <span>5.</span>What are SMM services?
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
                        Answer: Social media management services use social
                        media platforms to build brand awareness generate leads
                        and sales. Social media management services provide
                        brands with digital marketing solutions.
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
                          <span>6.</span>How much one should spend on social
                          media marketing?
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
                        Answer: Spending on social media marketing is different
                        for different businesses. Some have a huge budget so
                        they spend more while some have limited budget and
                        spending within that is also possible. But social media
                        platforms do have limitations and you should always
                        check that along with your budget then make the plan.
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

export default SocialMediaMarketing;
