import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/about-us/Nozrul Islam- Head of Marketing- Pixamoss.jpg";
import two from "public/images/about-us/Abdur Rahim Milon- Chief Financial Officer- Pixamoss.jpg";
import three from "public/images/about-us/Arman Alan- Production Manager- Pixamoss.jpg";
import four from  "public/images/about-us/Robin Wak- Quality Controler- Pixamoss.jpg";
import five from  "public/images/about-us/Tina Mars- Head of Digital Marketing- Pixamoss.jpg";



const AboutTeam = () => {
  return (
    <section className="section team-two pb-0">
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
                expert team
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Meet the awesome team
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div
              className="paragraph "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <p>
                Create with images only stoky subscribers have access to. New
                images added every month.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-two__slider-wrapper">
        <Swiper
          slidesPerView={1}
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
            1440: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          className="team-two__slider"
        >
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={one} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Head of Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={two} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Chief Financial Officer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={three} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Production Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={four} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Quality Controler</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={five} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Head of Digital Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={one} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Social Media Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={two} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Social Media Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={three} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Social Media Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={four} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Social Media Marketing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="team-two__slider-item">
              <Image src={five} alt="Image" />
              <div className="content">
                <h4 className="h4">
                  <Link href="teams">Achim Thiemer mann</Link>
                </h4>
                <p>Social Media Marketing</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutTeam;
