import React from "react";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <section className="cmn-banner cmn-banner--alt section ">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-md-8">
            <h2
              className="h2 title "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              something about us
            </h2>
          </div>
          <div className="col-12 col-md-4">
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-md-end "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="left-triangle">
        <div className="triangle"></div>
      </div>
      <div className="right-triangle">
        <div className="triangle"></div>
        <div className="right-alt"></div>
      </div>
    </section>
  );
};

export default AboutBanner;
