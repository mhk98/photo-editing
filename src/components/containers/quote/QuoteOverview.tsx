import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/quote-thumb.png";
import Anime from "public/images/quote-anime.png";
import Counter from "../Counter";

const QuoteOverview = () => {
  return (
    <div className="section quote-overview">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-7 col-xl-6 col-xxl-5">
            <div className="quote-overview__content section__content">
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Price Quotes At photodit
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p>
                  Select multiple areas within your image so they can be edited
                  separately. Put your images on any background color or setting
                </p>
              </div>
              <div className="quote__counter">
                <div
                  className="single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h4 className="h4">
                    <span className="odometer">
                      <Counter value={90} />
                    </span>
                    <span>+</span>
                  </h4>
                  <p>Certified Professionals</p>
                </div>
                <div
                  className="single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h4 className="h4">
                    <span className="odometer">
                      <Counter value={80} />
                    </span>
                    <span>%</span>
                  </h4>
                  <p>Faster Delivery</p>
                </div>
                <div
                  className="single "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h4 className="h4">
                    <span className="odometer">
                      <Counter value={85} />
                    </span>
                    <span>%</span>
                  </h4>
                  <p>Lower Cost</p>
                </div>
              </div>
              <div className="cta__group justify-content-start">
                <Link href="sign-in" className="btn btn--secondary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-6 col-xxl-6 offset-xxl-1">
            <div
              className="quote-overview__thumb "
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <Image src={Anime} alt="Image" className="quote-anime" />
    </div>
  );
};

export default QuoteOverview;
