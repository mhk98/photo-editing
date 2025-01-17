import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import after from "public/images/banner/after.png";
import one from "public/images/banner/one.png";
import two from "public/images/banner/two.png";
import three from "public/images/banner/three.png";
import four from "public/images/banner/four.png";
import axios from "axios";

// Define the interface for your home banner items
interface HomeBannerItem {
  id: number; 
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  
}

const HomeOneBanner: React.FC = () => {
  const [homeBannerData, setHomeBannerData] = useState<HomeBannerItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeBannerItem[] }>('https://api.pixamoss.com/api/v1/homeBanner');
        setHomeBannerData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="banner bg-white">
      {homeBannerData.length > 0 ? (
        homeBannerData.map((item) => (
          <div key={item.id}>
            <div className="container">
              <div className="row justify-content-center gaper">
                <div className="col-12 col-md-10 col-xxl-11">
                  <div className="banner__content">
                    <p
                      className="h6"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      Edit Like a Pro: Unbeatable Image Quality Guaranteed
                    </p>
                    <h1
                      className="h1"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      Snap, Edit, Repeat: The Ultimate Photo Editing Solution
                    </h1>
                    <div
                      className="cta__group"
                      data-aos="fade-left"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <Link
                        href="get-quote"
                        aria-label="create account"
                        className="btn btn--primary"
                      >
                        Free Trial Now <i className="fa-solid fa-paper-plane"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-8">
                  <div
                    className="banner__thumb"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="600"
                  >
                    <Image
                      src={`https://api.pixamoss.com/${item.image3}`}
                      alt="Image"
                      layout="responsive" // Adjust based on your layout needs
                      width={500} // Set appropriate width
                      height={300} // Set appropriate height
                    />
                    {/* <Image
                      src={`https://api.pixamoss.com/${item.image2}`}
                      width={100} 
                      height={100} 
                     alt="Image" className="after" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="banner__small-thumb">
              <Image 
              src={`https://api.pixamoss.com/${item.image5}`} 
              width={104} 
              height={104} 
              alt="Image" className="one" />

              <Image
              src={`https://api.pixamoss.com/${item.image4}`}
              width={135} 
              height={137} 
            alt="Image" className="two" />

              <Image 
              src={`https://api.pixamoss.com/${item.image1}`}
              width={180} 
              height={175} 
          alt="Image" className="three" />
              <Image 
               src={`https://api.pixamoss.com/${item.image2}`}
               width={105} 
              height={100} 
                alt="Image" className="four" />
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default HomeOneBanner;
