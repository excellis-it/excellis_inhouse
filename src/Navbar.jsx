import React, { useState, useEffect } from "react";
import Link from "next/link";
import MainMenu from "./MainMenu";
import Toggle from "./Toggle";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = ({ activeStatus }) => {
  const [show, setShow] = React.useState();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const indiamap =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/india.png?alt=media&token=a7594991-9855-4e67-a094-a20b095aaf58";
  const usamap =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/united-states.png?alt=media&token=0a2e6299-5598-42fe-8ee9-f15e4a920825";

  const logo =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/shadow-logo.png?alt=media&token=e109619a-0fa8-4107-8666-d42d30b4730f";
  const logoicon =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/icon.png?alt=media&token=011a9301-ab67-4720-b403-7ffc908f4291";

  return (
    <div>
      <div className="top_social_medi">
        <ul className="d-flex align-items-center justify-content-start mb-0">
          <li>
            <a href="https://www.facebook.com/excellisIT/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/excellisIT">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/excellis.it/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/excellisit">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://join.skype.com/invite/UtNAdxIp1Dcs">
              <FaSkype />
            </a>
          </li>
          <li>
            <a href="https://wa.me/918617724646">
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA">
              <FaYoutube />
            </a>
          </li>
        </ul>
      </div>
      <section className="top_header_section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-7">
              <div className="iso_sec">
                <a href="#">ISO 9001:2015 Certified</a>
              </div>
            </div>
            <div className="col-md-8 col-5">
              <div className="top_right_content">
                <ul className="d-flex align-items-center justify-content-end mb-0">
                  <li>
                    <a href="mailto:info@excellisit.com">
                      <i className="ph-envelope-simple"></i> info@excellisit.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918617724646">
                      <img src={indiamap} className="mr-2" alt="india flag" />{" "}
                      (+91) 861 772 4646
                    </a>
                  </li>
                  <li>
                    <a href="tel:1(518)660-0841">
                      <img src={usamap} className="mr-2" alt="usa flag" />1
                      (518) 660-0841
                    </a>
                  </li>

                  {/* <li>
                    <a href="#" className="text-yellow2">
                      <i className="ph-phone-call"></i> Book a Call
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <Toggle /> */}
          </div>
        </div>
      </section>
      <section id={scroll ? "fixed" : "no-fixed"} className="main_nav_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg pr-0">
                <div className="logo">
                  <Link href="/">
                    <img className="" src={logo} alt="" />
                    {/* <img className="header_icon" src={logoicon} alt="" /> */}
                  </Link>
                </div>
                <button className="menu_open" onClick={() => setShow(true)}>
                  <i className="ph-list"></i>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-end pr-5"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className={activeStatus == "home" ? "active" : ""}>
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className={activeStatus == "about" ? "active" : ""}>
                      <a className="nav-link" href="/about">
                        About Us
                      </a>
                    </li>
                    <li className={activeStatus == "services" ? "active" : ""}>
                      <a exact className="nav-link" href="/OurServices">
                        Services
                      </a>
                    </li>
                    <li className={activeStatus == "partner" ? "active" : ""}>
                      <a exact className="nav-link" href="/partner-with-us">
                        Partner With Us
                      </a>
                    </li>
                    <li className={activeStatus == "process" ? "active" : ""}>
                      <a exact className="nav-link" href="/process">
                        Process
                      </a>
                    </li>
                    {/* <li className={activeStatus == "blog" ? "active" : ""}>
                      <Link exact className="nav-link" href="/Ourblogs">
                        Blog
                      </Link>
                    </li> */}
                    <li className={activeStatus == "contact" ? "active" : ""}>
                      <a exact className="nav-link" href="/contact-us">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className={`fullscreennav ${show ? "show" : ""}`}>
        <MainMenu />
        <button className="action action--close" onClick={() => setShow(false)}>
          <i className="ph-x"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
