import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/about-thumb.png";

const AboutMain = () => {
  return (
    <section className="section bg-alt about-section">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-6">
            <div
              className="about-section__thumb "
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={Thumb} alt="Image" />
              <div className="about-section__thumb-content">
                <p className="h5">
                  Starting at 25¢ / <span>per image</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="about-section__content section__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                about us
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Edit your photo in seconds with photodit
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="600"
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
              <div
                className="cta__group justify-content-start "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Link href="about-us" className="btn btn--primary">
                  Know More{" "}
                </Link>
                <Link href="contact-us" className="btn btn--secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
