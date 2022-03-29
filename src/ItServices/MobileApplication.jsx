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

const MobileApplication = () => {
  const title = "Mobile Application";
  const description =
    "“Are you looking for a reputable android app development company or hybrid app development company? Do not stress out; Excellis IT is the mobile app development agency you can hire fot to-of-the-line mobile app development services.”";

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
          Mobile App Developers, App Development Company in Kolkata, India:
          Excellis IT
        </title>
        <meta
          name="title"
          content="Mobile App Developers, App Development Company in Kolkata, India: Excellis IT"
        />
        <meta
          name="description"
          content="Excellis IT is an award-winning mobile app development company and agency in Kolkata, India. Hire mobile app developers to build android, iOS, and cross-platform apps for mobile devices. "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link
          rel="canonical"
          href="https://www.excellisit.com/mobile-app-development/"
        />
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
                    Best mobile app development company – Excellis IT
                  </h1>
                  <p data-aos="fade-down" data-aos-duration="2000">
                    With the industry's fast technical improvements, mobile
                    applications are gaining traction. These smart applications
                    are effective business tools that bring value to your
                    company, boost productivity, and expand your client base. By
                    building a tighter relationship with clients, mobile
                    applications may help you expand the reach of your brand.
                  </p>
                  <p>
                    Excellis IT, a prominent mobile app development company in
                    Kolkata, India, claims to provide best-in-class mobile app
                    development services and solutions to all industry
                    verticals. We have a proven record of accomplishment of
                    delivering hundreds of successful mobile applications to our
                    worldwide clients while ensuring complete client
                    satisfaction.
                  </p>
                  <p>
                    The diversity and complexity of your project needs are not
                    the matter for us as we handle the whole mobile app
                    development cycle, from app ideation through production. A
                    skilled team of mobile app developers with considerable
                    experience in international app solution services and
                    product engineering supports our dedication to offering
                    high-quality mobile app development services in Kolkata,
                    India. At Excellis IT, we strive to improve your business
                    efficiency by streamlining business operations and
                    integrating essential functions into one seamless pattern.
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
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/mobile-application.jpg?alt=media&token=077572ec-50e3-4ee8-8476-461a6796c7ea"
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
                        <h4>Strategy and mobile app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Just a small portion of our capabilities are
                            reflected in the mobile apps we develop. As an
                            experienced mobile app development company in
                            Kolkata, India, we know what it takes to turn
                            unformed ideas into breath-taking realities. Each
                            project of ours is unique and requires individual
                            attention after working on a variety of mobile app
                            development projects. Thus, we collaborate closely
                            with our clients and devote a significant amount of
                            time to research and preparation.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Designing a UI and UX for mobile devices</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We put our imagination to work to find fresh
                            solutions to previous issues. We have a skilled team
                            of app designers and prototype engineers who will
                            always discover a solution to your challenge and
                            will construct a one-of-a-kind path to your mobile
                            app development needs. Our UI/UX designers follow
                            Apple App Store and Google Play Store's design
                            principles to produce user-friendly, feature-rich,
                            and visually appealing apps that do not sacrifice
                            functionality. All these factors will aid in
                            increasing user retention, dwell time, and app
                            downloads.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Development of a custom mobile app</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Excellis IT creates a mobile app that would be
                            perfect for your company's app demands, regardless
                            of how little or large your app requirement is. We
                            have a team of the best mobile app developers in
                            Kolkata, India, that have years of expertise
                            building applications for a variety of sectors and
                            can create any sort of functionality for your app.
                            Excellis IT collaborates closely with you to
                            understand your objectives and offer solutions that
                            exceed user expectations.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Android app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Android apps are the most demanding kinds of apps as
                            increased people these days are on Android-based
                            devices. Excellis IT is an all-inclusive mobile app
                            development company in Kolkata, India; our team of
                            skilled Android app developers offers the best
                            mobile app development services to our global
                            clients.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>IOS app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            To build iOS applications, you require knowledge as
                            well as experience so that you can handle the
                            complexities of the complete development process. We
                            have the best iOS app developers to have the
                            required knowledge and experience to develop iOS
                            applications that are rich in features, robust,
                            compatible, and secure. We deliver successful iOS
                            applications that would gain instant App Store
                            approval.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>iPad app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We have provided world-class iPad app development
                            services to a variety of businesses, entrepreneurs,
                            and huge corporations in a variety of industries.
                            Our iPad app development team makes strategic use of
                            iPad OS and its innovative capabilities to provide
                            consumers with quicker and more responsive app
                            experiences. Our iPad apps are built using a shared
                            understanding of user needs and expectations, as
                            well as iPad design and development best practices.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Windows app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Windows Mobile is popular to be a rich feature
                            operating system that includes all the Windows
                            Mobile apps, like Windows Media Player, Office, as
                            well as Internet Explorer. We look into the
                            reliability and various features of Windows as a
                            top-notch mobile app development company in Kolkata,
                            India, to design highly customized and user-centric
                            apps for your Smartphone and other mobile devices.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Hybrid app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            These mobile app development services have gained
                            traction in the industry because of the increased
                            need for feature-rich, secure, and scalable apps
                            across various platforms among businesses and
                            customers. A hybrid app perfectly blends unique
                            aspects, technologies, as well as processes that
                            work seamlessly across various platforms, has great
                            speed and performance, also takes less time to
                            develop. We promise completely tailored hybrid
                            mobile apps that fit your specific business needs as
                            a dependable mobile application development firm.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Native app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We deliver world-class native mobile app development
                            services to help your business grow and reach a
                            larger audience as a respected mobile app
                            development company in Kolkata, India. These apps
                            provide the most appealing features, like 3D Touch,
                            multitasking, Beacon Technology, and much more.
                            Designing and building native apps for iOS, Android,
                            and Windows mobile platforms are among our native
                            app development services.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Flutter app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            If you want to provide your Android and iOS apps
                            with the finest possible user experience, Flutter
                            app development is the way to go. Our talented app
                            developers use Flutter app development technologies
                            including XCode, Flutter, Swift, Ionic, Android SDK,
                            Java, Objective C, Node.js, React/React.js, PHP,
                            Vue.js, and Angular.js to create apps with rich,
                            flexible, and sophisticated UI/UX designs, native
                            performance, and more.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Ionic app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            In the world of app development, ionic app
                            development is gaining traction. Ionic application
                            development enables the creation of highly
                            compatible and feature-rich apps that provide a
                            natural user experience across numerous platforms or
                            devices. Our skilled app developers have extensive
                            expertise and understanding of the famous Angular.js
                            framework, which includes HTML, CSS, and JavaScript
                            components with tremendous features.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>PhoneGap app development</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            PhoneGap is a free, open-source development
                            framework that allows our app developers to create
                            cross-platform mobile apps with HTML, CSS, and
                            JavaScript. These programs are not entirely
                            web-based and are packaged as native apps using open
                            standards. PhoneGap applications share a common code
                            base and may operate on a variety of platforms and
                            devices. PhoneGap app development is the answer you
                            need if you are seeking a cost-effective,
                            native-app-like app solution.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>PWA development solutions</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our professional app developers apply their
                            extensive knowledge of progressive web application
                            technology, mobile app development, and web
                            application development to offer crucial
                            functionality and a consistent user experience. Our
                            developers are using PWA technology to revolutionize
                            brands, expand their reach to new prospects, and
                            achieve long-term benefits.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Enterprise mobility solutions</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Our mobile app development firm in Kolkata, India,
                            uses the most up-to-date technologies, frameworks,
                            and SDKs to create complex, enterprise-level apps
                            that help businesses solve difficult business
                            challenges while also providing scalability and
                            security. Our app developers can assist you if you
                            require end-to-end business mobility solutions.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Mobile app testing</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            A piece of software will always have bugs and
                            technical difficulties. Our quality analysts ensure
                            that the app is thoroughly tested using a variety of
                            test modules to produce bug-free app products. Our
                            skilled QA team will assist you by delivering the
                            best mobile app testing services if you want to give
                            your app a health check-up.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Mobile app launching</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            We not only design high-quality mobile apps, but we
                            also help you launch app-on-app markets
                            successfully. When your program satisfies all your
                            specs and functions, our mobile app development team
                            uploads it to the Google Play Store or Apple App
                            Store.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>App store optimization</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            A mobile app development company's responsibility
                            includes not only designing apps for customers but
                            also ensuring that they reach the top of the App
                            Store and provide the required outcomes. We use our
                            extensive expertise and knowledge of both app stores
                            to develop a unique strategy for increasing app
                            awareness. Our innovative technologies and devoted
                            mobile app developers in Kolkata are ready to help
                            you achieve the desired top spot for your app.
                          </p>
                        </Scrollbars>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single_inner_services">
                        <h4>Support and upkeep of your app</h4>
                        <Scrollbars style={{ height: 100 }}>
                          <p>
                            Excellis IT provide app support along with
                            maintenance services 24 hours a day, seven days a
                            week, as one of the leading mobile app development
                            company in Kolkata, India. Our knowledgeable support
                            and maintenance staff is always available to assist
                            you. Simply contact our support service, and our
                            professionals will resolve any of your questions and
                            concerns. In addition, we provide ongoing
                            maintenance services to guarantee that your
                            application is up to date and running well.
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
                  <h4 className="mb-4">Want a technically sound mobile app?</h4>
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
                  <span>Why Hire </span> a mobile app developer from us
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
                    Skilled team
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
                    Transparency
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
                    Assurance and Assistance
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
                    Creative strategy
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
                    Software and advanced tools
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
                    Expertise
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
                    Cost-Benefit
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
                    <h4>Skilled team</h4>
                    <p>
                      We have skilled mobile app developers for you from start
                      to finish as a mobile app development firm.
                    </p>
                    <p>
                      {" "}
                      We have a track record of delivering high-quality Mobile
                      Apps Development services and solutions that meet or
                      exceed our clients' expectations.
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
                    <h4>Transparency</h4>
                    <p>
                      Being honest and trustworthy allows us to form the
                      greatest possible relationships with our valued clients to
                      get repeat business.
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
                    <h4>Assurance and Assistance</h4>
                    <p>
                      We never cut corners when it comes to offering
                      high-quality services to our customers and giving ongoing
                      support based on dialogue.
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
                    <h4>Assurance and Assistance</h4>
                    <p>
                      We never cut corners when it comes to offering
                      high-quality services to our customers and giving ongoing
                      support based on dialogue.
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
                    <h4>Creative strategy</h4>
                    <p>
                      We make sure that our one-of-a-kind user interface and
                      creative approach are both aesthetically attractive and
                      relevant to the customer's industry.
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
                    <h4>Software and advanced tools</h4>
                    <p>
                      Excellis IT professionals employ innovative technologies
                      and software in the fields of social media and digital
                      marketing, as well as strong industry relationships.
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
                    <h4>Expertise</h4>
                    <p>
                      We have a full-fledged staff of digital marketing
                      specialists, social media influencers, creative writers,
                      and designers that are well-versed in the intricacies of
                      UI and UX.
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
                    <h4>Cost-Benefit</h4>
                    <p>
                      Client study reveals that investing in us as a long-term
                      partner is less expensive than the alternative.
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
                    <h4>Development of Android apps</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT offers full-stack Android app development in
                        India to meet your business or operational needs.
                        Excellis IT, being the finest Android app development
                        company, has consistently exceeded our own previously
                        established benchmarks while offering the best android
                        app development services to our clients.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Developing iOS Apps</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        The Excellis IT team is a group of professionals with
                        extensive experience in the field of information
                        technology iOS app development, iPhone app development,
                        iPad app development, and Apple watch IoT app
                        development are all areas of our expertise. We are
                        frequently confronted with technological marvels,
                        timeliness challenges, and, in many cases, Innovations,
                        all of which we successfully deliver on time and on
                        budget.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Developing Flutter Apps</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT, as one of the top online and mobile app
                        development firms, provides next-generation app
                        development services based on Google's ground-breaking
                        Flutter platform. Hiring our Flutter app development
                        services helps you create multi-platform apps with a
                        pleasing user interface, smooth animations, and high
                        performance.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>App development with React Native.</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT is a leading react native app development
                        company that creates high-quality apps using react js.
                        Our team of specialists has created thousands of
                        successful business apps for clients all over the world
                        by using the react js platform for app development. Our
                        react native app developers have many years of expertise
                        managing complex client requests and can help any
                        business owner acquire the exact sort of app that their
                        firm requires.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Swift Apps Development</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Swift is an Apple-developed programming language that is
                        quick, secure, general-purpose, and contemporary, with
                        several features that make developing iOS apps easier.
                        We develop Swift programs for Apple's tvOS, iPhone,
                        macOS, and watchOS platforms, covering everything from
                        systems programming to desktop, mobile, and cloud
                        services. From strategy through UX/UI design,
                        programming, testing, and final delivery/deployment, our
                        Swift app development services cover it all.
                      </p>
                    </Scrollbars>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="single_expertise text-center">
                    <h4>Developing Ionic Apps</h4>
                    <Scrollbars
                      style={{ height: 100 }}
                      className="expertise_single_cont"
                    >
                      <p>
                        Excellis IT's Ionic app development team has expertise
                        with a variety of web technologies and can design
                        outstanding hybrid mobile apps that are not just
                        browser-based but also include iOS UI WebView and
                        Android WebView wrapped in tools like PhoneGap and
                        Cordova.
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
                          Our mobile smartphone app development company has
                          expertise in creating m-health apps that will provide
                          you with better access to healthcare and help you
                          avoid diagnostic mistakes.
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
                          Our mobile app development teams can create eCommerce
                          apps with a simple user interface and a pleasant user
                          experience. Our clients may also rely on us to develop
                          retail eCommerce solutions.
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
                        <h4>Advertising & Publishing</h4>
                        <p>
                          Hundreds of publishing and advertising organizations
                          have benefited from our smartphone app development
                          services, which have helped them carry out and
                          expedite business activities.
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
                    <span>Exceptional Profit</span>
                  </h2>
                  <p>
                    For large projects requiring a lot of methodical operating,
                    a mobile application development business will be useful.
                    Professionals with a thorough understanding of such
                    technological fields should be entrusted with such
                    systematic duties carried out by massive investment
                    programs. You may also benefit from their assistance at each
                    stage. They have analytical abilities and can advise you on
                    which application would be most beneficial to your business.
                  </p>
                  <i class="fa fa-clock-o"></i>
                </div>

                <div class="CirItem title-box CirItem2">
                  <h2 class="title">
                    <span>Budget-Friendly</span>
                  </h2>
                  <p>
                    It is also quite economical to hire a mobile app development
                    company in Kolkata, India. Employing a freelancer is a far
                    better option. The mobile app development firm will bill you
                    on an hourly or one-time basis. There will be an
                    unchangeable agreement. As a result, your overhead costs
                    will be reduced, making the operation of the mobile
                    application both inexpensive and not a financial drain.
                  </p>
                  <i class="fa fa-comments"></i>
                </div>

                <div class="CirItem title-box CirItem3">
                  <h2 class="title">
                    <span>Expert Technical Knowledge and a Trusted Source</span>
                  </h2>
                  <p>
                    You will be able to manage business chores more easily while
                    planning for automation through the application if you hire
                    a mobile app development firm. It is critical to select a
                    committed developer with proven experience. The team will
                    oversee all aspects of app development and will be able to
                    meet all the application's needs.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem4">
                  <h2 class="title">
                    <span>Workflow is not hampered.</span>
                  </h2>
                  <p>
                    Companies that specialize in mobile app development can
                    provide you with an innovative process that ensures inquiry
                    response in the shortest amount of time possible. By
                    establishing well-tested communication models, you will be
                    able to contact project managers whenever you need them and
                    have access to thorough project reports. In addition,
                    finding solutions in the event of disagreements is simple.
                  </p>
                  <i class="fa fa-user"></i>
                </div>
                <div class="CirItem title-box CirItem5">
                  <h2 class="title">
                    <span>Supportive Environment</span>
                  </h2>
                  <p>
                    You do not have to burden yourself with managing the system
                    once you engage a mobile app developer. Even after the
                    product has been delivered, the IT consultant or mobile app
                    development team will assist you with all technical issues.
                    A firm with a strong portfolio, a pleasant working
                    environment, and qualified employees assumes responsibility
                    for meeting your demands on all levels. All you must do now
                    is pay the company's president and unwind.
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
                    Do you wish to acquire all the benefits at best price?{" "}
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
                    Allow us to lift the technical burden off your shoulders.
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
                          <span>1.</span> Cross-platform applications vs. native
                          apps: which is the best option?
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
                        Native applications are the best choice for you if you
                        want long-term development, a seamless user experience,
                        high-performance, and responsive solutions.
                        Cross-platform application development is the way to go
                        whether you want to create a gaming app or an app that
                        will help you reach a larger audience and expand your
                        user base.
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
                          <span>2.</span> Is it feasible to combine the app
                          solution with my current CRM, website, or web system?
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
                        Yes, you may share the API documentation for your
                        current app with our mobile app specialists if you have
                        it. After that, our staff will let you know whether you
                        can connect the app with your app solution.
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
                          <span>3.</span> Are mobile applications preferable to
                          mobile websites?
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
                        Mobile applications provide a superior user experience,
                        are faster to load content, and are more user-friendly.
                        With the use of gestures, users may do activities more
                        quickly. In addition, unlike a website, a well-designed
                        mobile app provides easy navigation and impressive
                        performance.
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
                          <span>4.</span> What services do you provide for
                          mobile app development?
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
                        Bespoke app development, custom mobile app development,
                        iOS/Android app development, interactive AR and VR apps,
                        wearable apps, and more are among our mobile app
                        development services.
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
                          <span>5.</span>How much must one pay to develop a
                          mobile app in India?
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
                        How much you pay for designing and developing a mobile
                        application is determined by a variety of criteria,
                        including complexity, platform, UI/UX, number of
                        screens, and features.
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
                          <span>6.</span>Can you develop a mobile application
                          for iOS and Android?
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
                        Yes. All the apps that we design to support both Android
                        as well as iOS mobile platforms. The apps we create work
                        across mobile along with web devices; this integrates
                        development frameworks that include, React Native and
                        React, which helps in backing up both platforms.
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

export default MobileApplication;
