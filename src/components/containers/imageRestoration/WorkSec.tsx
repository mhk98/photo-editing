import React, { useEffect, useState } from "react";
import Image from "next/image";
import workThumb from "public/images/work-thumb.png";
import axios from "axios";

interface HomeAbout {
  id: number; 
  image: string; 
}

const WorkSec = () => {


  const [data, setData] = useState<HomeAbout[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeAbout[] }>('https://api.pixamoss.com/api/v1/imageRestorationHowItWorks');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="work-section section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="work-section__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6 col-xxl-5">
                  <div className="work-section__content">
                    <div className="section__header">
                      <p
                        className="h6 sub-title "
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        how we work
                      </p>
                      <h2
                        className="h2 title "
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        How it works
                      </h2>
                    </div>
                    <ul>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>01</span>
                        </div>
                        <p>
                          You start by sending the images that need editing to the service.
                        </p>
                      </li>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>02</span>
                        </div>
                        <p>
                        The editing team will work on your images as quickly as possible to ensure timely delivery.
                        </p>
                      </li>
                      <li
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                      >
                        <div className="thumb">
                          <span>03</span>
                        </div>
                        <p>
                        We will send an email with the download link.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-6 offset-xxl-1">
                  <div
                    className="work-section__thumb "
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >

                    {
                      data?.map((item)=>(
                        <Image  key={item.id}
              src={`https://api.pixamoss.com/${item.image}`}
              width={635} 
              height={460} 
              layout="responsive"  
              alt="Image" />
                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSec;
