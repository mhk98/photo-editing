import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutThumb from "public/images/about-thumb.png";
import axios from "axios";

interface HomeAbout {
  id: number; 
  image: string; 
}

const AboutSec = () => {


  const [homeAboutData, setHomeAboutData] = useState<HomeAbout[]>([]);

  console.log(homeAboutData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeAbout[] }>('https://api.pixamoss.com/api/v1/aboutUs');
        setHomeAboutData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="section bg-white about-section">
      <div className="container">
        <div className="row gaper align-items-center">
        
        {
          homeAboutData?.map((item) =>(
            <div key={item.id} className="col-12 col-lg-5 col-xl-6">
            <div 
              className="about-section__thumb "
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-delay="100"
            >
               <Image  
              src={`https://api.pixamoss.com/${item.image}`}
              width={635} 
              height={460} 
              layout="responsive"  
              alt="Image" />
              <div className="about-section__thumb-content">
                <p className="h5">
                  Starting at 25¢ / <span>per image</span>
                </p>
              </div>
            </div>
          </div>
          ))
        }
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="about-section__content section__content">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                about us
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
               Instant Image Makeover: Pixamoss Revamps Your Photos in Minutes
              </h2>
              <div
                className="paragraph "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <p className="fw-5 ">
                Image editing is essential for e-commerce businesses as it enhances product visuals, significantly
impacting sales and customer engagement. Professional image editing services save time and improve
product appeal, catering to product photographers, Amazon sellers, and global brands. 
                </p>
                <p>
                Benefits of using these services include time savings, professional quality that meets industry standards,
                and scalability as businesses grow. Overall, investing in professional image editing is a strategic move for e-commerce businesses to enhance product presentation and boost sales, allowing entrepreneurs to
                concentrate on business growth.
                </p>
              </div>
              <div
                className="cta__group justify-content-start "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Link href="about-us" className="btn btn--primary">
                  Know More{" "}
                </Link>
                <Link href="contact-us" className="btn btn--secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
