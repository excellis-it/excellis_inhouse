import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const HomeFeatureServices = () => {
  return (
    <div>
      <section className="home_feature_sec">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-7 col-md-8 pr-0">
              <div className="feature_item_box pl-170">
                <div className="section_typing">
                  <div class="reveal-holder custom_aos" data-aos="reveal-item">
                    <div
                      class="reveal-block right custom_aos"
                      data-aos="reveal-right"
                    ></div>
                    <Typed
                      strings={["Our Featured Services"]}
                      typeSpeed={150}
                    />
                  </div>
                </div>
                <div className="featured_services_list">
                  <li data-aos="fade-up" data-aos-duration="500">
                    IT Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    BPO Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    Marketing Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    CAD Services
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_abt_sec pl-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 pl-0">
              <div className="abt_wrapper">
                <div className="abt_inner">
                  <h4 data-aos="fade-up" data-aos-duration="500">
                    About Excellis
                  </h4>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Excellis IT started with the vision to craft 360 degree
                    digital solutions using the best IT and marketing
                    professionals along with creative storytelling to help you
                    grow your business. Commenced in the year 2016, we are now
                    among the best digital marketing company in Kolkata, India
                    with a growing list of satisfied clients spanning in 32+
                    countries which includes India, UK, USA, Canada, Australia,
                    Dubai, and entire Europe. We are a team of skilled
                    professionals who believe in serving their clients with the
                    on top of trend digital transformation services in a number
                    of fields. We cater tailored telemarketing outsourcing
                    services along with expertise in software development and
                    website designing, digital marketing and app development.
                  </p>
                </div>
                <div className="abtn_read_more_btn">
                  <Link to="/about">
                    <button className="yellow_btn">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeFeatureServices;
