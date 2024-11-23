import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import axios from "axios";


interface serviceAbout {
  id: number; 
  image1: string; 
  image2: string; 
}

const ServiceDetailsAbout = () => {


  const [data, setData] = useState<serviceAbout[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/shadowCreation');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="section bg-white about-section service-de-thumb-alt">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-6">
            <div
              className="about-section__thumb "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              {
                data?.map((item)=>(
                  <div key={item.id} className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                    src={`https://api.pixamoss.com/${item.image1}`}
                    width={670} 
                    height={419} 
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                    src={`https://api.pixamoss.com/${item.image2}`}
                    width={670} 
                    height={419} 
                      alt="Image two"
                    />
                  }
                />
              </div>
                ))
              }
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="about-section__content section__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                professional Shadow Creation

              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
        Shadow Creation Service

              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                To achieve these shadow effects, you can utilize our <b>Photoshop shadow effect service</b>. This service
provides you with the tools and expertise needed to create stunning product images that stand out in
the competitive online marketplace. Whether you need drop shadows, reflection shadows, or natural
shadows, we have the right solutions for you.
                </p>
                
              </div>

              <div className="mt-5">
             <h3
                className="h3 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Types of Shadows
              </h3>
            
            <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Drop Shadow</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $0.59 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
              This shadow type creates a sense of depth by placing a shadow behind the object, making it appear as if
              it is lifted off the background. This effect can add dimension and realism to your product images.

                </p>
                
              </div>
            </div>

            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Natural Shadow
                </b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $0.99 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
              Utilizing shadows that mimic real-life lighting conditions can make your images look more authentic. This
approach helps in creating a lifelike representation of the product, making it more relatable to potential
buyers.

                </p>
            
              </div>
            </div>
            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Reflection Shadow</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $1.20 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
              This technique involves creating a mirrored shadow effect beneath the product, simulating a reflective
              surface. It can enhance the visual appeal and give a sophisticated look to your images.

                </p>
                
              </div>
            </div>
             </div>
              <div className="cta__group justify-content-start">
                <Link href="contact-us" className="btn btn--primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsAbout;
