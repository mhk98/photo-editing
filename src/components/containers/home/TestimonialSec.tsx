import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import authorone from "public/images/author-one.png";
import authortwo from "public/images/author-two.png";
import authorthree from "public/images/author-three.png";
import axios from "axios";
import mc from "../../../images/mc (1).webp"


interface HomeTestimonial {
  id: number; 
  image1: string;
  image2: string;
  image3: string;

}

const TestimonialSec = () => {
  const colors = ["#4569e7", "#e74545", "#181818"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleSlideChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };

  const currentBackgroundColor = colors[currentColorIndex];


  const [data, setData] = useState<HomeTestimonial[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeTestimonial[] }>('https://api.pixamoss.com/api/v1/testimonial');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      className="section testimonial"
      style={{ backgroundColor: currentBackgroundColor }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xl-4">
            <div className="section__content testimonial__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                customer testimonial
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                They love us. You will too.
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p>
                  Because a quick product shoot can easily turn into a week or
                  more of editing and formatting your images. Let us look after
                  the edits,
                </p>
              </div>
              <div className="testimonial__content-cta section__content-cta">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-testimonial"
                >
                  <i className="icon-arrow-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-testimonial"
                >
                  <i className="icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8">
           
           {
            data?.map((item)=>(
               <div key={item.id} className="testimonial__slider-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                navigation={{
                  nextEl: ".next-testimonial",
                  prevEl: ".prev-testimonial",
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1800: {
                    slidesPerView: 4,
                  },
                  1440: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 1.8,
                  },
                }}
                className="testimonial__slider"
                onSlideChange={handleSlideChange}
              >
                <SwiperSlide>
                  <div className="testimonial__slider-item">
                    <div className="quote">
                      <i className="icon-quote"></i>
                    </div>
                    <div className="content">
                      <q className="h4">
                        Welcome to our digital agency We specialize in helping
                        business most like yours succeed online. From website
                        design and development to digital marketing agency
                      </q>
                    </div>
                    <hr />
                    <div className="item__meta">
                      <div className="meta__thumb">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image1}`}
                        width={78}
                        height={78}
                        alt="Image" />
                      </div>
                      <div className="meta__content">
                        <p className="h5">Delores Olivo</p>
                        <p>Senior Technology Editor</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__slider-item">
                    <div className="quote">
                      <i className="icon-quote"></i>
                    </div>
                    <div className="content">
                      <q className="h4">
                        Welcome to our digital agency We specialize in helping
                        business most like yours succeed online. From website
                        design and development to digital marketing agency
                      </q>
                    </div>
                    <hr />
                    <div className="item__meta">
                      <div className="meta__thumb">
                        <Image priority 
                        src={`https://api.pixamoss.com/${item.image2}`}
                        width={78}
                        height={78}
                        alt="Image" />
                      </div>
                      <div className="meta__content">
                        <p className="h5">endru kolins</p>
                        <p>CEO</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial__slider-item">
                    <div className="quote">
                      <i className="icon-quote"></i>
                    </div>
                    <div className="content">
                      <q className="h4">
                        Welcome to our digital agency We specialize in helping
                        business most like yours succeed online. From website
                        design and development to digital marketing agency
                      </q>
                    </div>
                    <hr />
                    <div className="item__meta">
                      <div className="meta__thumb">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image3}`}
                        width={78}
                        height={78}
                        alt="Image" />
                      </div>
                      <div className="meta__content">
                        <p className="h5">Delores Olivo</p>
                        <p>Content & Marketing Coordinator</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
            ))
           }
          </div>
        </div>
      </div>
      <Image priority src={mc} alt="Image" className="one" />
    </section>
  );
};

export default TestimonialSec;
