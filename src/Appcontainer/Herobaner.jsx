import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import LogoCanvas from "../LogoCanvas";

const Herobaner = () => {
  return (
    <div>
      <section className="banner_content_section pl-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner_content">
                <h4>We are</h4>
                <h1>Excellis</h1>
                <div className="typing_sec mb-4">
                  <Typed
                    strings={[
                      "Here you can find anything",
                      "Here you can find anything",
                    ]}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                  />
                </div>
                {/* <div className="banner_review_img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/banner_review_images.png?alt=media&token=074659d6-4a47-4f8f-b905-a7f70e872a87" />
                </div> */}

                <div class="review_icon d-flex">
                  <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/banner_review_images.png?alt=media&token=074659d6-4a47-4f8f-b905-a7f70e872a87" />
                  <div class="review_link">
                    <a href="https://clutch.co/profile/excellis-it#summary"></a>
                    <a href="https://www.goodfirms.co/company/excellis-it-pvt-ltd"></a>
                    <a href="https://www.google.com/search?rlz=1C1CHBD_enIN909IN909&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk01dUZjd3j5lSkVLsuDesnxAdd14bA:1629906663763&q=excellis+it&rflfq=1&num=10&ved=2ahUKEwiBode9w8zyAhUR3jgGHSv_CCwQtgN6BAgQEAM#rlfi=hd:;si:4999939093286690734,l,CgtleGNlbGxpcyBpdJIBC2Jwb19jb21wYW55;mv:[[22.6256822,88.4407447],[22.5771834,88.4377449]]"></a>
                    <a href="#"></a>
                  </div>
                </div>

                <LogoCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Herobaner;
