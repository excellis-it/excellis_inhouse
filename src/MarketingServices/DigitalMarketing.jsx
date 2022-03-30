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
import IndustriesWeCovered from "../Appcontainer/IndustriesWeCovered";
const cta_bg =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fcta_img.jpg?alt=media&token=80dff7e9-4f79-4258-ae00-734d63a84110";

const cta_bg2 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img2.jpg?alt=media&token=1fd153c0-9a1f-484a-9c12-e881ddd9d198";
const cta_bg3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cta_img3.jpg?alt=media&token=ad3e770b-a126-4e64-b1c2-ab61338fcc0e";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const DigitalMarketing = () => {
  const title = "Digital Marketing";
  const description =
    "“Creating 360-degree digital marketing services that would make your business stand out from your competitors. ”";

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
                  <h1 class="BannerServices__Subheader">
                    Start Your Digital Journey with Excellis IT
                  </h1>
                  <p>
                    Online marketing, or digital marketing, is the most
                    important business tool for businesses today since it allows
                    them to use the internet's potential to propel their
                    organization forward. It enables them to improve their
                    search engine presence, increase website traffic, and engage
                    consumers to turn them into customers. With most rivals in
                    the market engaging in a digital strategy, it becomes
                    critical for the company to stay competitive. Having a solid
                    internet presence has also become a powerful branding
                    technique for boosting the organization. To get a
                    competitive advantage, every organization must use the best
                    digital marketing services in Kolkata.
                  </p>
                  <p>
                    We are a top digital marketing agency. At Excellis IT, we
                    provide a wide range of services to help your company
                    flourish. We assist you in overcoming obstacles and
                    resolving issues that arise while attempting to expand your
                    internet presence. We have a team of skilled digital
                    marketing experts who can assist you with anything you need
                    to know about online marketing. We offer comprehensive
                    digital marketing services in Kolkata to ensure that your
                    business's website goes to the top of search results and
                    stays there despite market competition. SEO, SMO, SMM, PPC,
                    ORM, content marketing, and more are all areas in which we
                    specialize.
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
                    Do you want your website to rank no. 1 on Google?
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
                  <span>Why Hire </span> Digital Marketing from Us
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
                    Concentrate
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
                    understanding
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
                    Expenditures
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
                    measured
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
                    Have all the tools
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
                    <h4>Concentrate on your company's operations</h4>
                    <p>
                      A digital marketing firm can handle your marketing needs
                      in the same way that an accountant can handle your
                      business accounts, allowing you to focus on other elements
                      of your business.
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
                    <h4>Thorough understanding of the industry</h4>
                    <p>
                      Producing fantastic ideas is not the only part of digital
                      marketing. That is just a little portion of the pie.
                      Having the technical abilities and the resources to carry
                      out the plans and efforts are two more aspects that help
                      achieve the intended objectives.
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
                    <h4>Reduce Marketing Expenditures</h4>
                    <p>
                      In-house marketing teams may be expensive to employ these
                      days. Putting together a team to lead, research, monitor,
                      create, and evaluate your internet marketing strategy is
                      expensive and time-consuming. A certified digital
                      marketing agency in Kolkata, India, may provide all these
                      services and more at a fraction of the cost (both time and
                      money) of hiring an in-house staff.
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
                    <h4>Results that can be measured</h4>
                    <p>
                      Due to their expertise and areas of experience in digital
                      marketing can offer you data and reports that provide you
                      with a realistic picture of the results you're obtaining
                      from their services. Though digital marketing might appear
                      ethereal, an experienced internet marketing team should be
                      able to attach precise, measurable metrics to each
                      campaign to demonstrate its efficacy.
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
                    <h4>Have all the tools</h4>
                    <p>
                      With its expertise, knowledge, and required continual
                      education in internet and digital marketing, a marketing
                      firm has resources at its disposal that many businesses
                      are unaware of. Digital marketers have their unique means
                      of developing successful exposure for their business, just
                      as they would with specialized equipment for their trade.
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
                    <h4>SEO </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Get your page optimized to be visible on the 1st page of
                        google search by the leading SEO company in Kolkata,
                        India.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Google AdWords & PPC</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Get more leads and audiences with the help of AdWords
                        and PPC marketing.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Social Media </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We provide a social media marketing plan that would
                        maximize and broaden your audience.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Social Media Advertising </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Advertise more about your brand on your social media
                        channels and get new leads.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Brand Promotion</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Promote your brand online to gain more audience and
                        traffic to your website.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Email Marketing & Newsletters </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Market your brand through email and newsletter to
                        attract your target audience.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Conversion Rate Optimization (CRO)</h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Get your CRO done by the best digital marketing company
                        in Kolkata and increase your conversion rate from
                        websites and mobile apps.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Content Creation </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Create content that would attract your target audience
                        and educate the potential audience about your brand.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Influencer Marketing </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Get the help of Influencers through us to promote your
                        brand in a highly effective way.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Data Analysis </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Analyse the data and adjust the changes that need to be
                        made to increase the audience.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Video Marketing </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Videos work best on digital platforms. Thus, opt for
                        video marketing to gain more audience.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Online Reputation Management </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Clients trust us with their business as we help them
                        manage their online reputation effectively.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeCovered />

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
                        <h3>Establish objectives and goals </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            clear, quantifiable, and realistic digital marketing
                            strategy objectives help you identify and measure
                            what you want to accomplish. Be as specific as
                            possible while establishing these goals. Include
                            statistics and periods to act as progress markers.
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
                        <h3>Define your buyer persona</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Before you can run a successful digital marketing
                            campaign, you must first figure out who you are
                            going for. You can find out what kind of marketing
                            will perform best for you by using buyer personas to
                            segment your audience and then developing buyer
                            personas for each group.
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
                        <h3>Competitive analysis </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            If you want your marketing efforts to be effective,
                            you must know who you're competing against. You may
                            use competitive analysis to determine who your
                            rivals are, evaluate your market share, and learn
                            about their marketing strategy.
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
                        <h3>A SWOT analysis</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            (strengths, weaknesses, opportunities, and threats)
                            is the opposite of a competitive landscape study. It
                            gives you a foundation for looking at your company
                            in the context of your industry.
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
                        <h3>Calculate Your Budget</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            The next stage in developing the finest digital
                            marketing strategy for your company is to figure out
                            how much money you have. The budget will determine
                            how much money you must spend on digital marketing
                            and direct you to certain channels, strategies, and
                            methods.
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
                        <h3>Define Digital Channels </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Define your major digital channels before developing
                            a content plan. Your channel selection should be
                            based on your target audience, objectives, and
                            financial constraints.
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
                        <h3>
                          Establish Digital Marketing Tactics And Strategies
                        </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Once you have defined your channels, you will need
                            to develop the digital marketing techniques and
                            strategies you will employ inside them.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fregular-reporting-bg.jpg?alt=media&token=cdad0edd-c40b-44f6-a29e-6b6223a403c1" />
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
                        <h3>Make A Marketing Calendar </h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            A marketing calendar helps you plan out when your
                            digital marketing campaigns and activities will be
                            implemented. It also ensures that you meet deadlines
                            and carry out the strategy properly throughout the
                            year.
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
                        <h3>Measure Your Results And KPIS</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            The final stage in developing a digital marketing
                            strategy and plan is to define metrics and key
                            performance indicators to track your progress
                            (KPIs). You should evaluate the results of your
                            marketing activities to both the baseline and the
                            original objectives.
                          </Scrollbars>
                        </p>
                      </div>
                      <div class="procc_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Famendments-bg.jpg?alt=media&token=59192512-46c8-4601-9919-24557f75108a" />
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
                  <span class="itemDot itemDot5" data-tab="5">
                    <RiNumber5 />
                    <span class="forActive"></span>
                  </span>
                  <span class="itemDot itemDot6" data-tab="6">
                    <RiNumber6 />
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
                    <span>Marketing Experts</span>
                  </h2>
                  <p>
                    Working with an online marketing agency gives you access to
                    a full team of strategists, designers, writers, and SEO
                    experts with diverse skills, knowledge, and experience. This
                    makes more sense than tackling it yourself or hiring a
                    single marketer.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>It is budget-friendly.</span>
                  </h2>
                  <p>
                    According to the poll, organizations who use marketing
                    agencies to develop their strategy spend less per sales lead
                    than companies that manage their marketing or utilize
                    alternative marketing tactics such as outbound marketing.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Leads that are better qualified</span>
                  </h2>
                  <p>
                    Cold calling is not something a creative agency does;
                    instead, they focus on chasing your target audience to
                    produce high-quality, intriguing, and relevant solutions.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Concentrate on your company</span>
                  </h2>
                  <p>
                    When you hire a digital marketing service to handle the
                    heavy lifting relieves you and your team of the stress of
                    marketing, allowing you to devote more time to your most
                    important tasks.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Obtain a neutral viewpoint on the situation</span>
                  </h2>
                  <p>
                    A reputable firm will provide you with sound, practical, and
                    honest recommendations on enhancing your marketing and
                    growing your company. When you want your internal staff to
                    accomplish this for you, however, it might be more difficult
                    for them to communicate, leading to conflicts of interest
                    and arguments. Hiring a consulting firm is the most
                    effective approach to getting objective, timely advice.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem6">
                  <h2 class="title">
                    <span>Make use of innovative technologies</span>
                  </h2>
                  <p>
                    A professional firm will have innovative tools, software,
                    and analytical data at its disposal, which will improve your
                    company's productivity, efficiency, and performance. You
                    will not have to scour the internet for your software,
                    either.
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
                  <h4 className="mb-4">Want to get a high ROI?</h4>
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
                    Sort out your digital marketing needs with the best digital
                    marketing service provider in Kolkata.
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
                          <span>1.</span> What is Digital Marketing and How Can
                          It Help You?
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
                        Digital marketing is a term that combines all forms of
                        marketing that are carried out using electronic devices
                        and some type of computer. This includes internet-based
                        marketing campaigns. To contact customers with digital
                        marketing, a firm may employ websites, search engines,
                        blogs, social media, video, email, and other channels.
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
                          <span>2.</span> Why is digital marketing so important
                          for your company?
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
                        Digital marketing has become the standard for successful
                        businesses and startups. If you are not using it, your
                        company or startup will not develop as quickly as you
                        would like. Businesses have benefited from digital
                        marketing. It may result in increased sales and
                        visibility. Increasing your earnings is your primary
                        aim.
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
                          <span>3.</span> What are the responsibilities of
                          digital marketers?
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
                        Experts in digital marketing know-how to create and
                        implement successful campaigns. An online marketer knows
                        how to interact with a target audience via the internet.
                        They make certain that your brand interacts with your
                        target clients from the initial point of contact through
                        after-sale care.
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
                          <span>4.</span> Do you keep track of your work and
                          offer reports?
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
                        Yes. Our clients receive weekly and monthly updates
                        because we believe in total openness.
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
                          <span>5.</span>What are the finest digital marketing
                          services for my company?
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
                        Most organizations will want a well-designed website
                        with bespoke web analytics integration to improve
                        performance. SEO, PPC, and local SEO services will be
                        required for more leads and sales in the future. The
                        finest internet marketing services for your business are
                        determined by various criteria, including your company's
                        goals, budget, target audience, product/service, and so
                        on.
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
                          <span>6.</span>When it's about digital marketing, how
                          long does it typically take to see results?
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
                        The results of your digital marketing efforts might take
                        anywhere from a few weeks to months to show. Before
                        seeing positive results from a digital marketing plan,
                        you must stick with it for six to twelve months. It will
                        also take longer if you do not repair all parts of your
                        site (from backlinks to content to user experience), do
                        not publish regularly, or do not provide high-quality
                        material.
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

export default DigitalMarketing;
