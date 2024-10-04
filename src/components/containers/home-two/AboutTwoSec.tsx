import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/about/about-two-thumb.png";
import polygon from "public/images/about/polygon.png";
import polygonTwo from "public/images/about/polygon.png";

const AboutTwoSec = () => {
  return (
    <section className="section about-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-6">
            <div
              className="about-two__thumb text-lg-end "
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
            <div className="about-two__content section__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                about us
              </p>
              <h2
                className="h2 title text-uppercase "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                We&apos;re your virtual photo editing & design studio
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                  Image editing services for ecommerce businesses and pros, from
                  product photographers to Amazon sellers to global brands.
                </p>
                <p>
                  Because a quick product shoot can easily turn into a week or
                  more of editing and formatting your images. Let us look after
                  the edits, so you can get back to the work that needs you.
                </p>
              </div>
              <div className="cta__group justify-content-start">
                <Link href="about-us" className="btn btn--quinary">
                  Know more about us
                </Link>
                <Link href="service-details" className="btn btn--senary">
                  Starting at <span>25¢ /</span> per image
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__anime">
        <Image src={polygon} alt="Image" className="one" />
        <Image src={polygonTwo} alt="Image" className="two" />
      </div>
    </section>
  );
};

export default AboutTwoSec;
