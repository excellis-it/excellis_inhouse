import React, { useState, useEffect, useRef } from "react";
import "./assets/Style.css";
import { db, storage, ref as storageRef } from "../firebase";
import ReCAPTCHA from "react-google-recaptcha";
import { ref, uploadBytesResumable } from "firebase/storage";
const SITE_KEY = "6LeHDpEeAAAAAJV8xlc3Ox1rznuH8zBp-USMGBeA";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnumber, SetCnumber] = useState("");
  const [skypenumber, setSkypenumber] = useState("");
  const [message, setMessage] = useState("");
  const [interest, setInterest] = useState("");
  const [hereus, setHereus] = useState("");
  const [recaptchaValue, setrecaptchaValue] = useState("true");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let recaptchaValue = recaptchaReference.current.getValue();
    console.log("recaptchaValue", recaptchaValue); //prompts the value
    db.collection("Home Contacts")
      .add({
        name: name,
        email: email,
        cnumber: cnumber,
        skypenumber: skypenumber,
        message: message,
        interest: interest,
        hereus: hereus,
        recaptchaValue: recaptchaValue,
      })
      .then(() => {
        alert("message has been submited  ");
      })
      .catch((error) => {
        alert("error.message");
      });
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("file")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );

    setName("");
    setEmail("");
    SetCnumber("");
    setSkypenumber("");
    setMessage("");
    setInterest("");
    setHereus("");
    setrecaptchaValue("");
  };

  // const onfilechange = (e) => {
  //   console.log(e.target.files[0]);
  //   const file = e.target.files[0];
  //   uoloadFiles(file);
  // };

  // const uoloadFiles = (file) => {
  //   if (!file) return;

  //   const storageRef = storageRef(storage, `files/${file.name}`).put(file);
  //   //console.log(storageRef);
  //   const uploadTask = uploadBytesResumable(storageRef, file);
  // };

  const recaptchaReference = useRef(null);

  const handleChange = async () => {};

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
              <input class="file_type" type="file" onChange={handleChange} />
            </div>
          </div>
        </div> */}
        <label>
          <ReCAPTCHA
            sitekey={SITE_KEY}
            ref={recaptchaReference}
            onChange={handleChange}
          />
        </label>

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
}
export default ContactForm;
