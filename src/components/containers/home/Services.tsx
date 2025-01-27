import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import axios from "axios";


interface HomeSliderItem {
  id: number; 
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  image11: string;
  image12: string;
  
}

const Services = () => {


  const [homeSliderData, setHomeSliderData] = useState<HomeSliderItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeSliderItem[] }>('https://api.pixamoss.com/api/v1/homeSlider');
        setHomeSliderData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="section services bg-grey">
      <div className="container">
        <div className="row align-items-center section__header--alt">
          <div className="col-12 col-lg-7 col-xxl-5">
            <div
              className="section__header "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <p className="h6 sub-title">Get Ready to Wow</p>
              <h2 className="h2 title">
              Pixamoss’s Top-Rated Photo Editing Services
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xxl-7">
            <div className="services-pagination slick-pagination justify-content-lg-end"></div>
          </div>
        </div>
      </div>
      <div className="services__slider-wrapper">

        {
          homeSliderData?.map((item)=>(
<Swiper key={item.id}
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          roundLengths={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            el: ".services-pagination",
            clickable: true,
          }}
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
          className="services__slider"
        >
          <SwiperSlide>
            <div className="services__slider-single on">
              <Image  
              src={`https://api.pixamoss.com/${item.image1}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Clipping path service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fi">
            <Image  
              src={`https://api.pixamoss.com/${item.image2}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Background Removal Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.49 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single tw">
            <Image  
              src={`https://api.pixamoss.com/${item.image3}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Image Retouching Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.79 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single th">
            <Image  
              src={`https://api.pixamoss.com/${item.image4}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Ghost Mannequin Service </h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.59 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
            <Image  
              src={`https://api.pixamoss.com/${item.image5}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Image Masking Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.79 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single on">
            <Image  
              src={`https://api.pixamoss.com/${item.image6}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Color Correction Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fi">
            <Image  
              src={`https://api.pixamoss.com/${item.image7}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">T-shirt Design Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single tw">
            <Image  
              src={`https://api.pixamoss.com/${item.image8}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Shadow Creation Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single th">
            <Image  
              src={`https://api.pixamoss.com/${item.image9}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Image Manipulation Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.39 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
            <Image  
              src={`https://api.pixamoss.com/${item.image10}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Logo Design Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$2.49 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
            <Image  
              src={`https://api.pixamoss.com/${item.image11}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Headshot Retouching Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$0.79 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="services__slider-single fo">
            <Image  
              src={`https://api.pixamoss.com/${item.image12}`}
              width={192} 
              height={192} 
              layout="responsive"  
              alt="Image" />
              <div className="services__slider-single__content">
                <h4 className="h4">Jewelry Retouching Service</h4>
                <Link href="service-details">
                  <i className="icon-arrow-up"></i>
                </Link>
                <div className="price-tag">
                  <p>
                    starting at <span>$02.49 Only</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
          ))
        }
        
      </div>
    </section>
  );
};

export default Services;
