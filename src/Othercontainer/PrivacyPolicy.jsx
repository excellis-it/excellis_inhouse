import React from "react";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  const title = "Privacy Policy";
  const description = "";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy Policy</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar />
      <InnerBanner title={title} description={description} />
      <section class="only_con_sec pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="content-only-pages">
                <p>
                  This site is owned by Excellis IT. We are profoundly concerned
                  about your privacy. We understand the account of
                  responsibility involved in the handling of personal
                  information of its visitors and would like to safeguard your
                  personal information that you provide to us. This Privacy
                  Policy states our practices about collecting, using, and
                  disclosure of information.
                </p>

                <h4>
                  PLEASE READ THE PRIVACY POLICY THOROUGHLY BEFORE USING THIS
                  SITE OR SUBMITTING ANY INFORMATION. BY USING THIS WEBSITE YOU
                  ARE AGREEING TO OUR PRIVACY POLICY.
                </h4>

                <p>
                  We accept only that information which is provided to us
                  willingly by you. Considering the privacy concerns in
                  disclosing the personal data about oneself, we give you the
                  liberty of accessing our website with no disclosure of
                  personal information. You might also opt for divulging
                  restricted or certain data as per your convenience.
                </p>

                <p>
                  We, respecting the trust of the visitors, commit ourselves to
                  deal with the information provided by you with utmost
                  confidentiality. The contact details like the name, e-mail
                  address and phone number are strictly protected with the
                  assurance of no leakage to any third party.
                </p>

                <h4>HOW Excellis IT COLLECTS YOUR INFORMATION?</h4>

                <p>
                  Excellis IT collects personally identifiable information about
                  our visitors either directly through forms that they fill up
                  on our site, or by placing cookies in the user’s hard disk as
                  they browse this website. The website of Excellis IT may place
                  cookies in your computer’s hard disk when you:
                </p>

                <ul>
                  <li>Visit our website</li>

                  <li>Post comments in the blog</li>

                  <li>Subscribe to newsletters</li>
                </ul>

                <h4>
                  THE SERVER MAY ACCESS COOKIES IN YOUR COMPUTER’S HARD DISK
                  WHEN YOU VISIT THIS WEBSITE AGAIN, FOR:
                </h4>

                <ul>
                  <li>Recognizing your computer.</li>

                  <li>
                    Displaying pages according to your preferred display
                    settings. This includes, without limitation, page layout and
                    font sizes.
                  </li>

                  <li>
                    Helping you fill out forms quicker, by completing some of
                    the entries automatically as per the information provided by
                    you in the past.
                  </li>

                  <li>
                    Identifying a returning user. Also, to track the number of
                    unique visitors accessing this website, on a daily basis.
                  </li>
                </ul>

                <h4>E-MAIL ADDRESS, PHONE NO:</h4>

                <p>
                  Email address and phone number provided in contact us form
                  will be used to share vital information with you. This
                  information can be anything related to your query, projects,
                  and payments and selected marketing material. Once entered in
                  our mailing list, you will be regularly sent newsletters and
                  other promotional notifications of our company or of our
                  related partners. Giving optimum value to your consent to
                  receive all this, we give you the liberty to get unauthorized
                  from our communications by deleting your details from our
                  database. With our associates obliged by the conditions of our
                  privacy policy, you get the option of disconnecting yourself
                  of regular communications from their side as well.
                </p>

                <h4>CREDIT/DEBIT CARD DETAILS:</h4>

                <p>
                  The credit and debit card details given by you in regards to
                  your payment are purely used only for processing purposes. We
                  do not store this data at our end and take all steps secure
                  your data while it is in our possession. We reserve the right
                  of using this data like the billing address for future client
                  concerns and render the assurance of not sharing this
                  information with a third party.
                </p>

                <h4>DISCLOSURE OF INFORMATION UNDER SPECIAL PROVISIONS:</h4>

                <p>
                  Governing the client data under a set of rules and
                  regulations, you should understand that Excellis IT will be
                  applicable for revealing certain sections of the customer data
                  under following circumstances:
                </p>

                <ul>
                  <li>Post a written approval from your side</li>

                  <li>Post an order from any sort of legal jurisdiction</li>

                  <li>In the context of societal benefit</li>

                  <li>
                    In compliance of the protection of rights of Excellis IT
                  </li>
                </ul>

                <h4>
                  THE INFORMATION GIVEN IN THE WEBSITE CAN BE SHARED WITH THE
                  FOLLOWING GROUPS OF INDIVIDUALS:
                </h4>

                <ul>
                  <li>To a related associate of Excellis IT</li>

                  <li>
                    To an individual or individuals to whom we are obliged to do
                    so as per law
                  </li>

                  <li>
                    To personnel like the lawyers and financial consultants for
                    the proper facilitation of required proceedings.
                  </li>
                </ul>

                <p>
                  Holding the right to use the information stated by you for
                  promotional purposes, we however guarantee of removing your
                  details from our database post to your request of doing so.
                  Responding to your requirements promptly, we take all the
                  necessary efforts to keep you satisfied from our work policy.
                </p>

                <p>
                  WE AT Excellis IT, TAKE YOUR PRIVACY VERY SERIOUSLY. WE WILL
                  NEVER SELL ANY OF YOUR INFORMATION TO ANY THIRD PARTY
                  AUTHORITIES. The information that you have provided to us is
                  securely stored on our servers. It is only used for providing
                  better services to you.
                </p>

                <h4>CHANGE OF POLICY:</h4>

                <p>
                  Please be noted that the above mentioned privacy policy is
                  subject to change and will be published at our website with
                  the immediate effect. It is in these regards that you are
                  recommended to go through the clauses briefed over here for an
                  apt understanding of our working procedure.
                </p>

                <h4>AGREEMENT TO THE POLICY:</h4>

                <p>
                  You should be aware that by submitting any kind of personal
                  details to our website, you indicate your acceptance to the
                  terms given above. In case of any queries or concerns, you are
                  always free Contact US for further assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
