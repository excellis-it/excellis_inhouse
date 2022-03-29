import React from "react";
import CompanyAddress from "./CompanyAddress";
const FooterContactForm = () => {
  return (
    <div>
      <section class="footer_contact_form_sec" id="footer_form">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-12">
              <div class="contact_form_title text-center">
                <span>Don’t be a stranger</span>
                <h2>Enquire us</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div
                class="left_foo_con_sec"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h4>Personal Details</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Name<sup>*</sup>
                      </label>
                      <input type="text" class="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Email Address<sup>*</sup>
                      </label>
                      <input type="text" class="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Phone Number<sup>*</sup>
                      </label>
                      <input type="text" class="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>Skype ID</label>
                      <input type="text" class="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        What is your interest?<sup>*</sup>
                      </label>
                      <select>
                        <option value="Select Option">Select Option</option>
                        <option value="Website Development">
                          Become A Partner
                        </option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="E-commerce Development">
                          E-commerce Development
                        </option>
                        <option value="Branding">Branding</option>
                        <option value="App Development">App Development</option>
                        <option value="Domains &amp; Hosting">
                          Domains &amp; Hosting
                        </option>
                        <option value="Just having a Coffee">
                          Just having a Coffee
                        </option>
                        <option value="Working at TenTwenty">
                          Working at TenTwenty
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Where did you here about us?<sup>*</sup>{" "}
                      </label>
                      <select>
                        <option value="Select Option">Select Option</option>
                        <option value="Google">Google</option>
                        <option value="Clutch">Clutch</option>
                        <option value="People Per Hour">People Per Hour</option>
                        <option value="Good Firms">Good Firms</option>
                        <option value="Personal Reference">
                          Personal Reference
                        </option>
                        <option value="Social Media">Social Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Your Message</label>
                      <textarea></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Attach files</label>
                      <input class="file_type" type="file" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <a
                      href="#"
                      class="banner_btn animate__slideInUp animate__animated"
                    >
                      Submit
                    </a>
                  </div>
                </div>
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
                      <a href="tell:+1 602 671 4455">
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
                      <a href="tel:(+91) 861 772 4646">
                        <i class="las la-phone-volume"></i> (+91) 861 772 4646
                      </a>
                    </li>
                    <li>
                      <a href="mailto:harry@excellisit.com<">
                        <i class="las la-envelope"></i> harry@excellisit.com
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
                      <a href="tel:033 4060 1168">
                        <i class="las la-phone-volume"></i> 033 4060 1168
                      </a>
                    </li>
                    <li>
                      <a href="mailto:ali@excellisit.com">
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
          <CompanyAddress />
        </div>
      </section>
    </div>
  );
};
export default FooterContactForm;
