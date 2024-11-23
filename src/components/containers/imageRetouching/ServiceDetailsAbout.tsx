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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/imageRetouching');
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
                professional Image Retouching
              </p>
            
            <div>
            <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Image Retouching Service
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                Image retouching is essential for online businesses, particularly in e-commerce, as high-quality images
significantly impact customer perceptions and purchase decisions. Pixamoss provides a range of
specialized image retouching services, including product retouching to enhance visual appeal, model
retouching for polished images, and jewelry retouching that focuses on intricate details. The use of
Pixamoss services can lead to increased conversion rates, a more professional presentation, and
expertise in detailed retouching. Overall, investing in these services can improve the visual quality of
product images, enhance customer engagement, and boost sales.

                </p>
                
              </div>
            </div>
             
             <div className="mt-5">
             
            
            <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Product Retouching</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $1.49 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                In today's competitive online marketplace, <b>high-quality product images</b> are essential for attracting
customers and driving sales. Product image retouching plays a crucial role in enhancing the visual appeal
of your products, making them stand out from the competition.
                </p>

             
                  <li><b>Background Removal</b></li>
                  <li><b>Color Correction</b></li>
                  <li><b>Retouching</b></li>
                  <li><b>Image Optimization
                  </b></li>
                  <li><b>Shadow Creation
                  </b></li>
                
                
              </div>
            </div>

            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>On-model Retouching</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $1.99 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                High-quality product images are vital in online retail, as they attract customers and enhance sales. They
improve product appeal, build customer confidence by allowing detailed examination, and lead to more
informed purchase decisions. In a competitive market, unique and well-presented images help
differentiate brands and capture customer attention. Professional photography enhances brand
credibility and increases conversion rates. Studies show many online shoppers rely on product images for
their buying choices. Ultimately, investing in high-quality visuals is a strategic decision that boosts
customer trust and drives sales, making visual representation crucial for online retail success.
                </p>
             
                  <li><b>Model Image
                  </b></li>
                  <li><b>Background Removal
                  </b></li>
                  <li><b>Color Correction
                  </b></li>
                  <li><b>Retouching</b></li>
                  <li><b>Shadow Creation
                  </b></li>
                  <li><b>Image Optimization
                  </b></li>
                
                
              </div>
            </div>


            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>High-end Retouching</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $3.99 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                Enhance photos with professional airbrushing services. Smooth out imperfections, soften skin tones, and
                remove blemishes for a flawless finish.

                </p>
             
                  <li><b>Touchup on your models            </b></li>
                  <li><b>Removing scars, tattoos, or other blemishes               </b></li>
                  <li><b>Whitening teeth    </b></li>
                  <li><b>Furniture sets
                  </b></li>
                  <li><b>Removing stray hairs</b></li>
                  <li><b>Adding or changing makeup</b></li>
                
                
              </div>
            </div>

            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Jewelry Retouching</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $4.99 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                In luxury jewelry, small imperfections can detract from a piece's appeal. Retouching ensures products are
presented perfectly, captivating customers and boosting sales.

                </p>
             
                  <li><b>Color Correction          </b></li>
                  <li><b>Clarity Enhancement              </b></li>
                  <li><b>Metal Polishing
                  </b></li>
                  <li><b>Background Removal

                  </b></li>
                  <li><b>Shadow Creation</b></li>
                  <li><b>Image Optimization
                  </b></li>
                
                
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
