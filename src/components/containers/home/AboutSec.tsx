import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutThumb from "public/images/about-thumb.png";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/feature/one.png";
import two from "public/images/feature/two.png";
import three from "public/images/feature/three.png";

interface HomeAbout {
  id: number; 
  image: string; 
}

const AboutSec = () => {


  const [homeAboutData, setHomeAboutData] = useState<HomeAbout[]>([]);

  console.log(homeAboutData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeAbout[] }>('https://api.pixamoss.com/api/v1/aboutUs');
        setHomeAboutData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="section bg-white about-section">
      <div className="container">
        <div className="row gaper align-items-center">
        
        {
          homeAboutData?.map((item) =>(
            <div key={item.id} className="col-12 col-lg-5 col-xl-6">
            <div 
              className="about-section__thumb "
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
               <Image  
              src={`https://api.pixamoss.com/${item.image}`}
              width={635} 
              height={460} 
              layout="responsive"  
              alt="Image" />
              <div className="about-section__thumb-content">
                <p className="h5">
                  Starting at 25¢ / <span>per image</span>
                </p>
              </div>
            </div>
          </div>
          ))
        }
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="about-section__content section__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                about us
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
               Instant Image Makeover: Pixamoss Revamps Your Photos in Minutes
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 ">
                Image editing is essential for e-commerce businesses as it enhances product visuals, significantly
impacting sales and customer engagement. Professional image editing services save time and improve
product appeal, catering to product photographers, Amazon sellers, and global brands. 
                </p>
                <p>
                Benefits of using these services include time savings, professional quality that meets industry standards,
                and scalability as businesses grow. Overall, investing in professional image editing is a strategic move for e-commerce businesses to enhance product presentation and boost sales, allowing entrepreneurs to
                concentrate on business growth.
                </p>
              </div>
              <div
                className="cta__group justify-content-start "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Link href="about-us" className="btn btn--primary">
                  Know More{" "}
                </Link>
                <Link href="contact-us" className="btn btn--secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
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

export default AboutSec;
