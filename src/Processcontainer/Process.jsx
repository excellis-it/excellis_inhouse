import React from "react";
import InnerBanner from "../InnerBanner";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../src/Processcontainer/process.css";
import "../../src/Appcontainer/assets/Style.css";
import $ from "jquery";
import { Helmet } from "react-helmet";

const Process = (activeStatus) => {
  const title = "Process";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  $(document).ready(function () {
    $("a[href*=#]").bind("click", function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          100
        );

      return false;
    });
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop();

      // Assign active class to nav links while scolling
      $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".progressbar li.active").removeClass("active");
          $(".progressbar li").eq(i).addClass("active");
        }
      });
    })
    .scroll();

  const discover =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/discover.jpg?alt=media&token=5ea9083d-d2c5-4c34-adb2-0bf26280e367";
  const strategize =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/strategize.jpg?alt=media&token=81e686fe-b64e-411f-b6e5-202b70514071";
  const design =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/design-process.jpg?alt=media&token=d19a5eda-c789-490d-ac1a-053b30296720";
  const engineer =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/engineer-process.jpg?alt=media&token=d58c3957-fb40-4777-8f12-87f113cb0ba0";
  const amplify =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/amplify-process.jpg?alt=media&token=fb41cd40-3b51-43ca-bf21-4a4ecf151241";
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Process | Excellis IT</title>
        <meta
          name="description"
          content="We follow a strategic process that would help our client with the best from our end."
        />
        <link rel="canonical" href="https://www.excellisit.com/process" />
      </Helmet>
      <Navbar activeStatus="process" />
      <InnerBanner title={title} description={description} />
      <div className="process_section">
        <section class="top_progress_bar sticky d-none d-sm-block">
          <ul class="progressbar">
            <li>
              <a href="#one">
                <span></span>discover
              </a>
            </li>

            <li>
              <a href="#two">
                <span></span> STRATEGIZE
              </a>
            </li>
            <li>
              <a href="#three">
                <span></span> DESIGN
              </a>
            </li>
            <li>
              <a href="#four">
                <span></span> ENGINEER
              </a>
            </li>
            <li>
              <a href="#five">
                <span></span> AMPLIFY
              </a>
            </li>
          </ul>
        </section>
        <section class="left_right_img_text">
          <div
            class="img-and-text d-block d-sm-flex page-section hero"
            id="one"
          >
            <div class="d-block d-sm-none show_mobile">
              <div class="step-num">STEP 1</div>
              <h3>discover</h3>
            </div>
            <div class="img-c">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={discover} alt="design image" />
              </div>
            </div>
            <div class="text-c">
              <div class="d-none d-sm-block">
                <div class="step-num">STEP 1</div>
                <h3>discover</h3>
              </div>
              <p>
                Good agencies study their clients before they design. Great
                agencies study the end-users. Codal studies your company, your
                users, your competitors, your market space, your entire
                industry—we learn your customers' expectations so we can exceed
                them. It's more than understanding the problem. It's
                understanding the next problem, the one after that, and the one
                five years down the road.
              </p>
            </div>
          </div>
          <div class="img-and-text d-block d-sm-flex page-section" id="two">
            <div class="d-block d-sm-none show_mobile">
              <div class="step-num">STEP 2</div>
              <h3>STRATEGIZE</h3>
            </div>
            <div class="img-c  order-sm-2">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={strategize} alt="strategize image" />
              </div>
            </div>
            <div class="text-c order-sm-1">
              <div class="d-none d-sm-block">
                <div class="step-num">STEP 2</div>
                <h3>STRATEGIZE</h3>
              </div>
              <p>
                Armed with qualitative and quantitative research, it's time to
                plot our course ahead. Like all the best pioneers, we map the
                path forward by weighing risks, formulating strategies to meet
                all project objectives, and informing the design process ahead.
              </p>
            </div>
          </div>
          <div class="img-and-text d-block d-sm-flex page-section" id="three">
            <div class="d-block d-sm-none show_mobile">
              <div class="step-num">STEP 3</div>
              <h3>DESIGN</h3>
            </div>
            <div class="img-c ">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={design} alt="strategize image" />
              </div>
            </div>
            <div class="text-c">
              <div class="d-none d-sm-block">
                <div class="step-num">STEP 3</div>
                <h3>DESIGN</h3>
              </div>
              <p>
                Whether it's websites, apps, or custom software, Codal's UX & UI
                design team masterfully crafts for the end-user, flawlessly
                operates in an Agile environment, and continually refines and
                iterates prototypes until your digital product is pixel-perfect.
                Our design team prizes simplicity, champions usability, and
                hates when things are more complicated than they need to be.
              </p>
            </div>
          </div>
          <div class="img-and-text d-block d-sm-flex page-section" id="four">
            <div class="d-block d-sm-none show_mobile">
              <div class="step-num">STEP 4</div>
              <h3>ENGINEER</h3>
            </div>
            <div class="img-c order-sm-2">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={engineer} alt="strategize image" />
              </div>
            </div>
            <div class="text-c order-sm-1">
              <div class="d-none d-sm-block">
                <div class="step-num">STEP 4</div>
                <h3>ENGINEER</h3>
              </div>
              <p>
                We've researched, designed, tested, re-tested, and shaped your
                platform from an idea to a complete blueprint. Now it's time for
                our expert development team to usher that blueprint into
                reality. While Codal's engineers are masters of app and web
                development in all its forms, we're not just well-versed in the
                industry standards. Codal prides itself in harnessing
                state-of-the-art technology, from IoT-integrated platforms to
                augmented and virtual reality.
              </p>
            </div>
          </div>
          <div class="img-and-text d-block d-sm-flex page-section" id="five">
            <div class="d-block d-sm-none show_mobile">
              <div class="step-num">STEP 5</div>
              <h3>AMPLIFY</h3>
            </div>
            <div class="img-c ">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={amplify} alt="strategize image" />
              </div>
            </div>
            <div class="text-c">
              <div class="d-none d-sm-block">
                <div class="step-num">STEP 5</div>
                <h3>AMPLIFY</h3>
              </div>
              <p>
                We design for businesses of all sizes and sectors, but our most
                successful clients are united by a common denominator: a
                relationship with Codal that extends beyond the project. We're
                your resident design and development experts, a digital
                consultant in your corner that understands your business needs.
                We're more than an agency. We're your partner.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div class="get-started">
        <div class="container">
          <h2>LET'S GET STARTED</h2>
          <p>Schedule a time to chat with us</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Process;
