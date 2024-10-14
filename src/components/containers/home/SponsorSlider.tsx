import React, { useEffect, useState } from "react";
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
import axios from "axios";


interface HomeSponsor{
  id: number; 
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
 
}

const SponsorSlider = () => {


  const [data, setData] = useState<HomeSponsor[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeSponsor[] }>('https://api.pixamoss.com/api/v1/clients');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sponsor section">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-wrapper ">



              
            {
                  data?.map((item)=>(
                   
                    <Swiper key={item.id}
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
                        slidesPerView: 6,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                      576: {
                        slidesPerView: 3,
                      },
                    }}
                    className="sponsor__slider"
                  >
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image1}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image2}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image3}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image4}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image5}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="sponsor__slider-item">
                      <Image priority 
                        src={`https://api.pixamoss.com/${item.image6}`}
                        width={231}
                        height={65}
                        alt="Image" />
                      </div>
                    </SwiperSlide>
                  
                  </Swiper>
                  ))
                }

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorSlider;
