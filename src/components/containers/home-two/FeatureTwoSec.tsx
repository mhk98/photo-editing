import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/feature/one.png";
import two from "public/images/feature/two.png";
import three from "public/images/feature/three.png";

const FeatureTwoSec = () => {
  return (
    <section className="feature-two section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature__inner">
              <div className="row align-items-center section__header--alt">
                <div className="col-12 col-lg-7 col-xxl-5">
                  <div className="section__header">
                    <p
                      className="h6 sub-title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                     Choose Us
                    </p>
                    <h2
                      className="h2 title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                     Discover the Benefits of Choosing Pixamoss..
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-xxl-7">
                  <div className="feature-pagination slick-pagination justify-content-lg-end"></div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="feature__slider-wrapper">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      speed={1200}
                      loop={true}
                      roundLengths={false}
                      centeredSlides={false}
                      centeredSlidesBounds={false}
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      pagination={{
                        el: ".feature-pagination",
                        clickable: true,
                      }}
                      breakpoints={{
                        1200: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                      className="feature__slider"
                    >
                      <SwiperSlide>
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="thumb">
                              <Image src={one} alt="Image" />
                            </div>
                            <div className="content">
                              <h5 className="h5 text-uppercase">
                              EDITED BY HAND
                              </h5>
                              <p className="text-capitalize">
                              Expert editors meticulously refine every detail, ensuring excellence in every change, all while relying on
                              their keen eye for detail rather than automated tools for the most polished outcomes.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="thumb">
                              <Image src={two} alt="Image" />
                            </div>
                            <div className="content">
                              <h5 className="h5 text-uppercase">
                              PIXEL PERFECT RESULTS
                              </h5>
                              <p className="text-capitalize">
                              Our designers excel at skillfully cutting out even the most intricate shapes, ensuring a flawless finish
                              without any unwanted jagged lines.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="thumb">
                              <Image src={three} alt="Image" />
                            </div>
                            <div className="content">
                              <h5 className="h5 text-uppercase">
                                24/7 support
                              </h5>
                              <p className="text-capitalize">
                              Our team is always ready to help with customer support and invites requests for further adjustments or
                              alternative results.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="thumb">
                              <Image src={one} alt="Image" />
                            </div>
                            <div className="content">
                              <h5 className="h5 text-uppercase">
                              QUICK TURNAROUND
                              </h5>
                              <p className="text-capitalize">
                              We ensure customers can receive their pictures within 4 hours, regardless of the quantity. It emphasizes
reliability and readiness to assist with any adjustments or additional needs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="thumb">
                              <Image src={two} alt="Image" />
                            </div>
                            <div className="content">
                              <h5 className="h5 text-uppercase">
                              BUDGET FRIENDLY
                              </h5>
                              <p className="text-capitalize">
                              Starting at just $0.39 per image, our editing services are significantly more affordable than handling it
                              in-house.
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwoSec;
