import React from "react";
import Image from "next/image";
import Link from "next/link";
import large from "public/images/team/large.png";
import onem from "public/images/team/one-m.png";
import twom from "public/images/team/two-m.png";
import threem from "public/images/team/three-m.png";
import fourm from "public/images/team/four-m.png";
import fivem from "public/images/team/five-m.png";
import sixm from "public/images/team/six-m.png";

const TeamMainSec = () => {
  return (
    <section className="section team-main pb-0">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="section__header">
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Our Team of Dedicated Digital Professionals
              </h2>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-5 offset-xxl-2">
            <div
              className="paragraph "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <p>
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determine.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <Image src={large} alt="Image" />
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={onem} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={twom} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={threem} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <Image src={fourm} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={fivem} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
          <div className="col-12 col-md-6 col-xxl-4">
            <div
              className="team-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={sixm} alt="Image" />
              </div>
              <div className="single">
                <div className="content">
                  <h5 className="h5">Sergio R. Haas</h5>
                  <p>Creative Designer</p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMainSec;
