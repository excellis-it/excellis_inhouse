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

const ContentMarketing = () => {
  const title = "Content Marketing";
  const description =
    "Tell your brand story and increase your traffic, generate leads, improve impression as well as enhance ROI.";

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
          Best Content Marketing Company and Agency in India: Excellis IT
        </title>
        <meta
          name="description"
          content="Excellis IT is a leading digital content marketing company and agency in Kolkata, India. We guarantee that our content reaches the accurate audience for the right impact. Contact us +91 861 772 4646."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/content-making/"
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
                  <h1 class="BannerServices__Subheader">Content Marketing</h1>
                  <p>
                    It’s very important to create a personal profile with your
                    content creation which would bring more value to your
                    audiences. The main reason for content marketing and
                    strategy is to focus your audience's view towards the right
                    direction by telling them what they need to know and the
                    things that they are interested in.
                  </p>
                  <p>
                    {" "}
                    With this point in mind, you should also make sure that you
                    personalize and target your posts after analyzing the
                    audience insights so that you can increase your reach and
                    engagement per post.
                  </p>
                  <p>
                    Excellis IT is the leading digital content marketing agency
                    in Kolkata, India; thus, we help you develop a content
                    marketing strategy that allows you to get loyal enthusiasts
                    and followers. We do it by figuring out the ache points of
                    your prospects and customers and endorsing topics that you
                    can deal with for your content.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/inner_about_image%2Fcontent-marketing.jpg?alt=media&token=68747fde-60bb-4a50-b4e7-83016599fbae"
                    alt="Content Marketing"
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
                        <h4>Content Strategy </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Content marketing strategy includes creating a
                            result-oriented strategy as well as analysis. You
                            can do this by analyzing your current marketing
                            content, by performing a competitor analysis, by
                            content keywords research. And by having a
                            convincing strategy to generate leads as well as
                            increase sales.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Audience Analysis </h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We have a specialized team to analyze your target
                            audience.
                          </p>
                          <ul>
                            <li>• They identify the right audience</li>
                            <li>
                              {" "}
                              • While understanding the buyer’s personality
                            </li>
                            <li>
                              • They also identify the favored content type
                              along with the platform
                            </li>
                            <li>• They create engaging content. </li>
                          </ul>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Content Creation</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            You must be creating high-quality, keyword-rich,
                            eye-catching, as well as consistent content. The
                            content should be properly written, edited, as well
                            as proofread so that it increases brand engagement
                            level along with traffic
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Content Publication & Distribution</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our experts understand the need for good content
                            along with strategic publishing as well as
                            distribution so that they can reach the target
                            prospects. We can achieve this by publishing and
                            distributing content regularly on their social media
                            platforms as well as blogs and articles. We also
                            create email marketing and newsletter campaigns.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Content Analysis</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            The content that gets you results as well as
                            generates leads is of optimal value. For this, we
                            perform a comprehensive analysis of the content
                            regularly. We do this by analyzing the weekly as
                            well as monthly content reports, we identify the
                            gaps that are there in between content and then
                            accordingly change metrics to increase return on
                            investment.
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
                    To gain customers with your brand story.
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
                  <span>Why Hire </span> Content Marketer from us
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
                    Expert
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
                    Experienced
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
                    Reporting
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
                    Results
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
                    End-to-end Services
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
                    Campaigns
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
                    <h4>Expert Content Writers </h4>
                    <p>
                      We have an expert team of content writers who are skilled
                      at writing the best, error-free content that would help
                      you attract your target audience.
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
                    <h4>Experienced Content Marketers </h4>
                    <p>
                      Excellis IT is among the best content marketing company in
                      Kolkata, India. Thus, we have a team of professional and
                      skilled content marketers who have the experience to
                      provide you with the best services.
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
                    <h4>Regular Campaign Reporting </h4>
                    <p>
                      The popular content marketing agency like Excellis IT
                      provides a regular report to their client of all the
                      content marketing activities they perform so that their
                      clients know whether they are getting the return on their
                      investment.
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
                    <h4>Measurable Results </h4>
                    <p>
                      While providing the best content marketing services in
                      Kolkata, India, Excellis IT provides content marketing
                      campaigns that would bring you measurable as well as
                      trackable results in terms of traffic, leads, as well as
                      conversions.
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
                    <h4>End-to-end Services</h4>
                    <p>
                      – Excellis IT is a content marketing company in Kolkata,
                      India that provides you end-to-end services which begin
                      with copywriting, move on to proofreading, management, and
                      end with the distribution.
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
                    <h4> Tailored Campaigns</h4>
                    <p>
                      We provide custom or tailor-made services that would be
                      perfect for your business and the goals that you want to
                      achieve with our best content marketing services.
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
                    <h4>Blog Post creation </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Blog is an important tool to educate the audience about
                        your brands' offerings as well as cultivate loyal
                        customers. Excellis IT can help you with research and
                        development, planning an overall content strategy, as
                        well as populating your content calendar with unique
                        content that has been curated by our content team and
                        SEO team.
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
                    <h4>Infographic and content creation </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Infographic is a form of storytelling that helps in
                        understanding complex concepts simply as well as
                        attracts the target audience. Excellis IT helps you in
                        creating effective infographics that would be embedded
                        in blogs as well as websites to drive action.
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
                    <h4>SEO content writing </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT will work with you to create product
                        descriptions, value propositions, landing page copy, as
                        well as other website copy, it will all be designed in a
                        way that would maximize readability and conversion.
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
                    <h4>Press release </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We also create the content for press releases which is
                        required for your digital PR, which would compel the
                        readers to go through the PR. The PR is designed in a
                        way that it would get maximum reach and promotion.
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
                    <h4>Article creation </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Posting articles regularly drives more traffic to your
                        website. Being a reputed digital content marketing
                        agency in Kolkata, India, we have skilled content
                        writers who create the best and most knowledge-based
                        articles for your website.
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
                    <h4>Newsletter </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Newsletters help to generate traffic to your website. If
                        you have an active newsletter, you can constantly remind
                        your customers about your brand offerings.
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
                    <h4>Case studies </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Case studies are a great way to show off your business
                        as well as help you turn leads into customers. Your case
                        study has the power to make or break a sale, thus, you
                        must get them right.
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
                    <h4>Social media </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Regular posting on social media platforms helps in
                        spreading brand awareness as well as direct traffic to
                        your website and landing pages. Being a digital content
                        marketing agency in Kolkata, India, our content along
                        with design experts creates visually appealing social
                        media that would bring in traffic.
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
                    <h4>Video script writing </h4>
                    <Scrollbars
                      style={{ height: 150 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Video Content is becoming popular these days. Instead of
                        spending hours reading pages of the detailed content
                        audience today wants something that is quick and on the
                        go, this video is the best format. Being a popular
                        content marketing agency in Kolkata, India, we have an
                        expert team of content writers who create interesting
                        video scripts which would be an effective mode of
                        communication for your brand.
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
                        <h3>Initial Content Research</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We start with auditing your present content to see
                            where you stand and at the same time we also perform
                            keyword research to check your present ranking.
                            After that, we move on to further keyword research
                            to see what keywords you should be targeting as well
                            as analyze your competitors' content and see what
                            were the hit for them.
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
                        <h3>Content Marketing Strategy</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            After gathering all the information we come up with
                            a content strategy that includes the details that we
                            have observed, we would recommend, for game-changing
                            success. We also identify buyer persona and curate
                            content that would be specific to them. Thus, making
                            it easier to connect to our target audience.
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
                        <h3>Content Creation</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We create content after discussing all the key
                            details with you which includes in-depth research on
                            the topic, the target audience for the content as
                            well as the buyers’ journey. After finalizing all
                            these details our team of content creators writes
                            the content that would be perfect for your brand.
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
                        <h3>Publishing and Promotion</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Once the content gets approved we publish the
                            content for you like the blogs go on blogging sites
                            and then we promote the content organically through
                            paid campaigns so the visibility of the content
                            increases.
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
                        <h3>Analytics</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            Best content brings you more leads. After the
                            content is published we constantly monitor the
                            content to check what works and what doesn’t and
                            alter the strategy accordingly. We do this so that
                            your page can yield more results.
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
                    <span>High-Quality Content Creation </span>
                  </h2>
                  <p>
                    marketing strategy becomes effective only when your content
                    is well written keeping your target audience in mind. This
                    would make your content accessible to your audience.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>Consistent Content Creation </span>
                  </h2>
                  <p>
                    When you have consistent content in regards to quality,
                    quantity, and content schedule would not confuse your
                    customers. When you keep up with regular strategy it helps
                    to create an excellent customer experience, builds
                    credibility, reputation as well as brand trust.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Cohesive Messaging </span>
                  </h2>
                  <p>
                    An expert content creator knows how to tie the language and
                    brand elements with a cohesive marketing strategy that makes
                    each content appealing to the target audience, matches the
                    brand identity, performs well within search engines, and
                    eventually achieves the business’ goals.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Strategic Content Creation</span>
                  </h2>
                  <p>
                    It’s a process of creating content that would be specific
                    for the client and would be specifically curated for their
                    target audience so that they can easily content with your
                    brand. Thus, content marketing is an art well as science and
                    for that you surely need experts.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Content Optimization </span>
                  </h2>
                  <p>
                    To make sure that your content reaches your audience you
                    must optimize your content. Content optimization requires
                    skills and understanding of your audience thus you need
                    experts. We at Excellis IT have the best content marketing
                    team.
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
                    Stories connect better than normal ads. Tell your brand
                    story with us.
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
                    Content is the king. Strat creating with us.
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
                          <span>1.</span> What is content marketing?
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
                        Content marketing means posting content that includes
                        articles, podcasts, videos, social media updates, etc.
                        to your website so that it helps to solve problems as
                        well as position your brand along with enhancing your
                        website’s search results.
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
                          <span>2.</span> Should I use content marketing?
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
                        It is very essential for every digital marketing
                        strategy as it needs to have the perfect content
                        marketing component. Content marketing is also a very
                        smart SEO tactic that has been effective throughout
                        every search engine algorithm change.
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
                          <span>3.</span>Does content marketing work?
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
                        It does work like a charm. Content marketing has been
                        proven to be an essential component of any digital
                        marketing strategy. If you not creating content for your
                        website or social media you might be just missing out on
                        valued opportunities.
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
                          <span>4.</span> How often should I post content?
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
                        Frequency of content marketing rest on several factors.
                        Excellis IT prefers to give priority to quality over
                        frequency. We recommend creating a content schedule that
                        would mix several mediums and help you maintain regular
                        posting.
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

export default ContentMarketing;
