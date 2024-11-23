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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/backgroundRemoval');
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
                professional Background Removal
              </p>
            
            <div>
            <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Background Removal Service
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                Background Removal Service is an essential technique in image editing that can significantly enhance the
visual appeal of your photos. Utilizing tools like the Pen Tool in Photoshop, combined with the expertise
of skilled editors, ensures high-quality results that meet the demands of professional photography and
e-commerce standards.
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
                Types of  Background Removal Services
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
                <b>Starting from $0.49 Only</b>
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
                This Basic Clipping Path Services provide a seamless method for adjusting and enhancing image
backgrounds, resulting in polished and attractive visuals, especially useful for businesses focused on
online product sales. At <b>Pixamoss,</b> we emphasize manual outlining by skilled designers to avoid errors
common in automated tools, ensuring precise and high-quality edits that meet client expectations.
                </p>

                <p 
                data-aos="fade-up"
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
                <b>Starting from $0.79 Only</b>
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
                <b>Starting from $3.49 Only</b>
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
                <b>Starting from $4.99 Only</b>
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
