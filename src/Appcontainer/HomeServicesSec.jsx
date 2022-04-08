import React from "react";
import Typed from "react-typed";
import { Animated } from "react-animated-css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectCards, Autoplay } from "swiper";
import { Scrollbars } from "react-custom-scrollbars-2";
import Head from "next/head";

const HomeServicesSec = () => {
  return (
    <div>
      <Head>
        <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossorigin="anonymous"
        ></script>
      </Head>
      ;
      <section className="serices_section d-none d-sm-block">
        <div className="arrow_div">
          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/arrow-design.svg?alt=media&token=2d324c90-5008-4ac7-b74d-562cc8fd83e8" />
        </div>
        <div className="section_typing">
          <div class="reveal-holder custom_aos" data-aos="reveal-item">
            <div
              class="reveal-block right custom_aos"
              data-aos="reveal-right"
            ></div>
            <Typed strings={["Services We Provide"]} typeSpeed={150} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-xl-2"></div>
            <div className="col-lg-10 col-xl-10">
              <div className="services_wrapper">
                <div className="services_inner">
                  <div
                    class="nav flex-column nav-pills services_title_list"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <a
                      class="active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <sup>01</sup>IT Services
                    </a>
                    <a
                      class=""
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <sup>02</sup>Marketing Services
                    </a>
                    <a
                      class=""
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <sup>03</sup>BPO Services
                    </a>
                    <a
                      class=""
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <sup>04</sup> CAD Services
                    </a>
                  </div>
                  <div
                    class="tab-content"
                    id="pills-tabContent"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>IT Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                                className="w-40"
                              >
                                <div className="single_services">
                                  <a href="/web-development" className="">
                                    <div className="services_icon development_icon"></div>
                                    <h4>Web Development</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        First impression is the last impression.
                                        If you want your client’s website to be
                                        also the one; you need the help of
                                        experts. Excellis IT’s sole target is to
                                        develop websites that are user friendly
                                        as well as credible.
                                      </Scrollbars>
                                    </p>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                                className="w-60"
                              >
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ui-ux.jpg?alt=media&token=0aaee418-aa51-4409-8df8-95a013231316" />
                                  </div>
                                  <div className="single_img_services">
                                    <a href="/ui-ux-design" className="">
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>UI/UX Design</h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 70 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          Our skilled UI/UX designers are
                                          talented weavers who create
                                          business-driven website as well as
                                          mobile app designs to meet client
                                          needs. At Excellis IT our main goal is
                                          to develop a user centric web and
                                          mobile app design that would provide
                                          the user best in class user
                                          experience.
                                        </Scrollbars>
                                      </p>
                                    </a>
                                  </div>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                                className="w-60"
                              >
                                <a href="/ui-ux-design" className="">
                                  <div className="single_services d-flex p-0 min-h-220">
                                    <div className="singel_img_serv">
                                      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/web-design.jpg?alt=media&token=44917a2f-e71e-4236-a8b9-c235182dcef3" />
                                    </div>
                                    <div className="single_img_services">
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>Web Designing</h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 120 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          While designing a website we keep in
                                          mind that it accurately reflects your
                                          brand as well as the content should be
                                          crisp and to the point so that your
                                          clientele gets to know all your best
                                          points without any hassle.
                                        </Scrollbars>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                                className="w-40"
                              >
                                <a href="/mobile-app-development" className="">
                                  <div className="single_services min-h-220">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Mobile Application</h4>
                                    <Scrollbars
                                      style={{ height: 120 }}
                                      autoHide
                                      autoHideTimeout={1000}
                                      autoHideDuration={200}
                                    >
                                      <p>
                                        Every website these days is mobile
                                        friendly- thus, you require a good
                                        mobile app developer offering services
                                        like cross-platform mobile app
                                        development, android app development and
                                        IOS app development so that one does not
                                        lose out on customers.
                                      </p>
                                      <p>
                                        Excellis IT is among the top mobile app
                                        development companies in Kolkata, India
                                        offering mobile app development services
                                        which is affordable. We create
                                        user-friendly mobile apps to increase
                                        your customer engagement as well as
                                        conversion online.
                                      </p>
                                    </Scrollbars>
                                  </div>
                                </a>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                                className="w-40"
                              >
                                <a href="/software-development" className="">
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Software Development</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Excellis IT has an excellent software
                                        development team who works towards
                                        building innovative products that would
                                        check all the boxes.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </a>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                                className="w-60"
                              >
                                <a href="/QA-testing" className="">
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>QA & Testing</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        As a well-known Software development
                                        Company Our QA and Testing services are
                                        designed in a way that would prevent
                                        issues in your software product or
                                        service as well as make sure that your
                                        user has a great experience with the
                                        software.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </a>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>Marketing Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                                className="w-40"
                              >
                                <div className="single_services">
                                  <a
                                    href="/search-engine-optimization"
                                    className=""
                                  >
                                    <div className="services_icon development_icon"></div>
                                    <h4>Search Engine Optimization</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Excellis IT is an renowned digital
                                        marketing agency that offers the best
                                        SEO services in India. We deal with the
                                        technical aspects like increasing
                                        visibility, site back linking, website
                                        audits, optimizing content, keyword
                                        research, increasing page speed, mobile
                                        optimization and link building. We are
                                        experts in Search Engine Optimization
                                        thus, we help you to boost your search
                                        rankings and become more visible.
                                      </Scrollbars>
                                    </p>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                                className="w-60"
                              >
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/social-media-marketing.jpg?alt=media&token=9c32ded7-059d-44d1-bbdc-2317ae1c63e5" />
                                  </div>
                                  <div className="single_img_services">
                                    <a
                                      href="/social-media-marketing"
                                      className=""
                                    >
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>Social Media Marketing</h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 70 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          Excellis IT, is a leading social media
                                          marketing and optimization company
                                          that extends reliable and
                                          comprehensive services to businesses.
                                        </Scrollbars>
                                      </p>
                                    </a>
                                  </div>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                                className="w-60"
                              >
                                <a
                                  href="/search-engine-optimization"
                                  className=""
                                >
                                  <div className="single_services d-flex p-0 min-h-220">
                                    <div className="singel_img_serv">
                                      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cro.jpg?alt=media&token=82186b79-0044-49e1-8b54-2c9771751b49" />
                                    </div>
                                    <div className="single_img_services">
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>Conversion rate optimisation</h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 120 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          Excellis IT is among the best digital
                                          marketing company in Kolkata, India.
                                          We help in the process of increasing
                                          the percentage of conversions from
                                          your website or mobile app. Thus,
                                          conversion rate conveys the number of
                                          people who engaged with your desired
                                          action.
                                        </Scrollbars>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                                className="w-40"
                              >
                                <Link href="/content-marketing" className="">
                                  <div className="single_services min-h-220">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Content Marketing</h4>
                                    <Scrollbars
                                      style={{ height: 120 }}
                                      autoHide
                                      autoHideTimeout={1000}
                                      autoHideDuration={200}
                                    >
                                      <p>
                                        Excellis IT is the best digital
                                        marketing company in Kolkata, India.
                                        Thus, our Content Marketing experts
                                        closely works with marketing team and
                                        build content stream based on your Brand
                                        Identity and Positioning.
                                      </p>
                                    </Scrollbars>
                                  </div>
                                </Link>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                                className="w-40"
                              >
                                <Link href="/pay-per-click" className="">
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Pay Per Click</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Excellis IT is one of the best digital
                                        marketing company that uses PPC
                                        (Pay-Per-Click) advertising, to target
                                        your audience.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </Link>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                                className="w-60"
                              >
                                <Link href="/email-marketing" className="">
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Email Marketing</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Excellis IT is among the trusted
                                        Do-It-Yourself email marketing service
                                        provider used by a number of businesses
                                        when they need to send email campaigns.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </Link>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      .
                      <div id="" className="">
                        <div className="services_item">
                          <h2>BPO Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                                className="w-40"
                              >
                                <div className="single_services">
                                  <a
                                    href="/call-center-outsourcing-service"
                                    className=""
                                  >
                                    <div className="services_icon development_icon"></div>

                                    <h4>Call Center Outsource Services</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        If you are looking for ways to boost
                                        your business and give it that
                                        competitive edge? Our call centre
                                        outsourcing services would definitely
                                        assist you in that matter.
                                      </Scrollbars>
                                    </p>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                                className="w-60"
                              >
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/Back-Office-Process-Outsourcing.jpg?alt=media&token=2d82bf42-75ed-4bd2-a767-5c80f6ceb30d" />
                                  </div>
                                  <div className="single_img_services">
                                    <a
                                      href="/back-office-process-outsourcing-services"
                                      className=""
                                    >
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>Back-Office Process Outsourcing</h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 70 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          Our back-office process outsourcing
                                          services help the business to grow and
                                          move on to a bigger and better
                                          venture.
                                        </Scrollbars>
                                      </p>
                                    </a>
                                  </div>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                                className="w-60"
                              >
                                <a
                                  href="/performance-compliance-management"
                                  className=""
                                >
                                  <div className="single_services d-flex p-0 min-h-220">
                                    <div className="singel_img_serv">
                                      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/Performance-%26-Compliance-Management.jpg?alt=media&token=415d8bc5-dd4c-4b4e-ab86-19293db903d9" />
                                    </div>
                                    <div className="single_img_services">
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>
                                        Performance & Compliance Management
                                      </h4>
                                      <p>
                                        <Scrollbars
                                          style={{ height: 120 }}
                                          autoHide
                                          autoHideTimeout={1000}
                                          autoHideDuration={200}
                                        >
                                          Excellis IT provides performance and
                                          compliance solution that measure your
                                          business and legal compliance and
                                          value at risk, while effectively
                                          meeting the regulatory and business
                                          compliance norms.
                                        </Scrollbars>
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                                className="w-40"
                              >
                                <Link
                                  href="/professional-services"
                                  className=""
                                >
                                  <div className="single_services min-h-220">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Professional Services</h4>
                                    <Scrollbars
                                      style={{ height: 120 }}
                                      autoHide
                                      autoHideTimeout={1000}
                                      autoHideDuration={200}
                                    >
                                      <p>
                                        Excellis IT offers professional services
                                        restructure that helps in providing wide
                                        range of consulting services for more
                                        sophisticated clients.
                                      </p>
                                    </Scrollbars>
                                  </div>
                                </Link>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                                className="w-40"
                              >
                                <Link
                                  href="/ecommerce-outsourcing-services"
                                  className=""
                                >
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>E-Commerce Outsourcing Services</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Our E-commerce outsourcing services
                                        assist you in managing your everyday
                                        operations seamlessly sparing enough
                                        time to focus on strategic business
                                        plan.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </Link>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                                className="w-60"
                              >
                                <Link href="/about" className="">
                                  <div className="single_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Innovation at Excellis It</h4>
                                    <p>
                                      <Scrollbars
                                        style={{ height: 70 }}
                                        autoHide
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}
                                      >
                                        Excellis IT has innovative plans and
                                        ideas that fit all of your company’s
                                        needs and would help increase your
                                        business.
                                      </Scrollbars>
                                    </p>
                                  </div>
                                </Link>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>CAD Services</h2>
                          <div className="services_change">
                            <Animated
                              animationIn="fadeInUp"
                              animationOut="fadeOut"
                              isVisible={true}
                              animationInDelay={100}
                            >
                              <div className="services_row">
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/architechture.jpg?alt=media&token=fa2e35be-9234-47fb-8c47-ac13c3bad19d" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>Architecture</h4>
                                    <p>
                                      Excellis IT has a team of skilled
                                      architects who offers a plethora of
                                      Architectural BIM services which includes
                                      conversion of design drawings to accurate
                                      construction documents and 3D models with
                                      parametric families.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Animated>
                            <Animated
                              animationIn="fadeInUp"
                              animationOut="fadeOut"
                              isVisible={true}
                              animationInDelay={200}
                            >
                              <div className="services_row">
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/mechanical.jpg?alt=media&token=298e7dde-8744-408f-9050-f112603cd8b6" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>Mechanical</h4>
                                    <p>
                                      A team of highly experienced Mechanical
                                      Modelers at Excellis IT provides
                                      mechanical engineers, product designers &
                                      developers precise Mechanical 3D modelling
                                      services which aims at improving
                                      productivity and efficiency of the
                                      manufacturing process.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Animated>
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
      </section>
      <section class="res_tab_sec d-block d-sm-none">
        <div class="container">
          <div class="res_tab">
            <div class="overflow_tab">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    <sup>01</sup> IT Services
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    <sup>02</sup> Marketing Services
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    <sup>03</sup> BPO Services
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabs-4"
                    role="tab"
                  >
                    <sup>04</sup> CAD Services
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <Swiper modules={[]} grabCursor={true} dot>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fweb_development.png?alt=media&token=7d76f2a0-07a6-4f52-bfcd-6093c1cd90df" />
                        </div>
                        <h4>Web Development</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            First impression is the last impression. If you want
                            your client’s website to be also the one; you need
                            the help of experts. Excellis IT’s sole target is to
                            develop websites that are user friendly as well as
                            credible.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fweb_design.png?alt=media&token=cf97ed0f-ef1d-45f4-899b-80222e87ebb4" />
                        </div>
                        <h4>Web Designing</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            While designing a website we keep in mind that it
                            accurately reflects your brand as well as the
                            content should be crisp and to the point so that
                            your clientele gets to know all your best points
                            without any hassle.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fui_ux.png?alt=media&token=52b10214-2eba-4c93-829f-cfbcf6861266" />
                        </div>
                        <h4>UI / UX Design</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Our skilled UI/UX designers are talented weavers who
                            create business-driven website as well as mobile app
                            designs to meet client needs. At Excellis IT our
                            main goal is to develop a user centric web and
                            mobile app design that would provide the user best
                            in class user experience.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fmobile_app.png?alt=media&token=2b539898-a284-4a55-a22e-14145175060f" />
                        </div>
                        <h4>Mobile Application</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Every website these days is mobile friendly- thus,
                            you require a good mobile app developer offering
                            services like cross-platform mobile app development,
                            android app development and IOS app development so
                            that one does not lose out on customers. Excellis IT
                            is among the{" "}
                            <b>
                              top mobile app development companies in Kolkata,
                              India
                            </b>{" "}
                            offering mobile app development services which is
                            affordable. We create user-friendly mobile apps to
                            increase your customer engagement as well as
                            conversion online.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fsoftware_deve.png?alt=media&token=b6cfb897-2a23-4620-99e0-0cecfcef7328" />
                        </div>
                        <h4>Software Development</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT has an excellent software development
                            team who works towards building innovative products
                            that would check all the boxes.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fqa_testing.png?alt=media&token=c71a8419-5a56-48ed-814a-02965886836b" />
                        </div>
                        <h4>QA And Testing</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            As a well-known <b>Software development Company</b>{" "}
                            Our QA and Testing services are designed in a way
                            that would prevent issues in your software product
                            or service as well as make sure that your user has a
                            great experience with the software.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="tab-pane" id="tabs-2" role="tabpanel">
                <Swiper
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                >
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fseo_seo.png?alt=media&token=a88e1d2b-c0c4-42b6-a5fd-71c1f8f6c9dd" />
                        </div>
                        <h4>Search Engine Optimization</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT is an renowned{" "}
                            <b>digital marketing agency</b> that offers the{" "}
                            <b>best SEO services in India.</b> We deal with the
                            technical aspects like increasing visibility, site
                            back linking, website audits, optimizing content,
                            keyword research, increasing page speed, mobile
                            optimization and link building. We are experts in
                            Search Engine Optimization thus, we help you to
                            boost your search rankings and become more visible.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fsocial_media.png?alt=media&token=04ce90c9-43a3-429a-a585-cb01a9f38782" />
                        </div>
                        <h4>Social Media Marketing</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT, is a leading social media marketing and
                            optimization company that extends reliable and
                            comprehensive services to businesses.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fppc.png?alt=media&token=33d4844a-e5f1-43d1-8577-b182fa471423" />
                        </div>
                        <h4>Pay Per Click</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT is one of the best digital marketing
                            company that uses PPC (Pay-Per-Click) advertising,
                            to target your audience.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Femail_marketing.png?alt=media&token=3da6486f-656f-48c7-aebf-b3666b9b8494" />
                        </div>
                        <h4>Email Marketing</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT is among the trusted Do-It-Yourself
                            email marketing service provider used by a number of
                            businesses when they need to send email campaigns.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fcontent_mar.png?alt=media&token=a4f5641c-bc50-4a27-a276-b2b42df53b3b" />
                        </div>
                        <h4>Content Marketing</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT is the{" "}
                            <b>
                              best digital marketing company in Kolkata, India.
                            </b>{" "}
                            Thus, our Content Marketing experts closely works
                            with marketing team and build content stream based
                            on your Brand Identity and Positioning.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fcon_ra_op.png?alt=media&token=dab9e32f-cf56-418e-bd43-2e2efdb62172" />
                        </div>
                        <h4>Conversion Rate Optimisation</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT is among the{" "}
                            <b>
                              best digital marketing company in Kolkata, India.
                            </b>{" "}
                            We help in the process of increasing the percentage
                            of conversions from your website or mobile app.
                            Thus, conversion rate conveys the number of people
                            who engaged with your desired action.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="tab-pane" id="tabs-3" role="tabpanel">
                <Swiper
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                >
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fcall_center.png?alt=media&token=5320c58a-4a37-466e-9676-26e4590618ac" />
                        </div>
                        <h4>Call Center Outsource Services</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            If you are looking for ways to boost your business
                            and give it that competitive edge? Our call centre
                            outsourcing services would definitely assist you in
                            that matter.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fback_office.png?alt=media&token=f4e10419-d189-4982-a359-b4c871361947" />
                        </div>
                        <h4>Back-Office Process Outsourcing Services</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Our back-office process outsourcing services help
                            the business to grow and move on to a bigger and
                            better venture.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fecommrce_o.png?alt=media&token=3a4f23b6-bafd-46c7-a7b8-1f0e9e917872" />
                        </div>
                        <h4>E-Commerce Outsourcing Services</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Our E-commerce outsourcing services assist you in
                            managing your everyday operations seamlessly sparing
                            enough time to focus on strategic business plan.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fprofessional.png?alt=media&token=884a546d-dbac-47ef-9194-e0b0fc6f053b" />
                        </div>
                        <h4>Professional Services</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT offers professional services restructure
                            that helps in providing wide range of consulting
                            services for more sophisticated clients.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fperformance_complin.png?alt=media&token=467fd902-f8a6-420b-8195-42077e46abee" />
                        </div>
                        <h4>Performance & Compliance Management</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT provides performance and compliance
                            solution that measure your business and legal
                            compliance and value at risk, while effectively
                            meeting the regulatory and business compliance
                            norms.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Finnovation_ex.png?alt=media&token=b1a02885-6188-449e-945a-0328100b9a52" />
                        </div>
                        <h4>Innovation at Excellis It</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT has innovative plans and ideas that fit
                            all of your company’s needs and would help increase
                            your business.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div class="tab-pane" id="tabs-4" role="tabpanel">
                <Swiper
                  modules={[EffectCards]}
                  effect="cards"
                  grabCursor={true}
                >
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Farchtecture.png?alt=media&token=2f6a964c-1481-4151-854b-c383ec1482e3" />
                        </div>
                        <h4>Architecture</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            Excellis IT has a team of skilled architects who
                            offers a plethora of Architectural BIM services
                            which includes conversion of design drawings to
                            accurate construction documents and 3D models with
                            parametric families.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="swiper-slide-item">
                      <div class="res_single_services">
                        <div class="img_icon_ser">
                          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/digital-icon%2Fmechanical.png?alt=media&token=eecc11ed-4701-494c-adf8-be146e2197cc" />
                        </div>
                        <h4>Mechanical</h4>
                        <p>
                          <Scrollbars style={{ height: 170 }}>
                            A team of highly experienced Mechanical Modelers at
                            Excellis IT provides mechanical engineers, product
                            designers & developers precise Mechanical 3D
                            modelling services which aims at improving
                            productivity and efficiency of the manufacturing
                            process.
                          </Scrollbars>
                        </p>
                        <a href="">Explore More...</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeServicesSec;
