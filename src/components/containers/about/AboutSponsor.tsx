import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/sponsor/one.png";
import two from "public/images/sponsor/two.png";
import three from "public/images/sponsor/three.png";
import four from "public/images/sponsor/four.png";
import five from "public/images/sponsor/five.png";
import six from "public/images/sponsor/six.png";

const AboutSponsor = () => {
  return (
    <div className="sponsor-three sponsor-alt section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="sponsor-three__inner "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="row">
                <div className="col-12">
                  <div className="section__header text-center">
                    <h4 className="h4 text-capitalize">
                      Serving the world&apos;s top brands
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="sponsor__three-slider-wrapper">
                    <Swiper
                      slidesPerView={2}
                      spaceBetween={30}
                      slidesPerGroup={1}
                      speed={1200}
                      loop={true}
                      roundLengths={true}
                      centeredSlides={true}
                      centeredSlidesBounds={true}
                      modules={[Autoplay]}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                      breakpoints={{
                        1600: {
                          slidesPerView: 5,
                        },
                        1200: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                      className="sponsor__three-slider"
                    >
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={one} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={two} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={three} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={four} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={five} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={six} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={one} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={two} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={three} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={four} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={five} priority alt="Image" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="sponsor__slider-item">
                          <Image src={six} priority alt="Image" />
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
    </div>
  );
};

export default AboutSponsor;
