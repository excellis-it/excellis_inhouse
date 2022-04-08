import React from "react";
// import "./assets/Style.css";
import Typed from "react-typed";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div>
      <section class="footer_contact_form_sec" id="footer_form">
        {/* <div class="background">
          <div class="background__blue"></div>
          <div class="background__red"></div>
          <div class="background__green"></div>
          <div class="background__yellow"></div>
        </div> */}
        <div className="section_typing">
          <Typed strings={["Let’s Connect"]} typeSpeed={150} />
        </div>
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-12">
              <div class="contact_form_title text-center">
                <span>Don’t be a stranger</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div
                class="left_foo_con_sec aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <ContactForm />
              </div>
            </div>
            <div class="col-md-4">
              <div class="right_persion_con_sec">
                <div
                  class="single_persion_con aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <h4 class="theme_color">Speak to Sourav</h4>
                  <p>Manager Operations USA &amp; CAN</p>
                  <ul>
                    <li>
                      <a href="tel:+1 602 671 4455">
                        <i class="las la-phone-volume"></i> +1 602 671 4455
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sourav.dutta@excellisit.com">
                        <i class="las la-envelope"></i>{" "}
                        sourav.dutta@excellisit.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="single_persion_con aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h4 class="theme_color">Speak to Harry</h4>
                  <p>Manager Operations India</p>
                  <ul>
                    <li>
                      <a href="tel:+91 821 721 8068">
                        <i class="las la-phone-volume"></i> +91 821 721 8068
                      </a>
                    </li>
                    <li>
                      <a href="mailto:harry@excellisit.com">
                        <i class="las la-envelope"></i> harry@excellisit.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="single_persion_con aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <h4 class="theme_color">Speak to Meraj</h4>
                  <p>Director</p>
                  <ul>
                    <li>
                      <a href="tel:+91 980 488 4444">
                        <i class="las la-phone-volume"></i> +91 980 488 4444
                      </a>
                    </li>
                    <li>
                      <a href="mailto:meraj@excellisit.com">
                        <i class="las la-envelope"></i> meraj@excellisit.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  class="single_persion_con aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h4 class="theme_color">Speak to Ali</h4>
                  <p>Director Global Operation</p>
                  <ul>
                    <li>
                      <a href="mailto:033 4060 1168">
                        <i class="las la-phone-volume"></i> 033 4060 1168
                      </a>
                    </li>
                    <li>
                      <a href="tel:ali@excellisit.com">
                        <i class="las la-envelope"></i> ali@excellisit.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-100">
            <div class="col-md-12">
              <div class="colorLine">
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span> <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactSection;
