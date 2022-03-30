import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <div>
      <section class="newsletter_sec">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7">
              <div class="newsletter_text">
                <h4>
                  {" "}
                  Subscribe to <span>our newsletter</span>
                </h4>
                <p>Sign up to our newsletter and we’ll keep you updated</p>
                <SubscribeForm />
              </div>
            </div>
            <div class="col-md-5">
              <div class="newsletter_image">
                <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/newsletter.png?alt=media&token=0f69103b-41f3-4067-886f-1afd3189c9ae" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="reveal-holder custom_aos" data-aos="reveal-item">
        <div
          class="reveal-block right custom_aos"
          data-aos="reveal-right"
        ></div>
        <section class="footer_sec">
          <footer id="section10" class="section footer">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="footer_ect_sec">
                    <ul>
                      <li>
                        <img
                          class="footer_logo"
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/footer_logo.png?alt=media&token=5c7ba5d3-c1fe-4361-adca-491394a29645"
                          alt=""
                        />
                      </li>
                      <li class="mt-3">
                        <p>
                          <b>Our clients in other countries:</b>
                        </p>
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/country.png?alt=media&token=58bc069a-d146-4450-ae65-bd6fca88b33a"
                          class="img-fluid"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="col-md-4">
                      <h6>IT Services</h6>
                      <div class="footer-links footer_menu d-flex">
                        <ul>
                          <li>
                            <Link to="/mobile-application">
                              <FaArrowRight />
                              Mobile Application
                            </Link>
                          </li>
                          <li>
                            <Link to="/software-development">
                              <FaArrowRight />
                              Software Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/ui-ux-design">
                              <FaArrowRight />
                              UI/UX Design
                            </Link>
                          </li>
                          <li>
                            <Link to="/web-development">
                              <FaArrowRight />
                              Web Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/QA-testing">
                              <FaArrowRight />
                              QA and Testing
                            </Link>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/CAD-drawing-services">
                              <FaArrowRight />
                              CAD Services
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <h6>BPO Services</h6>
                      <div class="footer-links footer_menu d-flex">
                        <ul>
                          <li>
                            <a href="https://www.excellisit.com/back-office-process-outsourcing-services">
                              <FaArrowRight />
                              Back office process outsourcing
                            </a>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/call-center-outsourcing-service">
                              <FaArrowRight />
                              Call center outsourcing{" "}
                            </a>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/ecommerce-outsourcing-services">
                              <FaArrowRight />
                              Ecommerce outsourcing
                            </a>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/performance-compliance-management">
                              <FaArrowRight />
                              Performance &amp; Compliance
                            </a>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/professional-services">
                              <FaArrowRight />
                              Profesional Services
                            </a>
                          </li>
                          <li>
                            <a href="https://www.excellisit.com/innovation-at-excellis">
                              <FaArrowRight />
                              Innovation at EXCELLIS
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <h6>Marketing Services</h6>
                      <div class="footer-links footer_menu d-flex">
                        <ul>
                          <li>
                            <a href="/search-engine-optimization">
                              <FaArrowRight />
                              Search engine Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/social-media-marketing">
                              <FaArrowRight />
                              Social media marketing
                            </a>
                          </li>
                          <li>
                            <a href="/pay-per-click">
                              <FaArrowRight />
                              Pay per click
                            </a>
                          </li>
                          <li>
                            <a href="/email-marketing">
                              <FaArrowRight />
                              Email Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/content-marketing">
                              <FaArrowRight />
                              Content Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/google-my-business-optimization">
                              <FaArrowRight />
                              Google my business optimization
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright_sec">
              <div class="container">
                <div class="row">
                  <div class="col-md-5">
                    <div class="copyright">
                      <p>© 2022 all rights reserved | v-0.3</p>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="copyright_menu">
                      <ul>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/terms-and-condition">
                            Term and Condition
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">About Excellis</Link>
                        </li>
                        {/* <li>
                          <Link to="/Ourblogs">Learning Center</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Footer;
