import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/banner/banner-two-thumb.png";
import One from "public/images/banner/banner-two-one.png";
import Two from "public/images/banner/banner-two-anime.png";

const HomeTwoBanner = () => {
  return (
    <section className="banner-two ">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-8 col-lg-8 col-xl-8">
            <div className="banner-two__content banner__content">
              <p
                className="h6 sub-title "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Get pixel perfect image editing services
              </p>
              <h1
                className="h1 "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                perfectly <span>edited</span> <br /> <span>product</span> photos
              </h1>
              <div
                className="cta__group "
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
                <Link href="get-quote" aria-label="create account">
                  <i className="icon-arrow-right"></i>start free trail
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="banner-two__thumb">
              <Image src={Thumb} priority alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner-two__small-thumb">
        <Image src={One} priority alt="Image" className="one" />
        <Image src={Two} priority alt="Image" className="two" />
      </div>
    </section>
  );
};

export default HomeTwoBanner;
