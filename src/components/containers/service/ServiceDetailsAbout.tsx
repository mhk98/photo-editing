/* eslint-disable react/no-unescaped-entities */
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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/clippingPath');
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
                professional clipping path
              </p>
            
            <div>
            <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Clipping Path Service
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                <b>Clipping Path Service</b> is a powerful image editing technique primarily used to remove backgrounds from
images, enhancing their overall appearance. This method involves using the Pen Tool in Adobe
Photoshop to create a precise path around the object you want to keep, effectively cutting it out from its
background.
                </p>
                
              </div>
            </div>
             
             <div className="mt-5">
             <h3
                className="h3 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Types of Clipping Path Services
              </h3>
            
            <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Basic Cut-outs</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $0.39 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                This Basic Clipping Path Services provide a seamless method for adjusting and enhancing image
backgrounds, resulting in polished and attractive visuals, especially useful for businesses focused on
online product sales. At Photo Clipping Path BD, we emphasize manual outlining by skilled designers to
avoid errors common in automated tools, ensuring precise and high-quality edits that meet client
expectations.
                </p>

                <p data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                These services are ideal for a wide range of products, including but not limited to:
                </p>

             
                  <li><b>Bottles             </b></li>
                  <li><b>Boxes               </b></li>
                  <li><b>Wine glasses        </b></li>
                  <li><b>And many more items!</b></li>
                
                
              </div>
            </div>

            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Simple Cut-outs</b>
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
                <p className="fw-5 mt-3">
                Simple cut-outs are a more detailed image editing process than basic clipping paths, specifically designed
for objects with complex shapes, like wine bottles and cars. This method allows for precise and clean
object isolation, which is essential for high-quality images.
                </p>
             
                  <li><b>Simple jewelry             </b></li>
                  <li><b>A simple item of clothing
                  </b></li>
                  <li><b>Single furniture items
                  </b></li>
                  <li><b>Product for e-commerce</b></li>
                
                
              </div>
            </div>
            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Medium cut-outs</b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $2.50 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                <b>Medium cut-outs,</b> also known as <b>layer clipping paths,</b> are a more intricate form of image editing that
involves handling objects with numerous holes and curves. This technique is particularly suited for
moderately complex images, such as <b>earrings,</b> where additional anchor points are necessary to achieve a
clean cut-out.

                </p>
             
                  <li><b>Grouping of simple items             </b></li>
                  <li><b>Shoes               </b></li>
                  <li><b>Multiple items of clothing      </b></li>
                  <li><b>Furniture sets
                  </b></li>
                  <li><b>StrollersCut-out</b></li>
                
                
              </div>
            </div>
            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Complex cut-out
                </b>
              </p>
              <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              style={{color:"#2b1b9a"}}
              >
                <b>Starting from $5.00 Only</b>
              </p>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 mt-3">
                <b>Complex photo cut-out services</b> are specifically designed for intricate products that lack solidity, making
them ideal for items like <b>necklaces</b>. These products often feature intricate details and require numerous
anchor points, especially in elements like bracelets or chains.
                </p>
             
                  <li><b>Bicycles             </b></li>
                  <li><b>Intricate jewelry               </b></li>
                  <li><b>Wire furniture      </b></li>                      
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
