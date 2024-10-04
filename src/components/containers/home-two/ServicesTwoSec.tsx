import React from "react";
import Image from "next/image";
import Link from "next/link";
import slidetwo from "public/images/services/slide-two.png";
import slidethree from "public/images/services/slide-three.png";
import slidefour from "public/images/services/slide-four.png";
import slidefive from "public/images/services/slide-five.png";
import slidesix from "public/images/services/slide-six.png";
import slideone from "public/images/services/slide-one.png";

const ServicesTwoSec = () => {
  return (
    <section className="section service-two pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section__header text-center">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                our services
              </p>
              <h2
                className="h2 title text-uppercase "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                We&apos;re Good at Best Clipping Path Service
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single fi "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={slidetwo} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single tw "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={slidethree} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single th "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={slidefour} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single on "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <Image src={slideone} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single si "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={slidesix} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="services__slider-single fo "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={slidefive} alt="Image" />
              </div>
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path services</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTwoSec;
