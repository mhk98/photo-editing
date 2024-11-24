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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/imageMasking');
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
                professional Image Masking
              </p>
            
            <div>
            <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Image Masking Service
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5">
                Removing backgrounds from images with hair, fur, and tricky edges can be quite challenging. However,
utilizing specialized photo masking services allows you to delegate this intricate task, enabling you to
focus on more advanced edits and effectively manage your business.

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
                Types of Image Masking
              </h3>
            
            <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Basic Image masking</b>
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
                Basic image masking edits photos by hiding or showing parts, great for photos with easy shapes or
backgrounds. Uses soft edges, but can handle fur, hair, or see-through elements with basic Photoshop
masking.
                </p>

             
                  <li><b>Handbags, clutches, and jewelry with tassels
                  </b></li>
                  <li><b>Clothing with a fringed hem
                  </b></li>
                  <li><b>Transparent or translucent empty containers
                  </b></li>
                  <li><b>Glassware</b></li>
                
                
              </div>
            </div>

            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Simple Image masking
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
               Simple image masking allows easy separation of photo parts to change or alter specific elements. This
method is suitable for photos with simple backgrounds or objects and can enhance visual appeal by
controlling what's shown or changed. It's ideal for improving product or portrait photos.
                </p>
             
                  <li><b>One person with a head of hair in a photo          </b></li>
                  <li><b>Fur-lined boots
                  </b></li>
                  <li><b>Jewelry with intricate settings
                  </b></li>
                  <li><b>Translucent gemstones</b></li>
                  <li><b>Topiaries and simple floral arrangements in opaque vases</b></li>
                  <li><b>A single stuffed animal with mostly smooth borders, but some furry edges</b></li>
                
                
              </div>
            </div>
            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Medium Image masking</b>
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
                <p 
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
               Medium image masking, also known as alpha channel masking, allows for more precise changes in
images with complex backgrounds or edges, such as hair or fur. It enables refined edges and enhances
image quality, making it suitable for presenting photos to others.

                </p>
             
                  <li><b>Two people in a photo
                  </b></li>
                  <li><b>A stuffed animal
                  </b></li>
                  <li><b>A sweater with fuzzy or furry edges
                  </b></li>
                  <li><b>A wedding veil
                  </b></li>
                 
                
                
              </div>
            </div>
            <div className="mt-5">
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              >
                <b>Complex Image masking
                </b>
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
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                className="fw-5 mt-3">
               Complex image masking is a technique used to edit photos with many details or unusual shapes. It
ensures accurate selection and change, maintaining the photo's quality. Effective for removing
backgrounds or highlighting difficult subjects.
                </p>
             
                  <li><b>Two or more animals in a single photo             </b></li>
                  <li><b>More than two people in a photo              </b></li>
                  <li><b>A complicated surface with lots of holes, like a soccer net     </b></li>                      
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
