import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Car from "public/images/project/car.png";

const PricingProject = () => {
  return (
    <section className="section recent-project">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-lg-7">
            <div className="section__header">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                recent completed projects
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Our most popular photo-editing services
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="recent-project-pagination slick-pagination justify-content-lg-end"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="recent-project__inner">
              <div className="recent-project__slider-wrapper">
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
                    el: ".recent-project-pagination",
                    clickable: true,
                  }}
                  className="recent-project__slider"
                >
                  <SwiperSlide>
                    <div className="recent-project__slider-item">
                      <div className="recent-project__slider-item-inner">
                        <div className="thumb">
                          <Image src={Car} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Multi-clipping Path</h2>
                          <div className="paragraph">
                            <p>
                              Select multiple areas within your image so they
                              can be edited separately. Put your images on any
                              background color or setting
                            </p>
                          </div>
                          <div className="price-tag">
                            <p>
                              starting at <span>$0.39 Only</span>
                            </p>
                          </div>
                          <div className="cta__group justify-content-start">
                            <Link
                              href="service-details"
                              className="btn btn--secondary "
                            >
                              view details
                            </Link>
                            <Link
                              href="contact-us"
                              className="btn btn--primary  "
                            >
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="recent-project__slider-item">
                      <div className="recent-project__slider-item-inner">
                        <div className="thumb">
                          <Image src={Car} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Multi-clipping Path</h2>
                          <div className="paragraph">
                            <p>
                              Select multiple areas within your image so they
                              can be edited separately. Put your images on any
                              background color or setting
                            </p>
                          </div>
                          <div className="price-tag">
                            <p>
                              starting at <span>$0.39 Only</span>
                            </p>
                          </div>
                          <div className="cta__group justify-content-start">
                            <Link
                              href="service-details"
                              className="btn btn--secondary "
                            >
                              view details
                            </Link>
                            <Link
                              href="contact-us"
                              className="btn btn--primary  "
                            >
                              Order Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="recent-project__slider-item">
                      <div className="recent-project__slider-item-inner">
                        <div className="thumb">
                          <Image src={Car} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Multi-clipping Path</h2>
                          <div className="paragraph">
                            <p>
                              Select multiple areas within your image so they
                              can be edited separately. Put your images on any
                              background color or setting
                            </p>
                          </div>
                          <div className="price-tag">
                            <p>
                              starting at <span>$0.39 Only</span>
                            </p>
                          </div>
                          <div className="cta__group justify-content-start">
                            <Link
                              href="service-details"
                              className="btn btn--secondary "
                            >
                              view details
                            </Link>
                            <Link
                              href="contact-us"
                              className="btn btn--primary  "
                            >
                              Order Now
                            </Link>
                          </div>
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
    </section>
  );
};

export default PricingProject;
