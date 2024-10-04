import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import BigImg from "public/images/news/four.png";
import SmImg from "public/images/news/five.png";

const NewsTwo = () => {
  return (
    <section className="section news-two pb-0">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-md-7">
            <div className="section__header">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                photodit blogs
              </p>
              <h2
                className="h2 title text-uppercase "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Get inspired, gain new skills
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="text-md-end">
              <Link href="blog" className="btn btn--secondary">
                view all blog
              </Link>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-xl-8">
            <div className="news-two__content">
              <div className="news-two__slider-wrapper">
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
                    el: ".news-two-pagination",
                    clickable: true,
                  }}
                  className="news-two__slider"
                >
                  <SwiperSlide>
                    <div>
                      <div className="news-two__slider-item">
                        <div className="content">
                          <p>
                            <Link href="blog">Digital marketing news</Link>
                          </p>
                          <h4 className="h4 text-capitalize">
                            <Link href="blog-single">
                              How to Create a White Back ground in Photoshop:
                              Tutorial
                            </Link>
                          </h4>
                          <p>
                            By <span>Max Trewhitt</span> 2 weeks ago
                          </p>
                        </div>
                        <div className="thumb">
                          <Link href="blog-single">
                            <Image src={BigImg} alt="Image" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="news-two__slider-item">
                        <div className="content">
                          <p>
                            <Link href="blog">Digital marketing news</Link>
                          </p>
                          <h4 className="h4 text-capitalize">
                            <Link href="blog-single">
                              How to Create a White Back ground in Photoshop:
                              Tutorial
                            </Link>
                          </h4>
                          <p>
                            By <span>Max Trewhitt</span> 2 weeks ago
                          </p>
                        </div>
                        <div className="thumb">
                          <Link href="blog-single">
                            <Image src={BigImg} alt="Image" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="news-two__slider-item">
                        <div className="content">
                          <p>
                            <Link href="blog">Digital marketing news</Link>
                          </p>
                          <h4 className="h4 text-capitalize">
                            <Link href="blog-single">
                              How to Create a White Back ground in Photoshop:
                              Tutorial
                            </Link>
                          </h4>
                          <p>
                            By <span>Max Trewhitt</span> 2 weeks ago
                          </p>
                        </div>
                        <div className="thumb">
                          <Link href="blog-single">
                            <Image src={BigImg} alt="Image" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="news-two-pagination slick-pagination"></div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-xl-4">
            <div
              className="news-two__alt "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Link href="blog-single">
                  <Image src={SmImg} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4 className="h4">
                  <Link href="blog-single">
                    How to Use Background Removal Services Improve Your
                  </Link>
                </h4>
                <div className="meta">
                  <Link href="blog">Digital marketing news</Link>
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsTwo;
