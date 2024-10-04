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
                      unique features
                    </p>
                    <h2
                      className="h2 title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      photodit Unique Features
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
                                edited by hand
                              </h5>
                              <p className="text-capitalize">
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
                                pixel perfect result
                              </h5>
                              <p className="text-capitalize">
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
                                edited by hand
                              </h5>
                              <p className="text-capitalize">
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
                                pixel perfect result
                              </h5>
                              <p className="text-capitalize">
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
                                Clipping Path Could be a process by which photo
                                editors make a vector path
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
