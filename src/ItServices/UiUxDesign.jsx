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

const UiUxDesign = () => {
  const title = "UI UX Design";
  const description =
    "UX is all about learning, observing, ideating, iterating, and testing. Our skilled UI/UX designers in Kolkata are weavers that create business-driven website designs to meet client needs. ";

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
          Best UI and UX Design Company in Kolkata, India: Excellis IT
        </title>
        <meta
          name="title"
          content="Best UI and UX Design Company in Kolkata, India: Excellis IT"
        />
        <meta
          name="description"
          content="Excellis IT is one of the best UI and UX Design companies in Kolkata, India. We offer UX research & design, UI development services for enterprises, and startups worldwide."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.excellisit.com/ui-ux-design/" />
      </Helmet>
      <Navbar />
      <InnerBanner title={title} description={description} />
      <section class="inner_page_first">
        <div class="s-BannerServices bg_dark">
          <div class="l-ContentColumn container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="company_intro">
                  <h1
                    class="BannerServices__Subheader h1--WithLine"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Creative Design, Hands-on Approach with Excellis IT
                  </h1>
                  <p data-aos="fade-down" data-aos-duration="2000">
                    The importance of smart design in digital success is
                    something we at Excellis IT recognize. The demands of
                    start-ups are met by our people-first, engaging, and
                    enjoyable strategic designs. In India, we provide a full
                    range of Graphic and UI and UX design Services providing
                    Company in Kolkata, including branding, mobile app design,
                    responsive site design, promotional graphics, and user
                    experience consultancy utilizing innovative tools and
                    technologies.
                  </p>
                  <p>
                    We build adaptable and responsive designs with uniform
                    cross-platform compatibility with a unique combination of
                    current technology and innovative ideas. Excellis IT is
                    recognized for its hands-on knowledge and creative flair in
                    all UI/UX design elements, having worked in the field for
                    over a decade. Our team of specialists knows what it takes
                    to create a reputable brand from a design standpoint and how
                    to do so using contemporary technologies and ideas. We help
                    customers succeed by simple designs that leave an impression
                    on the user's mind, increasing brand recognition and
                    loyalty.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/inner_about_image%2Fui-ux-design.jpg?alt=media&token=e4c8dc07-0eb2-4f69-91a5-1b665890e76b"
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
                        <h4>iOS App's UI/UX Design</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            With flawless designs, we create intuitive, durable
                            apps. To build flexible designs across many screen
                            sizes, we use tools like Xcode or Sketch Constraints
                            while creating. Our designs are based on the HIG
                            (Human interface guidelines) for iOS ideas and
                            architecture. We create apps that function together
                            using the Apple platform's strong features.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>UI/UX Android App Design</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our goal for a brilliant design and improved
                            experience is to provide a consistent experience
                            across all devices and platforms. As a result, we
                            use Google's suggested Adaptive UI in our Apps.
                            Maintaining homogeneity is essential with so many
                            devices and screen sizes. Excellis IT's Android
                            mobile apps services provide a wonderful user
                            experience, robust performance, and high build
                            quality.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Designing a Custom Web App</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            When creating a bespoke application, it is common to
                            want to create a one-of-a-kind user experience and
                            interface. Our team specializes in gathering
                            requirements, scoping the functionality of your
                            application, and then building a user experience
                            that will help your users, clients, and customers
                            achieve the best possible results.
                          </p>
                          <p>
                            Custom websites and applications need a distinct
                            feel and appearance. Our bespoke UI/UX web
                            application design services in Kolkata, India will
                            produce innovative user interfaces for your project.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Designing a Landing Page</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            In your marketing and advertising activities,
                            landing pages are quite important. You can make the
                            most of these sites by using expert landing page
                            design services. Excellis IT's bespoke landing page
                            designs will help you increase income, sales, and
                            lead quality.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>AR experience design</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            For brands to express stories about their services
                            and goods, we build design reality experiences.
                          </p>
                          <p>
                            By combining AR with design, we think that we can
                            create some of the most innovative tech-savvy
                            designs, assisting companies with the definition of
                            content and experience.
                          </p>
                          <p>
                            Brands and customers can now get technology that
                            powers augmented reality (AR), virtual reality (VR),
                            and mixed reality (MR). Our team of designers,
                            design reality strategists, and creative
                            technologists will work with you to make your
                            concept commercially viable. Whatever your goals
                            are, we will do all we can to ensure your money is
                            well spent.
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
                    To get better experience and unique website design
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
                  <span>Why Hire </span> a UI UX designer from us
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
                    id="pills-why2-tab"
                    data-toggle="pill"
                    href="#pills-why2"
                    role="tab"
                    aria-controls="pills-why2"
                    aria-selected="true"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Fexperience.png?alt=media&token=9713b80a-d008-4073-bea3-c2c2a1c04ccb"
                      alt=""
                    />
                    Experience
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
                    Attractive Visuals
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
                    Contentment of customers
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
                    Expertise
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
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Freport.png?alt=media&token=98081286-1f75-48af-a528-48cfe6e1bf29"
                      alt=""
                    />
                    Cost-effective and timely
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
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Freport.png?alt=media&token=98081286-1f75-48af-a528-48cfe6e1bf29"
                      alt=""
                    />
                    talented designers
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-why8-tab"
                    data-toggle="pill"
                    href="#pills-why8"
                    role="tab"
                    aria-controls="pills-why8"
                    aria-selected="false"
                  >
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-marketing%2Freport.png?alt=media&token=98081286-1f75-48af-a528-48cfe6e1bf29"
                      alt=""
                    />
                    Design for a certain product
                  </a>
                </li>
              </ul>
              <div
                class="tab-content why_pill_tab_content"
                id="pills-tabContent"
              >
                <div
                  class="tab-pane fade show active"
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
                    <h4>User Experience is Outstanding</h4>
                    <p>
                      Our designs give the best-in-class user interface and user
                      experience to our worldwide consumers. We ensure that our
                      clients get the greatest design services possible,
                      focusing on users, simplicity, and usability.
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
                    <h4>Attractive Visuals</h4>
                    <p>
                      Our designers employ modern approaches and technology to
                      build effective and unique mobile and online apps. In
                      addition, we provide engaging UI/UX visual solutions that
                      may convert potential visitors into loyal clients, helping
                      to meet future demands and improvements.
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
                    <h4>Contentment of customers</h4>
                    <p>
                      While employing efficient and perfect apps, we ensure that
                      end-users feel happier and more empowered. Therefore, we
                      can create the most interesting apps with world-class
                      designs that provide the end-user with the best possible
                      experience.
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
                    <h4>Expertise in a Wide Range of Markets</h4>
                    <p>
                      Excellis IT's extensive IT industry expertise in various
                      technologies demonstrates our global success. In addition,
                      our professionals understand where they came from and
                      where they are now. This is the result of all our efforts.
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
                    <h4>Cost-effective and timely</h4>
                    <p>
                      Our graphic and UI-UX design solutions are quick,
                      economical, and successful in doubling your user base,
                      thanks to tight cooperation with start-ups and unique
                      concepts. On-time submissions are important to us, and our
                      team of designers and engineers is here to help.
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
                    <h4>A team of talented designers</h4>
                    <p>
                      Our skilled UI/UX designers employ innovative technology
                      to create powerfully, one-of-a-kind, visually attractive
                      websites, mobile, and online apps. We provide end-users
                      with intentional user experiences built with mind-blowing
                      designs that provide an experience.
                    </p>
                  </Animated>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-why8"
                  role="tabpanel"
                  aria-labelledby="pills-why8-tab"
                >
                  <Animated
                    animationIn="fadeInUp"
                    animationOut="fadeOut"
                    isVisible={true}
                    animationInDelay={10}
                    className="wht_tab_inner"
                  >
                    <h4>Design for a certain product</h4>
                    <p>
                      We have a creative design team that creates engaging and
                      dynamic UI/UX designs that leave a lasting impact on
                      end-users and target audiences. In addition, we develop
                      product-specific apps for all screen sizes, platforms, and
                      dev apps.
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
                    <h4>Prototyping and wireframing</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        User experience has been revolutionized through modern
                        prototyping and wireframing. We have a team of
                        professional designers who conduct in-depth research to
                        identify user requirements that need to be addressed,
                        define the problem that needs to be solved, establish a
                        clear hypothesis, and build a prototype with the
                        solutions to the problems as one of the top UI and UX
                        design company in Kolkata, India.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Research UX</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We think that UX research has a significant impact on
                        your business and the UI/UX of your website as a
                        reputable UX design agency in Kolkata, India. We have a
                        capable UX research team that uses advanced user
                        experience research to determine what your users want
                        and desire and attempt to collect feedback and make
                        appropriate modifications.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Visual communication</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        We use graphic design components that are aesthetically
                        attractive and enable visual communication in the UI/UX
                        of your website as a well-known UI design business. Our
                        UI and UX designers collaborate to make the user
                        experience and navigation as simple as possible so that
                        your company can produce more conversions.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Designing interfaces</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        The structure and behavior of interactive systems are
                        addressed through interaction design. With great UI/UX,
                        we have a large team of interaction designers working to
                        establish meaningful and intuitive links between your
                        brand and your target audience.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Coding</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Our graphic and UI/UX designers also have a rudimentary
                        understanding of coding, enabling them to connect with
                        our development team simply and efficiently. This
                        guarantees that our design and development teams
                        communicate and debate designs in the same language. Our
                        UI/UX designers benefit from a rudimentary understanding
                        of coding since it allows them to keep their design
                        ideas within reasonable bounds.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Analytical</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Thanks To Powerful Analytics Tools, our UI/UX designers
                        begin the design process with a data-driven approach. We
                        can also detect and measure the outcomes created by the
                        UI/UX we build for you using analytics. This allows you
                        to calculate your return on investment and see what our
                        UI/UX team has produced for you.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>The structure of information</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        The user experience is enhanced by a deliberately
                        planned and user-friendly information structure. One of
                        the most important parts of your UX design is
                        information architecture. Our information architecture
                        team organizes data, websites, and mobile applications,
                        and ensures that consumers can simply traverse your
                        website and app. We discover common elements in your
                        content, arrange related information items into groups,
                        and optimize your website for search engine results
                        pages (SERPs).
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Adobe XD</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        UI/UX designers in Kolkata, India, may utilize Adobe XD
                        to create and exploit a component library that they can
                        use to reference and implement common UI components,
                        established patterns, and interaction details throughout
                        the website or app. The software enables the production
                        of elaborate interactive prototypes and device reviews,
                        and online revisions.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Sketch</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        For huge UI/UX projects, Sketch is a fantastic tool.
                        UI/UX designers can create templates quickly and
                        integrate them into your project. This makes it easier
                        for our designers to extract components and keep design
                        elements consistent across the user experience. As a
                        result, our designers utilize Sketch for UI/UX as part
                        of our UI/UX development.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Proto.io</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Proto.io is a fantastic tool for UI/UX designers, with
                        features such as robust UI component libraries,
                        ready-made templates, out-of-the-box UI components,
                        intense icon library, large library for animated icons,
                        perfect sound effects library, audio component uploading
                        feature, video component uploading feature, aftereffects
                        animation feature, scrollable containers, reusable
                        containers, WebView components, and HTML code
                        components. Proto.io, briefly, makes designing for our
                        UI/UX designers exceedingly simple and convenient.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Webflow</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Webflow makes creating visuals for interaction design
                        concepts a lot easier. In addition, Webflow allows
                        designers to do all their design work on the same
                        platform without code. Webflow also includes a content
                        management system (CMS) that enables designers to work
                        on numerous pages simultaneously, bridging the gap
                        between design and development.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Balsamiq</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Balsamiq is a low-fidelity wireframing application that
                        allows designers to quickly generate visual
                        representations of many types of user interfaces. Due to
                        its extensive prototyping and wireframing features,
                        Balsamiq is ideal for conveying design concepts.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Axure</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Our designers build flexible and responsive UI/UX design
                        layouts with Axure. Axure has useful tools such as
                        built-in widgets to assist designers with wireframing.
                        It also has a simple drag-and-drop interface that allows
                        designers to create browser-based prototypes without
                        code.
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
                          We provide software for the healthcare industry that
                          automates patient management, lab management, test
                          result processing, and data collecting.
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
                          Our UI/UX services can help manufacturers gain
                          confidence
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
                          Hire Excellis IT experts with extensive experience
                          developing online and mobile solutions for the travel
                          and tourism industry to meet all your unique
                          requirements.
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
                          We create retail and e-commerce software that
                          automates company processes and improves the shopping
                          experience for customers.
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
                        <h4>Logistics</h4>
                        <p>
                          We create innovative logistics software to improve
                          warehouse productivity and streamline the supply
                          chain.
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
                        <h3>Research</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We are obtaining information that will assist us in
                            creating the best User Experience possible, one that
                            stands out from the crowd. After we have finished
                            our research, we will focus on developing methods
                            for creating wireframes and prototypes, which will
                            help us establish the style guides, typography,
                            icons, and other components used in the final
                            design.
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
                        <h3>Strategy</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            We finalize the business goals, features, and
                            specifics to add, among other things, at this step.
                            We also make a concerted effort to comprehend your
                            brand's concept, tone, and other finer points that
                            define it. Our team ensures that the app or website
                            we create is a natural extension of your brand.
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
                        <h3>Design</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            The design phase is where the user interface design
                            service comes into play. Again, Excellis IT's
                            creativity shines through as a UI/UX design company
                            in Kolkata, India. We start by brainstorming and
                            sketching potential designs for the basic app or
                            website, including aspects that have been finalized
                            during the planning step.
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
                        <h3>Iterate and Develop</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            The designers develop teamwork in tandem to code
                            your app or website. The objective is to get your
                            app or website in front of as many people as
                            possible and as fast as possible so that you may
                            obtain feedback that you can utilize in the
                            iteration stage. In addition, our team will
                            incorporate all required features and aspects into
                            the app or website.
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
                        <h3>Delivery</h3>
                        <p>
                          <Scrollbars
                            style={{ height: 100 }}
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                          >
                            After designing, getting your permission, and
                            producing resources for the many resolutions and
                            devices that need support, the focus is on quick
                            distribution and getting useful feedback from end
                            customers. Finally, after providing the final
                            solution to you, we also offer maintenance services.
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
                  Benefits of Hiring UI UX design Services
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
                    <span>Increase traffic</span>
                  </h2>
                  <p>
                    Excellis IT, a leading graphic and UI-UX design company in
                    Kolkata, India, assists customers in building brand
                    recognition through its UX/UI designers. Members of our
                    experienced staff have previously worked for well-known
                    businesses. They have created websites for their clients
                    that are practical, appealing, and powerful, resulting in
                    increased traffic and product sales.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>Consider the opinions of your customers.</span>
                  </h2>
                  <p>
                    We do not immediately begin designing and developing a
                    website following a meeting with potential clients. Instead,
                    the first thing we do is an attempt to figure out the
                    customers' goals, what type of business they are in, who
                    their target audience is, and what they have planned. Then,
                    we design the greatest website for the company's improvement
                    and prosperity while keeping all these factors in mind.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>A team of experts</span>
                  </h2>
                  <p>
                    Our talented UX and UI design team also guarantee that our
                    client's websites load quickly, so they do not run into any
                    problems attracting new consumers. In addition, members of
                    our design and development teams provide clients with simple
                    yet effective solutions.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Assist with audience selection</span>
                  </h2>
                  <p>
                    We also do everything we can to assist our clients in
                    keeping their current consumers and attracting new ones to
                    their websites.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Have a connection that lasts a long time.</span>
                  </h2>
                  <p>
                    Even after the project has been submitted, Excellis IT, a
                    prominent UI design services company in Kolkata, strives to
                    retain a long and healthy connection with the clients.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem6">
                  <h2 class="title">
                    <span>User-friendly interface</span>
                  </h2>
                  <p>
                    Excellis IT, India's most reputable UX design business, has
                    a talented and creative graphic and UX/UI development team
                    with years of web application, website design, and mobile
                    application development expertise. They can instantly design
                    a user-friendly interface that gives the viewers a pleasant
                    experience.
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
                    Do you have a unique idea? Let's work together to create
                    greatness!
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
                    Our UI UX Design Services may completely change the way you
                    do business!
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
          <div className="row">
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
                          <span>1.</span> Is it UI or UX that matters more?
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
                        The phrases User Interface (UI) and User Experience (UX)
                        are the most misunderstood in the digital market. A UI
                        without UX is like a painter splattering paint on a
                        canvas without thinking about it, whereas UX without UI
                        is like a sculpture's frame without any paper Mache. The
                        user experience (UX) is usually the first step in
                        creating an excellent product. Both are important to the
                        success of the product.
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
                          <span>2.</span> What are your service-designing
                          business models like?
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
                        There are various business model examples to pick from.
                        Of course, the traditional business model will change
                        based on the industry and the problem you attempt to
                        address for your customers. However, some business
                        concepts are more well-known and effective across
                        various sectors. For example, subscription and freemium
                        business models are common in Software as a Service
                        (SaaS) organizations.
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
                          <span>3.</span> What is the time taken to develop a
                          software program?
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
                        It depends on the features and amount of data you give
                        your consumers. For example, some apps require only a
                        few items on each screen or attribute (title, picture,
                        date, author, and so on) to build a relevant preview
                        dependent on the kind of content. In contrast, others
                        demand multiple elements on each screen or attribute
                        (title, picture, date, author, and so on).
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
                          <span>4.</span> What is the average cost of UI/UX
                          design?
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
                        The price of UI/UX may appear to be a nebulous concept.
                        Design gets close to being art at times. As a result,
                        estimating the exact length of time required to deploy
                        it is difficult. A designer's initial appraisal is
                        usually based on past expertise.
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
                          <span>5.</span>What advantages can a good UX design
                          provide to my company?
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
                        Here are some of the benefits of a strong UX design for
                        your company:
                        <ul>
                          <li> User Interaction has been improved </li>
                          <li>Gaining more customers </li>
                          <li>Obtaining insightful data </li>
                          <li> Increased revenue-generating possibilities</li>
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

export default UiUxDesign;
