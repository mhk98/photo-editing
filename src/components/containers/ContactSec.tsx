import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/arrow.png";

const ContactSec = () => {
  return (
    <>
      <section className="section contact-main">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="contact-main__thumb">
                <div className="content">
                  <h2
                    className="h2 title "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    Have something in mind? Let&apos;s talk.
                  </h2>
                  <div
                    className="paragraph "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                  </div>
                </div>
                <div className="thumb">
                  <Image src={Arrow} alt="Image" />
                </div>
                <div
                  className="single-group "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <ul>
                    <li>
                      <Link
                        href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                        target="_blank"
                      >
                        <i className="fa-solid fa-location-dot"></i>785 15h
                        Street, Office 478 Berlin{" "}
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:1-732-798-0976">
                        <i className="fa-solid fa-phone-volume"></i>+1 800 555
                        45 65
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:company.info@mail.com">
                        <i className="fa-solid fa-envelope"></i>
                        info.stoky@company.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="contact-main__content">
                <form action="#" method="post">
                  <div
                    className="group-input "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <input
                      type="text"
                      name="contact-name"
                      id="contactName"
                      placeholder="enter full name"
                    />
                  </div>
                  <div
                    className="group-input "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <input
                      type="email"
                      name="contact-email"
                      id="contactEmail"
                      placeholder="enter Your Email"
                    />
                  </div>
                  <div
                    className="group-input "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <select className="subject">
                      <option data-display="Select Subject">
                        Select Subject
                      </option>
                      <option value="1">Account</option>
                      <option value="2">Service</option>
                      <option value="3">Pricing</option>
                      <option value="4">Support</option>
                    </select>
                  </div>
                  <div
                    className="group-input "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    <textarea
                      name="contact-message"
                      id="contactMessage"
                      placeholder="Write a message"
                    ></textarea>
                  </div>
                  <div className="group-radio">
                    <input
                      type="checkbox"
                      name="contact-check"
                      id="contactCheck"
                    />
                    <label htmlFor="contactCheck">
                      I accept your terms & conditions
                    </label>
                  </div>
                  <div className="cta__group justify-content-start">
                    <button type="submit" className="btn btn--primary">
                      Send Message<i className="fa-solid fa-paper-plane"></i>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="map-wrapper "
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
          width="100"
          height="800"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactSec;
