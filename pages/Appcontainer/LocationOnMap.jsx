import React from "react";
import * as $ from "jquery";

const LocationOnMap = () => {
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  return (
    <div>
      <section className="wide_globe_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="contact_form_title text-center">
                <span>Where To Find Us</span>
              </div>
              <div className="globe_wrapper">
                <img
                  className="img-fluid wide_globe_img"
                  src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/wide_globe.png?alt=media&token=5387d648-db52-4a39-841b-7c993cbd3ddb"
                />
                <div className="india_location">
                  <div
                    className="map_location_pin"
                    data-toggle="popover"
                    title="India"
                    data-placement="top"
                    data-content="51 DN block, Merlin Infinite, floor 9, Unit 907, Salt lake sector V, Kolkata 700091"
                  >
                    <span>India</span>
                  </div>
                </div>
                <div className="dubai_location">
                  <div
                    className="map_location_pin"
                    data-toggle="popover"
                    title="Dubai"
                    data-placement="top"
                    data-content="Al Moosa Tower 2, Office #2001,20th Floor, Sheikh Zayed Rd, UAE"
                  >
                    <span>Dubai</span>
                  </div>
                </div>
                <div className="uk_location">
                  <div
                    className="map_location_pin"
                    data-toggle="popover"
                    title="UK"
                    data-placement="top"
                    data-content="109 Spilman Street, GRAIG UK, LL17 1XQ"
                  >
                    <span>UK</span>
                  </div>
                </div>
                <div className="australia_location">
                  <div
                    className="map_location_pin"
                    data-toggle="popover"
                    title="Australia"
                    data-placement="top"
                    data-content="109 Spilman Street, GRAIG UK, LL17 1XQ"
                  >
                    <span>Australia</span>
                  </div>
                </div>
                <div className="us_location">
                  <div
                    className="map_location_pin"
                    data-toggle="popover"
                    title="US"
                    data-placement="top"
                    data-content="347 5th Ave #1402 New York NY10016"
                  >
                    <span>US</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LocationOnMap;
