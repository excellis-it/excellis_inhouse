import React, { useState, useEffect } from "react";
import "./assets/Style.css";
import { db } from "../firebase";
import ReCAPTCHA from "react-google-recaptcha";
const handleOnChange = (value) => {
  this.handleOnChange = this.handleOnChange.bind(this);
  console.log("Captcha value:", value);
};
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnumber, SetCnumber] = useState("");
  const [skypenumber, setSkypenumber] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const [hereus, setHereus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Home Contacts")
      .add({
        name: name,
        email: email,
        cnumber: cnumber,
        skypenumber: skypenumber,
        message: message,
        interest: interest,
        hereus: hereus,
      })
      .then(() => {
        alert("message has been submited  ");
      })
      .catch((error) => {
        alert("error.message");
      });

    setName("");
    setEmail("");
    SetCnumber("");
    setSkypenumber("");
    setMessage("");
    setInterest("");
    setHereus("");
  };

  // this.handleOnChange = this.handleOnChange.bind(this);

  // const onfilechange = (e) => {
  //   console.log(e.target.files[0]);
  // };

  return (
    <div>
      <form
        method="POST"
        action="contact.php"
        enctype="multipart/form-data"
        id="footerfrm"
        onSubmit={handleSubmit}
      >
        <h4 id="showmsgfooter">Personal Details</h4>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Name<sup>*</sup>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Email Address<sup>*</sup>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Phone Number<sup>*</sup>
              </label>
              <input
                type="tel"
                value={cnumber}
                onChange={(e) => SetCnumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>Skype ID</label>
              <input
                type="text"
                value={skypenumber}
                onChange={(e) => setSkypenumber(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                What is your interest?<sup>*</sup>
              </label>
              <select required onChange={(e) => setInterest(e.target.value)}>
                <option value="">Select Option</option>
                <option value="partner">Become A Partner</option>
                <option value="webDevelopment">Website Development</option>
                <option value="ecomDevelopment">E-commerce Development</option>
                <option value="Branding">Branding</option>
                <option value="appDevelopment">App Development</option>
                <option value="domainhosting">Domains &amp; Hosting</option>
                <option value="coffee">Just having a Coffee</option>
                <option value="tentewnty">Working at TenTwenty</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Where did you here about us?<sup>*</sup>{" "}
              </label>
              <select onChange={(e) => setHereus(e.target.value)}>
                <option value="">Select Option</option>
                <option value="Google">Google</option>
                <option value="Clutch">Clutch</option>
                <option value="People Per Hour">People Per Hour</option>
                <option value="Good Firms">Good Firms</option>
                <option value="Personal Reference">Personal Reference</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="con_foo_input_wrapper">
              <label>Your Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-md-12">
            <div class="con_foo_input_wrapper">
              <label>Attach files</label>
              <input class="file_type" type="file" onChange={onfilechange} />
            </div>
          </div>
        </div> */}
        <ReCAPTCHA
          sitekey="6LeHDpEeAAAAAJV8xlc3Ox1rznuH8zBp-USMGBeA"
          onChange={this.handleOnChange}
        />
        <div class="row">
          <div class="col-md-4">
            <button type="submit" className="enquire_btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
