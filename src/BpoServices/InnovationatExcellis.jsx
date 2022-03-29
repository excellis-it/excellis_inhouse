import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import ThreeScene from "../Appcontainer/ThreeScene";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const InnovationatExcellis = () => {
  const title = "Innovation at Excellis";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  const bootstrap =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2FBootstrap.png?alt=media&token=c7d7a420-6618-480c-acb4-639820d666f9";
  const java =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2FJava.png?alt=media&token=57226ce3-176b-491c-a540-1101d44c47cf";
  const ndk =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2FNDK.png?alt=media&token=f4b6173a-e443-49cc-9762-9b6742b0eb76";
  const xd =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fadobe-xd.png?alt=media&token=7a378aeb-be0a-4e56-807b-b380b8053710";
  const angular =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fangular.png?alt=media&token=415b1133-696c-4dbd-b53c-1c60138932dd";
  const css3 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fcss3.png?alt=media&token=1f3c28c2-2139-435c-8aa2-7f7db7c6f55c";
  const figma =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Ffigma.png?alt=media&token=278ab062-d724-4fbe-acd3-b57cb8f854f5";
  const flutter =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fflutter-logo.png?alt=media&token=415f19e2-4f74-48c1-a59c-53586030110d";
  const mongodb =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fmongodb.png?alt=media&token=a6ee9efb-1a07-47c2-9d8a-5fd8ecf72734";
  const oracle =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Foracel12c.png?alt=media&token=eb08f609-a2c3-4c63-a5bb-96fda1b25f91";
  const react =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Freact.png?alt=media&token=f55b9fea-0645-402f-a18c-2cef8b6e4e68";
  const swift =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fswift.png?alt=media&token=8bb91bf5-8689-4284-b618-02ff8eaf3b07";
  const html =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fhtml-5.png?alt=media&token=41450ff8-8db6-41b9-a3af-1246352334e6";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>UI UX Design</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar />
      <InnerBanner title={title} description={description} />
      <section class="inner_page_first">
        <div class="s-BannerServices bg_dark">
          <div class="l-ContentColumn container">
            <div class="row">
              <div class="col-md-5">
                <div class="s-BannerServices__Content">
                  <h6 class="s-BannerServices__Subheader">
                    User-friendly websites
                  </h6>
                  <h1 class="BannerServices__Subheader h1--WithLine">
                    Mobile-first and user-friendly websites
                  </h1>
                  <p>
                    Thanks to Data Science you can effectively process data,{" "}
                    <strong>
                      base new services and business decisions on knowledge
                    </strong>{" "}
                    and improve your day-to-day operations.
                  </p>
                  <p>
                    You have the data and we will give you powerful solutions so
                    you can use it.{" "}
                    <strong>
                      Let’s work together and make the most of it.
                    </strong>
                  </p>
                </div>
                <div class="s-BannerServices__Image__Description">
                  Photo: Our team members <strong>at work</strong>
                </div>
              </div>
              <div class="col-md-7">
                <div class="s-BannerServices__Image">
                  <div class="s-BannerServices__Image__Content">
                    <div
                      class="reveal-holder custom_aos"
                      data-aos="reveal-item"
                    >
                      <div
                        class="reveal-block right custom_aos"
                        data-aos="reveal-right"
                      ></div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/mobile-application.jpg?alt=media&token=077572ec-50e3-4ee8-8476-461a6796c7ea" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="u-Scanlines"></div>
        </div>
        <div class="l-ContentColumn s-BannerServices__After">
          <div class="row justify-content-center">
            <div class=" col-md-12">
              <div class="u-BigCross"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="fact_no">
        <div class="container-fluid l-ContentColumn">
          <div class="row">
            <div className="col-md-1"></div>
            <div class="col-md-3 main_heading dark_text pl-5">
              <h6>Facts &amp; Numbers</h6>
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <h2 class="h2--WithLine">
                  Data <strong>transformed into knowledge</strong>
                </h2>
              </div>
              <p>
                We can design processes that
                <strong> visualise data processing,</strong> design and create a
                solution from scratch based on{" "}
                <strong>existing mathematical models</strong> and using
                components to connect them with each other.
              </p>
              <p>
                We will also work together with your domain experts and empower
                them with technology to support their analysis procedures and
                decision-making processes in your organisation.
              </p>
            </div>
            <div class="col-md-8 s-InfoBoxesGrid__GridContainer">
              <div class="s-InfoBoxesGrid__Grid s-InfoBoxesGrid__Grid--Medium">
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">800</h2>
                    <div class="o-InfoBox__Text">
                      <p>people on board</p>
                    </div>
                  </div>
                </div>
                <div class="o-InfoBox bg">
                  <div class="o-InfoBox__Content"></div>
                </div>
                <div class="o-InfoBox bg">
                  <div class="o-InfoBox__Content"></div>
                </div>
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">2-5 times</h2>
                    <div class="o-InfoBox__Text">
                      <p>
                        the cost – the estimated ROI in the first year on most
                        standard machine learning projects
                      </p>
                    </div>
                  </div>
                </div>
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">14 years</h2>
                    <div class="o-InfoBox__Text">
                      <p>of Microsoft Partnership</p>
                    </div>
                  </div>
                </div>
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">40%</h2>
                    <div class="o-InfoBox__Text">
                      <p>team members with over 5 years of experience</p>
                    </div>
                  </div>
                </div>
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">81%</h2>
                    <div class="o-InfoBox__Text">
                      <p>
                        of respondents report their organisation is being
                        impacted by AI technologies
                      </p>
                    </div>
                  </div>
                </div>
                <div class="o-InfoBox">
                  <div class="o-InfoBox__Icon">
                    <div></div>
                  </div>
                  <div class="o-InfoBox__Content">
                    <h2 class="o-InfoBox__Header">175 ZB</h2>
                    <div class="o-InfoBox__Text">
                      <p>
                        the Global Datasphere will grow from 33 Zettabytes (ZB)
                        in 2018 to 175 ZB by 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-Scanlines"></div>
      </section>
      <section class="s-TextBlock">
        <div class="container">
          <div class="row pa_100 t-Dark">
            <div class="s-TextBlock__BackgroundIcon"></div>
            <div class="columns s-TextBlock__Intro">
              <div class="main_heading white_text">
                <h6>Benefits</h6>
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <h2 class="h2--WithLine">
                    What will you <strong>get</strong>?
                  </h2>
                </div>
              </div>
            </div>
            <div class="s-TextBlock__Content">
              <div class="row">
                <div class="col-md-6 o-Article">
                  <ul>
                    <li>
                      <strong>Data transformed into knowledge</strong> that
                      provides information in real-time and allows for making
                      better decisions, meeting your timelines
                    </li>
                    <li>
                      Design and implementation of data platforms together with{" "}
                      <strong>
                        advanced data processing, analysis and visualization
                      </strong>
                    </li>
                    <li>
                      Advice on what can be done using the data you provided,
                      leading you towards the{" "}
                      <strong>appropriate solution</strong>
                    </li>
                    <li>
                      Comprehensive analytical models that{" "}
                      <strong>facilitate decision making,</strong> understanding
                      trends and finding unseen patterns
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 o-Article">
                  <ul>
                    <li>
                      Comprehensive IoT platforms – from collecting and
                      organising the data from various devices, through
                      processes engaging{" "}
                      <strong>Artificial Intelligence algorithms</strong>, to
                      adding customer and business value
                    </li>
                    <li>
                      Continuous monitoring of the effectiveness of your
                      activities as well as{" "}
                      <strong>predictive maintenance</strong> and anomaly
                      detection solutions thanks to Machine Learning models
                    </li>
                    <li>
                      <strong>
                        Segmentation, categorisation, recommendation
                      </strong>{" "}
                      and natural language processing problems solved by means
                      of Artificial Intelligence application
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="s-CsCTA t-LightText">
        <div class="container">
          <div class="s-CsCTA__Text text-center">
            <h2 class="u-Center h2--WideTitle">
              Transform your data into valuable business insights
            </h2>
            <div class="u-Center white_text">
              <p>Start your data transformation now.</p>
            </div>
            <NavLink to="/contact-us" className="co-Button">
              <span>Contact us</span>
              <i class="ph-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>
      <section class="s-ImageText s-ImageText--Reversed">
        <div class="container">
          <div class="row l-ContentColumn">
            <div class="s-ImageText__ImageContainer col-md-7 order-1 order-sm-2">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/data-science_what-will-you-get_1.png?alt=media&token=25411235-6c12-406c-9429-d6f0cf61cb6d"
                  alt=""
                  class="s-ImageText__Image"
                />
              </div>
            </div>
            <div class="s-ImageText__Text main_heading dark_text col-md-5 order-2 order-sm-1">
              <h6>Data Science</h6>
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <h2 class="h2--WithLine">
                  We believe that <strong>proper data management</strong> means:
                </h2>
              </div>
              <ul>
                <li>Making smart business decisions</li>
                <li>Solution optimisation</li>
                <li>Transformation of data into knowledge</li>
                <li>Process Automation</li>
                <li>Complex data analysis (predictive, nonlinear)</li>
                <li>High-quality data visualisation</li>
                <li>Secure data maintenance regardless of its source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="s-IconsRoundDark t-Dark ">
        <div class="container">
          <div class="row l-ContentColumn">
            <div class="col-md-4 main_heading white_text">
              <h6>The process</h6>
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <h2 class="h2--WithLine">
                  Steps in <strong>data processing</strong>
                </h2>
              </div>
              <p>
                We are looking for the right place to store your data and the
                best ways to use it, tailored to your needs and to the problem
                at hand. We also understand the{" "}
                <strong>importance of scalability</strong> and will assure that
                the application scales well, based on the specific set of data
                and specific problem.
              </p>
            </div>
            <div class="col-md-8 xsmall-24 large-18 xlarge-17 s-IconsRoundDark__Content s-IconsRoundDark__Content--WithText">
              <p class="s-IconsRoundDark__TopText">
                Start with the process orchestration in order to execute the
                following steps:
              </p>
              <ul class="s-IconsRoundDark__Tabs">
                <li class="s-IconsRoundDark__TabContainer s-IconsRoundDark__TabContainer--Five">
                  <div class="s-IconsRoundDark__TabInner">
                    <div class="s-IconsRoundDark__Circle">
                      <i class="ph-article"></i>
                    </div>
                    <div class="s-IconsRoundDark__ConnectIcon">
                      <i class="ph-arrow-right o-Icon--16"></i>
                    </div>
                  </div>
                  <div class="s-IconsRoundDark__Title">Extract</div>
                </li>
                <li class="s-IconsRoundDark__TabContainer s-IconsRoundDark__TabContainer--Five">
                  <div class="s-IconsRoundDark__TabInner">
                    <div class="s-IconsRoundDark__Circle ">
                      <i class="ph-scissors"></i>
                    </div>
                    <div class="s-IconsRoundDark__ConnectIcon">
                      <i class="ph-arrow-right o-Icon--16"></i>
                    </div>
                  </div>
                  <div class="s-IconsRoundDark__Title">Clean</div>
                </li>
                <li class="s-IconsRoundDark__TabContainer s-IconsRoundDark__TabContainer--Five">
                  <div class="s-IconsRoundDark__TabInner">
                    <div class="s-IconsRoundDark__Circle ">
                      <i class="ph-hard-drives"></i>
                    </div>
                    <div class="s-IconsRoundDark__ConnectIcon">
                      <i class="ph-arrow-right o-Icon--16"></i>
                    </div>
                  </div>
                  <div class="s-IconsRoundDark__Title">Ingest</div>
                </li>
                <li class="s-IconsRoundDark__TabContainer s-IconsRoundDark__TabContainer--Five">
                  <div class="s-IconsRoundDark__TabInner">
                    <div class="s-IconsRoundDark__Circle ">
                      <i class="ph-git-fork"></i>
                    </div>
                    <div class="s-IconsRoundDark__ConnectIcon">
                      <i class="ph-arrow-right o-Icon--16"></i>
                    </div>
                  </div>
                  <div class="s-IconsRoundDark__Title">
                    Process (ML, Data Mining)
                  </div>
                </li>
                <li class="s-IconsRoundDark__TabContainer s-IconsRoundDark__TabContainer--Five">
                  <div class="s-IconsRoundDark__TabInner">
                    <div class="s-IconsRoundDark__Circle ">
                      <i class="ph-desktop"></i>
                    </div>
                  </div>
                  <div class="s-IconsRoundDark__Title">Visualise</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="s-ImageText s-ImageText--Reversed">
        <div class="container">
          <div class="row l-ContentColumn">
            <div class="s-ImageText__ImageContainer col-md-8 order-1 order-sm-2">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/data-science_what-will-you-get_1.png?alt=media&token=25411235-6c12-406c-9429-d6f0cf61cb6d"
                  alt=""
                  class="s-ImageText__Image"
                />
              </div>
            </div>
            <div class="s-ImageText__Text main_heading dark_text col-md-4 order-2 order-sm-1">
              <h6>Artificial Intelligence & Machine Learning</h6>
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <h2 class="h2--WithLine">
                  Transform <strong>your ways of working</strong>
                </h2>
              </div>
              <ul>
                <li>Making smart business decisions</li>
                <li>Solution optimisation</li>
                <li>Transformation of data into knowledge</li>
                <li>Process Automation</li>
                <li>Complex data analysis (predictive, nonlinear)</li>
                <li>High-quality data visualisation</li>
                <li>Secure data maintenance regardless of its source</li>
              </ul>
              <p>
                Benefit from over 20 years of our experience in{" "}
                <strong>creating robust software</strong> with a dedicated team,
                specialised in delivering solutions based on high-quality data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="sec section_technology">
        <div class="s-TechnologiesLogos s-TechnologiesLogos--WithScanlines ">
          <div class="container">
            <div class="main_heading dark_text">
              <h6 class="s-TechnologiesLogos__Subtitle">
                Technologies &amp; Tools
              </h6>

              <h2 class="h2 h2--WithLine">
                Our solutions are based <br />
                <strong>on the following technologies</strong>
              </h2>
            </div>
            <div class="s-TechnologiesLogos__GridWrapper">
              <div class="row">
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={react} alt="react logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={angular}
                        alt="angular logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={mongodb}
                        alt=" mongodb logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={bootstrap}
                        alt=" bootstrap loog"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={flutter}
                        alt=" flutter logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={xd} alt="xd logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={oracle}
                        alt=" oracle logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={html} alt=" html logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={java} alt="java logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={swift} alt="swift logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={css3} alt="css3 logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={figma} alt="figma logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="u-Scanlines"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InnovationatExcellis;
