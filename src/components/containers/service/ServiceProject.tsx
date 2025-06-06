import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import projectone from "public/images/project-one.png";
import projecttwo from "public/images/project-two.png";
import projectthree from "public/images/project-three.png";
import axios from "axios";

interface HomeAbout {
  id: number; 
  image: string; 
}

const ServiceProject = () => {


  const [data, setData] = useState<HomeAbout[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeAbout[] }>('https://api.pixamoss.com/api/v1/clippingPathProjects');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="section project-three">
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
                beautiful clipping path projects
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="project-three-pagination slick-pagination justify-content-lg-end"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="project-three__slider-wrapper">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                modules={[Autoplay, Pagination]}
                pagination={{
                  el: ".project-three-pagination",
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="project-three__slider"
              >
                {
                  data?.map((item)=>(
                    <SwiperSlide key={item.id}>
                  <div  className="project-three__slider-item">
                    <Image    
                    src={`https://api.pixamoss.com/${item.image}`}
                    width={401} 
                    height={180}  
                    alt="Image" />
                  </div>
                </SwiperSlide>
                  ))
                }
                
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <Link
                href="sign-in"
                aria-label="create account"
                className="btn btn--primary"
              >
                get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProject;
