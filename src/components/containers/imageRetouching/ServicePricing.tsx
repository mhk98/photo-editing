import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import smallone from "public/images/pricing/small-one.png";
import smalltwo from "public/images/pricing/small-two.png";
import smallthree from "public/images/pricing/small-three.png";
import smallfour from "public/images/pricing/small-four.png";
import axios from "axios";

interface ServicePricing {
  id: number; 
  image: string; 
}

const ServicePricing = () => {


  const [data, setData] = useState<ServicePricing[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: ServicePricing[] }>('https://photo-editing-backend.onrender.com/api/v1/imageRetouchingPrice');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="section pricing-two">
      <div className="container ">
        <div className="row align-items-center section__header--alt">
          <div className="col-12">
            <div className="section__header text-center">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                clipping path cost
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                How much do clipping path services cost?
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {
            data?.map((item)=>(
              <div key={item.id} className="col-12 col-md-6 col-lg-6 col-xxl-3">
            <div
              className="pricing-two__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <h5 className="h5">Clipping Path</h5>
              <div className="meta">
                <div className="content">
                  <h2 className="h2 title">$19</h2>
                  <p>39¢ PER IMAGE</p>
                </div>
                <div className="thumb">
                <Image    
                    src={`https://photo-editing-backend.onrender.com/${item.image}`}
                    width={50} 
                    height={50}  
                    alt="Image" />
                </div>
              </div>
              <hr />
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>3 downloads per day
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Access to all products
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>Access to new releases
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>15% renewal discount
                </li>
              </ul>
              <hr />
              <Link href="pricing" className="btn btn--secondary">
                get started now
              </Link>
            </div>
          </div>
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
