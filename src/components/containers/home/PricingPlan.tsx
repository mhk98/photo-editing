import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/pricing/one.png";
import two from "public/images/pricing/two.png";
import three from "public/images/pricing/three.png";
import four from "public/images/pricing/four.png";
import axios from "axios";

interface HomePricing {
  id: number; 
  image1: string;
  image2: string;
  image3: string;
  image4: string;

}

const PricingPlan = () => {


  const [data, setData] = useState<HomePricing[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomePricing[] }>('https://photo-editing-backend.onrender.com/api/v1/pricingPlan');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section pricing-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 col-xxl-8">
            <div className="section__header text-center">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                attractive pricing plan
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Stress less with simple pricing and pixel perfect photo edits
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            
            {
              data?.map((item)=>(
                <div key={item.id} className="pricing-section__inner">
              <div
                className="pricing-section__inner-item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="pricing__meta">
                  <div className="thumb">
                  <Image 
                        src={`https://photo-editing-backend.onrender.com/${item.image1}`}
                        width={80}
                        height={80}
                        alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="h4">Clipping path</h4>
                    <p>
                      Carefully hand-drawn clipping paths for crisp, clean photo
                    </p>
                  </div>
                </div>
                <div className="price-frame">
                  <p className="h6">50% off</p>
                  <p>on bulk order</p>
                </div>
                <div className="price-plan">
                  <p className="h6">
                    <span>starting at</span> $0.39 Only
                  </p>
                  <p>per image</p>
                </div>
              </div>
              <div
                className="pricing-section__inner-item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="pricing__meta">
                  <div className="thumb">
                  <Image 
                        src={`https://photo-editing-backend.onrender.com/${item.image1}`}
                        width={80}
                        height={80}
                        alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="h4">background removal</h4>
                    <p>
                      Carefully hand-drawn clipping paths for crisp, clean photo
                    </p>
                  </div>
                </div>
                <div className="price-frame">
                  <p className="h6">50% off</p>
                  <p>on bulk order</p>
                </div>
                <div className="price-plan">
                  <p className="h6">
                    <span>starting at</span> $0.39 Only
                  </p>
                  <p>per image</p>
                </div>
              </div>
              <div
                className="pricing-section__inner-item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="pricing__meta">
                  <div className="thumb">
                  <Image 
                        src={`https://photo-editing-backend.onrender.com/${item.image1}`}
                        width={80}
                        height={80}
                        alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="h4">image masking</h4>
                    <p>
                      Carefully hand-drawn clipping paths for crisp, clean photo
                    </p>
                  </div>
                </div>
                <div className="price-frame">
                  <p className="h6">50% off</p>
                  <p>on bulk order</p>
                </div>
                <div className="price-plan">
                  <p className="h6">
                    <span>starting at</span> $0.39 Only
                  </p>
                  <p>per image</p>
                </div>
              </div>
              <div
                className="pricing-section__inner-item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="pricing__meta">
                  <div className="thumb">
                  <Image 
                        src={`https://photo-editing-backend.onrender.com/${item.image1}`}
                        width={80}
                        height={80}
                        alt="Image" />
                  </div>
                  <div className="content">
                    <h4 className="h4">photo retouching</h4>
                    <p>
                      Carefully hand-drawn clipping paths for crisp, clean photo
                    </p>
                  </div>
                </div>
                <div className="price-frame">
                  <p className="h6">50% off</p>
                  <p>on bulk order</p>
                </div>
                <div className="price-plan">
                  <p className="h6">
                    <span>starting at</span> $0.39 Only
                  </p>
                  <p>per image</p>
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="section__cta "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Link
                href="sign-in"
                aria-label="create account"
                className="btn btn--primary"
              >
                get started now <i className="fa-solid fa-paper-plane"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
