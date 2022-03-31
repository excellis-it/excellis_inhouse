import React from "react";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import Navbar from "../Navbar";
import LocationOnMap from "../../src/Appcontainer/LocationOnMap";
import { Helmet } from "react-helmet";

const ContactUs = ({ activeStatus }) => {
  const title = "Contact Us";
  const description = "";

  return (
    <div>
      <Helmet>
        <title>
          Contact Us to Get Full Stack Development, Digital Marketing, and BPO
          Services
        </title>
        <meta
          name="description"
          content="Contact us for Full Stack Development, Digital Marketing, and BPO Services requirements. You can also contact us to hire dedicated developers, designers, and digital marketing experts for your projects."
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="canonical" href="https://www.excellisit.com/contact-us" />
      </Helmet>
      <Navbar activeStatus="contact" />
      <InnerBanner title={title} description={description} />

      <section class="contact_us__body_section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-4">
              <div className="contact_page_left_content">
                <div class="contact_us__body_title_wrapper">
                  <h4>IT ALL STARTS WITH A CONVERSATION</h4>
                  <p>
                    Simply fill in a few details in our contact form or get in
                    touch with us by email with your iqueries.
                  </p>
                </div>
                <div class="points point-1 mt-60">
                  <h5 class="point__header">
                    <span>1.</span>Research
                  </h5>
                  <p class="point__body">
                    Simply fill in a few details in our contact form or get in
                    touch with us by email with your iqueries.
                  </p>
                </div>
                <div class="points point-2">
                  <h5 class="point__header">
                    <span>2.</span> Analyse
                  </h5>
                  <p class="point__body">
                    Our analysis team will dig deep into your business
                    requirements and process.
                  </p>
                </div>
                <div class="points point-3">
                  <h5 class="point__header">
                    <span>3.</span>Solutions
                  </h5>
                  <p class="point__body">
                    Our consultants will get back to you within next 48 hours
                    with the best possible solution for your business.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-8 ">
              <div class="left_foo_con_sec contact__form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Your Name<sup>*</sup>
                      </label>
                      <input type="text" class="" name="name" required="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Email Address<sup>*</sup>
                      </label>
                      <input type="email" class="" name="email" required="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Company<sup>*</sup>
                      </label>
                      <input type="text" class="" name="company" required="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>Apr. Budget</label>
                      <input type="text" class="" name="budget" required="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Your Message</label>
                      <textarea rows="10" name="message"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Attach files</label>
                      <input class="file_type" type="file" name="contactfile" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-8">
                    <button className="contact_from_submit">
                      Send Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LocationOnMap />
      <Footer />
    </div>
  );
};

export default ContactUs;
