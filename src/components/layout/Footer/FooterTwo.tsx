import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoLight from "public/images/logo-light.png";

const FooterTwo = () => {
  return (
    <footer className="section section--space-top footer footer-two ">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="footer__head">
                <h5 className="h5">services</h5>
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
                <h5 className="h5">helps and faq</h5>
              </div>
              contact us free trail News & Blog pricing plan
              <div className="footer__list">
                <ul>
                  <li>
                    <Link href="contact-us">
                      <i className="fa-solid fa-angle-right"></i>contact us
                    </Link>
                  </li>
                  <li>
                    <Link href="get-quote">
                      <i className="fa-solid fa-angle-right"></i>free trial
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      <i className="fa-solid fa-angle-right"></i>News & Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="pricing">
                      <i className="fa-solid fa-angle-right"></i>pricing plan
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
                    <Link href="about-us">
                      <i className="fa-solid fa-angle-right"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fa-solid fa-angle-right"></i>Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
            <div className="footer__single ">
              <div className="footer__head">
                <h5 className="h5">get newsletter</h5>
              </div>
              <div className="footer__newsletter">
                <form action="#" method="post">
                  <div className="group-input">
                    <input
                      type="email"
                      name="footer-newsletter"
                      id="footerNewsletter"
                      placeholder="Enter your mail"
                      required
                    />
                    <button type="submit" aria-label="subscribe our newsletter">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                  <div className="group-radio">
                    <input type="checkbox" name="news-agree" id="newsAgree" />
                    <label htmlFor="newsAgree">
                      Agree with our terms & conditions
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer-two__group">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-3">
                  <div className="footer-two__group-first">
                    <Link href="/">
                      <Image src={LogoLight} alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-5">
                  <div className="footer-two__group-second">
                    <div className="single">
                      <p>free photos serve</p>
                      <p className="h5">25K</p>
                    </div>
                    <div className="single">
                      <p>total image serve</p>
                      <p className="h5">27.39 M</p>
                    </div>
                    <div className="single">
                      <p>total clients</p>
                      <p className="h5">450+</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3 col-xl-4">
                  <div className="footer-two__group-social">
                    <ul className="social d-flex">
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
                          <i className="fa-brands fa-pinterest-p"></i>
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
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__bottom">
              <div className="row">
                <div className="col-12">
                  <div className="footer__copy text-center mt-0">
                    <p>
                      Copyright &copy; <span id="copyYear"></span>{" "}
                      <Link href="/">photodit</Link> All Rights Reserved.
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

export default FooterTwo;
