import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Thumb from "public/images/testimonial/testimonial-thumb.png";
import trust from "public/images/testimonial/trust.png";
import Author from "public/images/testimonial/author-three.png";
import circle from "public/images/testimonial/circle.png";
import polygon from "public/images/testimonial/polygon.png";

const TestimonialTwo = () => {
  return (
    <section className="section testimonial-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-two__slider-wrapper">
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
                  el: ".testimonial-two-pagination",
                  clickable: true,
                }}
                className="testimonial-two__slider"
              >
                <SwiperSlide>
                  <div className="testimonnial-two__slider-item">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4">
                        <div className="testimonnial-two__slider-item__thumb text-lg-end">
                          <Image src={Thumb} alt="Image" />
                          <div className="trust">
                            <Image src={trust} alt="Image" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-8 col-xxl-6 offset-xxl-1">
                        <div className="testimonnial-two__slider-item__content section__content">
                          <p className="h6 sub-title">client&apos;s testimonial</p>
                          <h2 className="h2 title text-uppercase">
                            Some Of Our Respected Happy Clients Says
                          </h2>
                          <div className="quote">
                            <i className="icon-quote"></i>
                          </div>
                          <div className="content">
                            <q className="h4">
                              Welcome to our digital agency We specialize in
                              helping business most like yours succeed online.
                              From website design and development to digital
                              marketing agency
                            </q>
                          </div>
                          <div className="d-flex align-items-center justify-content-between position-relative">
                            <div className="testimonnial-two__slider-item__content-meta">
                              <div className="thumb">
                                <Image src={Author} alt="Image" />
                              </div>
                              <div className="content">
                                <p className="h5">Delores Olivo</p>
                                <p>From UK</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnial-two__slider-item">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4">
                        <div className="testimonnial-two__slider-item__thumb text-lg-end">
                          <Image src={Thumb} alt="Image" />
                          <div className="trust">
                            <Image src={trust} alt="Image" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-8 col-xxl-6 offset-xxl-1">
                        <div className="testimonnial-two__slider-item__content section__content">
                          <p className="h6 sub-title">client&apos;s testimonial</p>
                          <h2 className="h2 title text-uppercase">
                            Some Of Our Respected Happy Clients Says
                          </h2>
                          <div className="quote">
                            <i className="icon-quote"></i>
                          </div>
                          <div className="content">
                            <q className="h4">
                              Welcome to our digital agency We specialize in
                              helping business most like yours succeed online.
                              From website design and development to digital
                              marketing agency
                            </q>
                          </div>
                          <div className="d-flex align-items-center justify-content-between position-relative">
                            <div className="testimonnial-two__slider-item__content-meta">
                              <div className="thumb">
                                <Image src={Author} alt="Image" />
                              </div>
                              <div className="content">
                                <p className="h5">Delores Olivo</p>
                                <p>From UK</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonnial-two__slider-item">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4">
                        <div className="testimonnial-two__slider-item__thumb text-lg-end">
                          <Image src={Thumb} alt="Image" />
                          <div className="trust">
                            <Image src={trust} alt="Image" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-8 col-xxl-6 offset-xxl-1">
                        <div className="testimonnial-two__slider-item__content section__content">
                          <p className="h6 sub-title">client&apos;s testimonial</p>
                          <h2 className="h2 title text-uppercase">
                            Some Of Our Respected Happy Clients Says
                          </h2>
                          <div className="quote">
                            <i className="icon-quote"></i>
                          </div>
                          <div className="content">
                            <q className="h4">
                              Welcome to our digital agency We specialize in
                              helping business most like yours succeed online.
                              From website design and development to digital
                              marketing agency
                            </q>
                          </div>
                          <div className="d-flex align-items-center justify-content-between position-relative">
                            <div className="testimonnial-two__slider-item__content-meta">
                              <div className="thumb">
                                <Image src={Author} alt="Image" />
                              </div>
                              <div className="content">
                                <p className="h5">Delores Olivo</p>
                                <p>From UK</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="testimonial-two-pagination slick-pagination justify-content-sm-end"></div>
          </div>
        </div>
      </div>
      <div className="anime">
        <Image src={circle} alt="Image" className="one" />
        <Image src={polygon} alt="Image" className="two" />
      </div>
    </section>
  );
};

export default TestimonialTwo;
