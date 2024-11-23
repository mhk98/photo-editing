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
        const response = await axios.get<{ data: serviceAbout[] }>('https://api.pixamoss.com/api/v1/automotive');
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
                Professional Automotive
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Automotive Service
              </h2><p
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
                className="fw-5">
                At Pixamoss, we believe that every individual possesses the potential to create a significant impact with
the right headshot. That's why we proudly offer our Professional Headshot Retouching Service, designed
to enhance your unique features while preserving a natural look that truly represents you. </p>
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                >
                Our skilled team of photo editors employs advanced techniques to meticulously remove blemishes,
correct skin tones, and highlight your most flattering attributes. We recognize that your headshot is not
just a photograph; it’s a vital representation of your personal and professional brand. This understanding
drives us to invest the time and care needed to ensure your image is nothing short of perfect
                </p>
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                >
                With our Professional Headshot Retouching Service, you'll gain the confidence to make a lasting
impression on potential clients, employers, and social media connections alike. Trust us to elevate your
personal brand and help you stand out in today’s competitive landscape.

                </p>
                <p
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
                >
                Don’t wait to make your mark! Contact us today to discover more about our services and how we can
                assist you in making a powerful impact. Your journey to a remarkable headshot starts here!
                </p>
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
