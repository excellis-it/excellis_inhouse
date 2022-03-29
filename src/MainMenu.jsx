import React, { useState } from "react";
import { Animated } from "react-animated-css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

const MainMenu = () => {
  return (
    <div>
      <nav class="menu">
        <div class="menu_wrapper">
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--3">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/mobile-application"
                  >
                    <span class="sidemenu__item-inner">Mobile Application</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/software-development"
                  >
                    <span class="sidemenu__item-inner">
                      Software Development
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/ui-ux-design"
                  >
                    <span class="sidemenu__item-inner">UI/UX Design</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/web-development"
                  >
                    <span class="sidemenu__item-inner">Web Development</span>
                  </Link>

                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/QA-testing"
                  >
                    <span class="sidemenu__item-inner">QA and Testing</span>
                  </Link>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  It Services
                </p>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--2">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/back-office-process-outsourcing-services"
                  >
                    <span class="sidemenu__item-inner">
                      Back office process outsourcing
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/call-center-outsourcing-service"
                  >
                    <span class="sidemenu__item-inner">
                      Call center outsourcing
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/ecommerce-outsourcing-services"
                  >
                    <span class="sidemenu__item-inner">
                      Ecommerce outsourcing
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/performance-compliance-management"
                  >
                    <span class="sidemenu__item-inner">
                      Performance &amp; Compliance management
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/professional-services"
                  >
                    <span class="sidemenu__item-inner">
                      Profesional Services
                    </span>
                  </Link>

                  {/* <a
                    href="https://www.excellisit.com/innovation-at-excellis"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Innovation at EXCELLIS
                    </span>
                  </a> */}
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Bpo Services
                </p>
              </div>
            </div>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--1 d-none d-sm-block">
              <div class="menu__item-inner">
                <div class="mainmenu">
                  <a class="mainmenu__item">It Services</a>
                  <a class="mainmenu__item">Bpo Services</a>
                  <a class="mainmenu__item">Marketing Services</a>
                  <a class="mainmenu__item">Cad Services</a>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Services We Offered
                </p>
                <div class="menu_address_sec d-none d-sm-flex align-items-center">
                  <div class="menu_mail_sec">
                    <h4>Quick Contact</h4>
                    <li>
                      <a href="mailto:info@excellisit.com">
                        <i class="las la-envelope-open-text"></i>{" "}
                        info@excellisit.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sales@excellisit.com">
                        <i class="las la-envelope-open-text"></i>{" "}
                        sales@excellisit.com
                      </a>
                    </li>
                  </div>
                  <div class="menu_address">
                    <h4>Business Enquiry</h4>
                    <ul>
                      <li>
                        <a href="tel:(+91)8617724646">
                          <img src="https://www.excellisit.com/img/india.png" />
                          <i class="las la-phone-volume"></i>(+91) 861 772 4646{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="menu_certifi_img d-none d-sm-block">
                  <img
                    src="https://www.excellisit.com/img/iso-nascom-msme.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class="profile_download_link">
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/Excellis_profile.pdf?alt=media&token=dede50a8-61f0-4de5-9a8c-5b8c82a1c3ef"
                    target="_blank"
                  >
                    <i class="las la-download"></i> Company Profile
                  </a>
                </div>
                <div class="menu_social">
                  <a
                    href="https://www.facebook.com/excellisIT/"
                    target="_blank"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/excellisit"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/excellis.it/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                  <a href="https://twitter.com/excellisIT" target="_blank">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                  <a href="https://join.skype.com/invite/UtNAdxIp1Dcs">
                    <FaSkype />
                  </a>
                  <a href="https://wa.me/918617724646">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--4">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/about"
                  >
                    <span class="sidemenu__item-inner">About Us</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/partner-with-us"
                  >
                    <span class="sidemenu__item-inner">Partner With Us</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/Portfolio"
                  >
                    <span class="sidemenu__item-inner">Our Portfolio</span>
                  </Link>

                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/career"
                  >
                    <span class="sidemenu__item-inner">Career</span>
                  </Link>
                  {/* <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/Ourblogs"
                  >
                    <span class="sidemenu__item-inner">Blog</span>
                  </Link> */}
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/ContactUs"
                  >
                    <span class="sidemenu__item-inner">Contact Us</span>
                  </Link>
                </div>
                <p class="label label--topleft label--vert-mirror">Company</p>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--5">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/search-engine-optimization"
                  >
                    <span class="sidemenu__item-inner">
                      Search engine Optimization
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/social-media-marketing"
                  >
                    <span class="sidemenu__item-inner">
                      Social media marketing
                    </span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/pay-per-click"
                  >
                    <span class="sidemenu__item-inner">Pay per click</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/email-marketing"
                  >
                    <span class="sidemenu__item-inner">Email Marketing</span>
                  </Link>
                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/content-marketing"
                  >
                    <span class="sidemenu__item-inner">Content Marketing</span>
                  </Link>

                  <Link
                    activeClassName="navbar__link--active"
                    className=" sidemenu__item"
                    to="/google-my-business-optimization"
                  >
                    <span class="sidemenu__item-inner">
                      Google my business optimization
                    </span>
                  </Link>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Marketing Services
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
