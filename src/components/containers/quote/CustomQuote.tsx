import React from "react";
import Image from "next/image";
import one from "public/images/quote/one.png";
import two from "public/images/quote/two.png";
import three from "public/images/quote/three.png";
import four from "public/images/quote/four.png";
import five from "public/images/quote/five.png";
import six from "public/images/quote/six.png";

const CustomQuote = () => {
  return (
    <div className="custom-quote">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="quote-wrapper">
              <div className="custom-quote__left custom-quote__left1">
                <div className="single">
                  <Image src={one} alt="Image" />
                </div>
                <div className="single">
                  <Image src={two} alt="Image" />
                </div>
                <div className="single">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="custom-quote__left custom-quote__left2">
                <div className="single">
                  <Image src={one} alt="Image" />
                </div>
                <div className="single">
                  <Image src={two} alt="Image" />
                </div>
                <div className="single">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className=" custom-quote__left custom-quote__left3">
                <div className="single">
                  <Image src={one} alt="Image" />
                </div>
                <div className="single">
                  <Image src={two} alt="Image" />
                </div>
                <div className="single">
                  <Image src={three} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="quote-wrapper">
              <div className="custom-quote__right custom-quote__right1">
                <div className="single">
                  <Image src={four} alt="Image" />
                </div>
                <div className="single">
                  <Image src={five} alt="Image" />
                </div>
                <div className="single">
                  <Image src={six} alt="Image" />
                </div>
              </div>
              <div className="custom-quote__right custom-quote__right2">
                <div className="single">
                  <Image src={four} alt="Image" />
                </div>
                <div className="single">
                  <Image src={five} alt="Image" />
                </div>
                <div className="single">
                  <Image src={six} alt="Image" />
                </div>
              </div>
              <div className="custom-quote__right custom-quote__right3">
                <div className="single">
                  <Image src={four} alt="Image" />
                </div>
                <div className="single">
                  <Image src={five} alt="Image" />
                </div>
                <div className="single">
                  <Image src={six} alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="trial__form">
              <form action="#" method="post">
                <div
                  className="form-group-wrapper "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <div className="form-group-single">
                    <label htmlFor="trialName">full name*</label>
                    <input
                      type="text"
                      name="trial-name"
                      id="trialName"
                      placeholder="enter your name"
                      required
                    />
                  </div>
                  <div className="form-group-single">
                    <label htmlFor="trialEmail">email address*</label>
                    <input
                      type="email"
                      name="trial-email"
                      id="trialEmail"
                      placeholder="enter your email"
                      required
                    />
                  </div>
                </div>
                <div
                  className="form-group-single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>select service*</p>
                  <select className="select-services">
                    <option data-display="Please Select">Our Services</option>
                    <option value="1">Background Remove</option>
                    <option value="2">Clipping Path</option>
                    <option value="3">Photo Manipulation</option>
                    <option value="4">Multiple Background</option>
                  </select>
                </div>
                <div
                  className="form-group-single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p>Output File Options</p>
                  <div className="check-ready-single">
                    <div className="singlee">
                      <input type="checkbox" name="c-one" id="cone" />
                      <label htmlFor="cone">jpg</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-two" id="ctwo" />
                      <label htmlFor="ctwo">png</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-three" id="cthree" />
                      <label htmlFor="cthree">Transparent</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-four" id="cfour" />
                      <label htmlFor="cfour">white</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-five" id="cfive" />
                      <label htmlFor="cfive">Include path</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-six" id="csix" />
                      <label htmlFor="csix">no path</label>
                    </div>
                    <div className="singlee">
                      <input type="checkbox" name="c-seven" id="cseven" />
                      <label htmlFor="cseven">jpg</label>
                    </div>
                  </div>
                </div>
                <div
                  className="form-group-single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <label htmlFor="trialMessage">your message</label>
                  <textarea
                    name="trial-message"
                    id="trialMessage"
                    placeholder="Type Here"
                  ></textarea>
                </div>
                <div className="drag">
                  <div
                    className="drag__content "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    <input type="file" name="trail-file" id="trialFile" />
                    <p>Drag & Drop Files Here</p>
                    <p>or</p>
                    <p>browse file</p>
                  </div>
                  <p>
                    If the size is more than 50 Mb, share your images via cloud
                    (Google Drive, Dropbox)
                  </p>
                </div>
                <div
                  className="form-group-single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <input
                    type="text"
                    name="trail-link"
                    id="trailLink"
                    placeholder="paste the link here"
                  />
                </div>
                <div className="group-radio">
                  <input type="checkbox" name="read-terms" id="readTerms" />
                  <label htmlFor="readTerms">
                    I have read and agree to the Terms & Conditions
                  </label>
                </div>
                <div className="cta__group">
                  <button className="btn btn--primary">submit now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomQuote;
