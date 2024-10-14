import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Thumb from "public/images/testimonial/testimonial-thumb.png";
import trust from "public/images/testimonial/trust.png";
import Author from "public/images/testimonial/author-three.png";
import circle from "public/images/testimonial/circle.png";
import polygon from "public/images/testimonial/polygon.png";
import axios from "axios";

interface ServiceTestimonial {
  id: number; 
  image: string; 
  title: string;
  name: string;
  description: string;
  country: string
}

const Testimonial = () => {


  const [data, setData] = useState<ServiceTestimonial[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: ServiceTestimonial[] }>('https://api.pixamoss.com/api/v1/imageRetouchingTestimonial');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section testimonial-two">

{
                  data?.map((item)=>(

                    <div key={item.id}>
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
                <Image    
            src={`https://api.pixamoss.com/${item.image}`}
            width={420} 
            height={540}  
            alt="Image" />
                  <div className="trust">
                  <Image    
            src={trust}
           
            alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-xxl-6 offset-xxl-1">
                <div className="testimonnial-two__slider-item__content section__content">
                  <p className="h6 sub-title">client&apos;s testimonial</p>
                  <h2 className="h2 title text-uppercase">
                    {item.title}
                  </h2>
                  <div className="quote">
                    <i className="icon-quote"></i>
                  </div>
                  <div className="content">
                    <q className="h4">
                    {item.description}
                    </q>
                  </div>
                  <div className="d-flex align-items-center justify-content-between position-relative">
                    <div className="testimonnial-two__slider-item__content-meta">
                      <div className="thumb">
                      <Image    
            src={`https://api.pixamoss.com/${item.image}`}
            width={78} 
            height={78}  
            alt="Image" />
                      </div>
                      <div className="content">
                        <p className="h5">{item.name}</p>
                        <p>From {item.country}</p>
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
                    </div>
                  ))
                }

     
    </section>
  );
};

export default Testimonial;
