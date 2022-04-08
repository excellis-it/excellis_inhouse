import Navbar from "../../src/Navbar";
import { Animated } from "react-animated-css";

const MainServices = () => {
  return (
    <div>
      <Navbar activeStatus="services" />
      <section className="main_servics_sec">
        <div className="main_services_inner">
          <div className="container-fluid pl-0 pr-0">
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-services"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={100}
                      >
                        <div className="main_services_content">
                          <div className="main_services_content_inner">
                            <h4>OUR SOLUTIONS</h4>
                            <p>
                              “Let experts handle your back-office processes so
                              you can focus on what you do best. Rather than get
                              caught up in processes and workflows that are
                              slowing your office down, turn to EXCELLIS IT, a
                              BPO management company to help you overcome the
                              obstacles you face.”
                            </p>
                          </div>
                        </div>
                      </Animated>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-it"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={100}
                      >
                        <div className="it_services_nav_sec">
                          <div className="it_services_title">
                            <h4>IT Services</h4>
                          </div>
                          <div className="it_servies_list_item">
                            <ul>
                              <li>
                                <a href="/mobile-app-development">
                                  Mobile Application
                                </a>
                              </li>
                              <li>
                                <a href="/software-development">
                                  Software Development
                                </a>
                              </li>
                              <li>
                                <a href="/ui-ux-design">UI / UX Design</a>
                              </li>
                              <li>
                                <a href="/web-development">Web Developemnt</a>
                              </li>
                              <li>
                                <a href="/QA-testing">QA & Testing</a>
                              </li>
                              <li>
                                <a href="#"></a>
                              </li>
                            </ul>
                          </div>
                          <div className="services_graphics_nav_sec">
                            <img
                              className="img-fluid"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/it-services.jpg?alt=media&token=07bdda06-d8e6-402b-8410-02daba2c7382"
                            />
                          </div>
                        </div>
                      </Animated>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-marketing"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={100}
                      >
                        <div className="it_services_nav_sec">
                          <div className="it_services_title">
                            <h4>Marketing Services</h4>
                          </div>
                          <div className="it_servies_list_item">
                            <ul>
                              <li>
                                <a href="/search-engine-optimization">
                                  Search engine Marketing
                                </a>
                              </li>
                              <li>
                                <a href="/social-media-marketing">
                                  Social media marketing
                                </a>
                              </li>
                              <li>
                                <a href="/pay-per-click">Pay per click</a>
                              </li>
                              <li>
                                <a href="/email-marketing">Email Marketing</a>
                              </li>
                              <li>
                                <a href="/content-marketing">
                                  Content Marketing
                                </a>
                              </li>
                              <li>
                                <a href="/google-my-business-optimization">
                                  Google my business optimization
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="services_graphics_nav_sec">
                            <img
                              className="img-fluid"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/marketing-services.jpg?alt=media&token=c9992bed-1126-46ab-812f-af0252ee19d7"
                            />
                          </div>
                        </div>
                      </Animated>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-bpo"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={100}
                      >
                        <div className="it_services_nav_sec">
                          <div className="it_services_title">
                            <h4>BPO Services</h4>
                          </div>
                          <div className="it_servies_list_item">
                            <ul>
                              <li>
                                <a href="/back-office-process-outsourcing-services">
                                  Back office process outsourcing
                                </a>
                              </li>
                              <li>
                                <a href="/call-center-outsourcing-service">
                                  Call center outsourcing
                                </a>
                              </li>
                              <li>
                                <a href="/ecommerce-outsourcing-services">
                                  Ecommerce outsourcing
                                </a>
                              </li>
                              <li>
                                <a href="/performance-compliance-management">
                                  Performance & Compliance management
                                </a>
                              </li>
                              <li>
                                <a href="/professional-services">
                                  Profesional Services
                                </a>
                              </li>
                              <li>
                                <a href="/about">Innovation at EXCELLIS</a>
                              </li>
                            </ul>
                          </div>
                          <div className="services_graphics_nav_sec">
                            <img
                              className="img-fluid"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/bpo-services.jpg?alt=media&token=edc2f9e7-ba2a-46fb-b7f0-eb0b575a068a"
                            />
                          </div>
                        </div>
                      </Animated>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-cad"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <Animated
                        animationIn="fadeInUp"
                        animationOut="fadeOut"
                        isVisible={true}
                        animationInDelay={100}
                      >
                        <div className="it_services_nav_sec">
                          <div className="it_services_title">
                            <h4>CAD Services</h4>
                          </div>
                          <div className="it_servies_list_item">
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Architecture</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Mechanical</a>
                              </li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                            </ul>
                          </div>
                          <div className="services_graphics_nav_sec">
                            <img
                              className="img-fluid"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/cad-services.jpg?alt=media&token=1abb673a-98ad-43ca-8977-2cf35277a111"
                            />
                          </div>
                        </div>
                      </Animated>
                    </div>
                  </div>
                  <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active services_title_link"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-services"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Our Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-it"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        IT Services <i class="ph-plus"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-marketing"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Marketing Services <i class="ph-plus"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-bpo"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        BPO Services <i class="ph-plus"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-cad"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        CAD Services <i class="ph-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MainServices;
