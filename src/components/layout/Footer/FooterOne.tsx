import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "public/images/logo-light.png";

const FooterOne = () => {
  return (
    <footer className="section section--space-top footer ">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="logo">
                <Link href="/">
                  <Image src={LogoLight} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <p>
                  We isolate images from their backgrounds using clipping paths
                  or masks. We do it 100% hand-made. Clipping Factory isolates
                  images from their backgrounds.
                </p>
              </div>
              <ul className="social">
                <li>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/" aria-label="social media">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="footer__head">
                <h5 className="h5">our services</h5>
              </div>
              <div className="footer__list">
                <ul>
                  <li>
                    <Link href="service-details">
                      <i className="fa-solid fa-angle-right"></i>clipping path
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      <i className="fa-solid fa-angle-right"></i>background
                      remove
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      <i className="fa-solid fa-angle-right"></i>image masking
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      <i className="fa-solid fa-angle-right"></i>image retouch
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="footer__head">
                <h5 className="h5">Meet with photodit</h5>
              </div>
              <div className="footer__list">
                <ul>
                  <li>
                    <Link href="about-us">
                      <i className="fa-solid fa-angle-right"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="contact-us">
                      <i className="fa-solid fa-angle-right"></i>Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      <i className="fa-solid fa-angle-right"></i>News & Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="contact-us">
                      <i className="fa-solid fa-angle-right"></i>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="footer__head">
                <h5 className="h5">get in touch</h5>
              </div>
              <div className="footer__address">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot"></i>Vietnam
                      Office: #5 Nguyentrai street, Vinh city, Vietnam{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:company.info@mail.com">
                      <i className="fa-solid fa-envelope"></i>
                      company.info@mail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:1-732-798-0976">
                      <i className="fa-solid fa-phone-volume"></i>+1 (732)
                      798-0976
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__bottom">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <div className="footer__nav">
                    <ul>
                      <li>
                        <Link href="about-us">
                          <i className="fa-solid fa-angle-right"></i>Privacy
                          Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="about-us">
                          <i className="fa-solid fa-angle-right"></i>Terms &
                          Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="sign-in">
                          <i className="fa-solid fa-angle-right"></i>Free Trial
                        </Link>
                      </li>
                      <li>
                        <Link href="pricing">
                          <i className="fa-solid fa-angle-right"></i>Payment
                        </Link>
                      </li>
                      <li>
                        <Link href="contact-us">
                          <i className="fa-solid fa-angle-right"></i>Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="footer__copy text-center text-lg-end">
                    <p>
                      Copyright &copy; <span id="copyYear"></span>{" "}
                      <Link href="/">photodit </Link> All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
