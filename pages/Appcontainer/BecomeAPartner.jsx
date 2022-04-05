import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const BecomeAPartner = () => {
  return (
    <div>
      <section className="become_partner_sec">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-7 col-md-8 pr-0">
              <div className="feature_item_box pl-170">
                {/* <div className="section_typing">
                  <Typed strings={["Partner With Us"]} typeSpeed={150} />
                </div> */}
                <div className="become_content">
                  <h4 data-aos="fade-up" data-aos-duration="500">
                    Partner With Us
                  </h4>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    Partnering with Excellis IT helps you in grabbing global
                    opportunities as well as development support in establishing
                    your brand. By being our partner you can leverage on
                    improved customer relations, reduced operational costs,
                    faster conversion time, technical assistant, expanded global
                    reach that too within an incubating environment.
                  </p>
                  <Link to="/partner-with-us">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="explore_btn"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="become_img_sec"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                className="img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/become-a-partner.jpg?alt=media&token=74f77dfc-d9ee-4e05-b5a3-47fec1c4acd7"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BecomeAPartner;
