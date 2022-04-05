import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TestimonialSection from "../TestimonialSection";
import BecomeAPartner from "./BecomeAPartner";
import ContactSection from "./ContactSection";
import FactsAndFigure from "./FactsAndFigure";
import Herobaner from "./Herobaner";
import HomeFeatureServices from "./HomeFeatureServices";
import HomeServicesSec from "./HomeServicesSec";
import IndustriesWeCovered from "./IndustriesWeCovered";
import OurBlog from "./OurBlog";
import OurClients from "./OurClients";
import { Helmet } from "react-helmet";
import Loader from "../Loader";
import CompanyAddress from "../CompanyAddress";

// $(".bodyName").children("div").addClass("test");

const Home = () => {
  return (
    <div className="bodyName">
      <Helmet>
        <title>
          360° Digital Marketing, Software Development, and IT company in
          Kolkata, India: Excellis IT
        </title>
        <meta
          name="title"
          content="360° Digital Marketing, Software Development, and IT company in Kolkata, India: Excellis IT"
        />
        <meta
          name="description"
          content="Excellis IT is a full-stack development, 360° digital marketing and IT Company in Kolkata, India. We offer digital marketing, UI & UX design, web design, mobile app development, BPO service, Software Development, etc. "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href="https://www.excellisit.com/" />
      </Helmet>
      {/* <Loader /> */}
      <Navbar activeStatus="home" />
      <Herobaner />
      <HomeFeatureServices />
      <HomeServicesSec />
      <FactsAndFigure />
      <BecomeAPartner />
      <IndustriesWeCovered />
      <OurClients />
      <TestimonialSection />
      {/* <OurBlog /> */}
      <ContactSection />
      <CompanyAddress />
      <Footer />
    </div>
  );
};
export default Home;
