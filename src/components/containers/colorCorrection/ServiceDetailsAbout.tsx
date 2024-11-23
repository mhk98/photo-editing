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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/colorCorrection');
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
             

              <div className="mt-5">
             
            
            <div>
            <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
               Color Correction Service
              </h2>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $0.59 Only</b>
              </p>

                <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
              This shadow type creates a sense of depth by placing a shadow behind the object, making it appear as if
              it is lifted off the background. This effect can add dimension and realism to your product images.

                </p>
                
        
            </div>

            <div className="mt-5">
            <h3
                className="h3 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
               Why Choose Our Color Correction Service?
              </h3>
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
           <b>Expertise You Can Trust:</b> Our team of skilled photo editors specializes in color correction. They have
the technical know-how to adjust color temperature, contrast, and brightness to achieve stunning results
that truly showcase your products.

                </p>
                <p>
                <b>Tailored Solutions:</b> Whether you're working with a single image or need color correction for an entire
                batch, we provide customized services to meet your needs. No project is too big or too small!
                </p>
                <p><b>Fast and Efficient:</b> We understand that time is of the essence in the fast-paced world of e-commerce.
Our service is designed to be quick and efficient, ensuring you receive your edited images promptly
without compromising quality.</p>
              <p>
              <b>Affordable Pricing:</b> We believe that professional photo editing should be accessible. Our competitive
pricing ensures you get exceptional value for your investment, allowing you to enhance your brand
without breaking the bank.
              </p>
              <p>
              <b>Consistent Branding:</b> With our color correction service, you can achieve a visually consistent and
professional look across all your product images. This uniformity not only enhances your brand’s identity
but also builds trust with your customers.

              </p>
            </div>
            <div className="mt-5">
            <h3
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
               Take Your Product Images to the Next Level

              </h3>
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
         Don’t settle for mediocre product images that fail to grab attention. Trust Pixamoss to transform your
visuals with our expert <b>Color Correction Service!</b> Let us help you create stunning images that not only
attract customers but also elevate your brand above the competition. 

                </p>
            
              
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
