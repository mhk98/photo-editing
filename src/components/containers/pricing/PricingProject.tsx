/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Car from "public/images/project/car.png";
import mostClippingPath from "public/images/pricing1/Our most-clipping-path-service.jpg";
import mostGhostMannequin from "public/images/pricing1/Our most-Ghost-Mannequin.jpg";
import mostImageRetouching from "public/images/pricing1/Our most-image retouching.jpg";

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
                          <Image src={mostClippingPath} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Clipping Path Service</h2>
                          <div className="paragraph">
                            <p>
                            Pixamoss offers Clipping Path Services, an important image editing method using Adobe Photoshop's Pen Tool to isolate subjects from their backgrounds. This technique is particularly useful for product photography and e-commerce, as it improves the visual appeal of images and allows for flexible background choices.
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
                          <Image src={mostGhostMannequin} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Ghost Mannequin Service</h2>
                          <div className="paragraph">
                            <p>
                            Pixamoss's Ghost Mannequin Service revolutionizes fashion photography by removing the mannequin from product images while preserving the clothing's depth and shape. This technique allows customers to better visualize the fit and flow of garments, enhancing their appeal and creating a seamless shopping experience.

                            </p>
                          </div>
                          <div className="price-tag">
                            <p>
                              starting at <span>$0.59 Only</span>
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
                          <Image src={mostImageRetouching} alt="Image" />
                        </div>
                        <div className="content section__content">
                          <h2 className="h2 title">Image Retouching Service</h2>
                          <div className="paragraph">
                            <p>
                            Pixamoss offers a range of Image retouching services, such as product, model, and jewelry enhancements, which improve product presentation and reinforce brand credibility. Utilizing these expert services helps companies attract customers, improve conversion rates, and increase sales. 

                            </p>
                          </div>
                          <div className="price-tag">
                            <p>
                              starting at <span>$0.79 Only</span>
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
