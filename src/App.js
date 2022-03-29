import React, { useState, useEffect } from "react";
import "../src/Appcontainer/assets/Style.css";
import "./lighttheme.css";
import "./navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Appcontainer/Home";
import About from "./Aboutcontainer/About";
import Error from "./Error";
import BlogDetails from "./BlogDetails";
import { keepTheme } from "./themes";
import MainServices from "./Servicescontainer/MainServices";
import BlogPage from "./BlogPage";
import Process from "./Processcontainer/Process";
import PrivacyPolicy from "./Othercontainer/PrivacyPolicy";
import TermConditions from "./Othercontainer/TermConditions";
import ContactUs from "./Othercontainer/ContactUs";
import ItServices from "./ItServices/ItServices";
import MobileApplication from "./ItServices/MobileApplication";
import SoftwareDevelopment from "./ItServices/SoftwareDevelopment";
import UiUxDesign from "./ItServices/UiUxDesign";
import WebDevelopment from "./ItServices/WebDevelopment";
import PartnerWithUs from "./Othercontainer/PartnerWithUs";
import Portfolio from "./Othercontainer/Portfolio";
import QaAndTesting from "./ItServices/QaAndTesting";
import BackOfficeProcessOutsourcing from "./BpoServices/BackOfficeProcessOutsourcing";
import SearchEngineOptimization from "./MarketingServices/SearchEngineOptimization";
import SocialMediaMarketing from "./MarketingServices/SocialMediaMarketing";
import PayPerClick from "./MarketingServices/PayPerClick";
import EmailMarketing from "./MarketingServices/EmailMarketing";
import ContentMarketing from "./MarketingServices/ContentMarketing";
import GoogleMyBusiness from "./MarketingServices/GoogleMyBusiness";

import CareerPage from "./CareerPage";
import JobRole from "./JobRole";
import CallCenterOutsourcing from "./BpoServices/CallCenterOutsourcing";
import EcommerceOutsourcing from "./BpoServices/EcommerceOutsourcing";
import PerformanceCompliancemanagement from "./BpoServices/PerformanceCompliancemanagement";
import ProfessionalServices from "./BpoServices/ProfessionalServices";
import ScrollToTop from "./ScrollToTop";

function App() {
  AOS.init({
    duration: 1500,
    once: "true",
  });

  useEffect(() => {
    keepTheme();
  });

  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/OurServices" component={MainServices} />
          <Route exact path="/process" component={Process} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/blogDetail/:Title" component={BlogDetails} />
          <Route exact path="/JobRole/:id" component={JobRole} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-and-condition" component={TermConditions} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/itServices" component={ItServices} />
          <Route
            exact
            path="/mobile-app-development"
            component={MobileApplication}
          />
          <Route
            exact
            path="/software-development"
            component={SoftwareDevelopment}
          />
          <Route exact path="/ui-ux-design" component={UiUxDesign} />
          <Route exact path="/web-development" component={WebDevelopment} />
          <Route exact path="/partner-with-us" component={PartnerWithUs} />
          <Route exact path="/QA-testing" component={QaAndTesting} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route
            exact
            path="/call-center-outsourcing-service"
            component={CallCenterOutsourcing}
          />
          <Route
            exact
            path="/ecommerce-outsourcing-services"
            component={EcommerceOutsourcing}
          />
          <Route
            exact
            path="/performance-compliance-management"
            component={PerformanceCompliancemanagement}
          />
          <Route
            exact
            path="/professional-services"
            component={ProfessionalServices}
          />
          <Route
            exact
            path="/search-engine-optimization"
            component={SearchEngineOptimization}
          />
          <Route
            exact
            path="/social-media-marketing"
            component={SocialMediaMarketing}
          />
          <Route exact path="/pay-per-click" component={PayPerClick} />
          <Route
            exact
            path="/back-office-process-outsourcing-services"
            component={BackOfficeProcessOutsourcing}
          />
          <Route exact path="/email-marketing" component={EmailMarketing} />
          <Route exact path="/content-marketing" component={ContentMarketing} />
          <Route exact path="/career-opportunities" component={CareerPage} />
          <Route
            exact
            path="/google-my-business-optimization"
            component={GoogleMyBusiness}
          />
          <Route exact component={Error} />
        </Switch>
      </ScrollToTop>
    </div>
  );
}

export default App;
