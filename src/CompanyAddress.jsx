import React from "react";
import { FaEnvelope, FaMap, FaPhone, FaPhoneAlt } from "react-icons/fa";

const usflag =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/united-states.png?alt=media&token=0a2e6299-5598-42fe-8ee9-f15e4a920825";
const ausflag =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/australia.png?alt=media&token=098fa54c-3f28-4ccb-9cb0-40a0a12709b2";
const ukflag =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/united-kingdom.png?alt=media&token=ef58c8bb-5e00-4142-8981-7d6061885624";
const indflag =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/india.png?alt=media&token=a7594991-9855-4e67-a094-a20b095aaf58";
const dubaiflag =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/dubai.png?alt=media&token=bca8cc67-62ec-4b56-a289-3dd19744f41e";
const CompanyAddress = () => {
  return (
    <div>
      <div className="address_sec">
        <div className="container">
          <div class="row contact-details">
            <div class="col-md-3">
              <h6>
                <img src={ukflag} alt="" />
                UK Office
              </h6>
              <div class="footer-links footer_address">
                <ul>
                  <li>
                    <a href="">
                      <FaMap /> 109 Spilman Street, GRAIG UK, LL17 1XQ
                    </a>
                  </li>
                  <li>
                    <a href="tel:+44 115 794 0283">
                      <FaPhoneAlt /> +44 115 794 0283
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@excellisit.com">
                      <FaEnvelope /> info@excellisit.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h6>
                <img src={usflag} alt="" />
                US Office
              </h6>
              <div class="footer-links footer_address">
                <ul>
                  <li>
                    <a href="">
                      <FaMap /> 2641 Fieldcrest Road, New York NY, 10011
                    </a>
                  </li>
                  <li>
                    <a href="tel:1 (518) 660-0841">
                      <FaPhoneAlt /> 1 (518) 660-0841
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@excellisit.com">
                      <FaEnvelope /> info@excellisit.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h6>
                {" "}
                <img src={ausflag} alt="" /> Australia Office
              </h6>
              <div class="footer-links footer_address">
                <ul>
                  <li>
                    <a href="">
                      <FaMap />
                      943 Musgrave Street, Atlanta, GA Georgia, 30303.
                    </a>
                  </li>
                  <li>
                    <a href="tel:(+91) 861 772 4646">
                      <FaPhoneAlt /> (+91) 861 772 4646
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@excellisit.com">
                      <FaEnvelope /> info@excellisit.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h6>
                <img src={indflag} alt="" />
                India Office
              </h6>
              <div class="footer-links footer_address">
                <ul>
                  <li>
                    <a href="">
                      <FaMap />
                      51 DN block, Merlin Infinite, floor 9, Unit 907, Salt lake
                      sector V, Kolkata 700091
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaMap />
                      45,8th Cross Road, RMV 2ND Stage, Bengaluru 560094
                    </a>
                  </li>
                  {/* <li>
                    <a href="">
                      <FaPhoneAlt /> (+91) 861 772 4646
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaEnvelope /> info@excellisit.com
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyAddress;
