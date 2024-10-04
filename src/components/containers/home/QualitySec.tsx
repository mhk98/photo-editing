import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ThumbOne from "public/images/quality/thumb-one.png";
import ThumbTwo from "public/images/quality/thumb-two.png";
import axios from "axios";


interface HomeQuality {
  id: number; 
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

const QualitySec = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };



  const [data, setData] = useState<HomeQuality[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeQuality[] }>('http://localhost:5000/api/v1/stunningQuality');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section quality-section bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="section__header text-center">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Stunning Quality
              </p>
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                We&apos;ve removed these tricky backgrounds
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div
              className="quality-section__filter-btns "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <a
                className={`quality-filter-btn ${
                  activeTabIndex === 0 ? "quality-filter-btn--active" : " "
                }`}
                onClick={() => handleTabClick(0)}
              >
                <i className="icon-user"></i> People
              </a>
              <a
                className={`quality-filter-btn ${
                  activeTabIndex === 1 ? "quality-filter-btn--active" : " "
                }`}
                onClick={() => handleTabClick(1)}
              >
                <i className="icon-hexagon"></i>
                products
              </a>
              <a
                className={`quality-filter-btn ${
                  activeTabIndex === 2 ? "quality-filter-btn--active" : " "
                }`}
                onClick={() => handleTabClick(2)}
              >
                <i className="icon-animal"></i>
                animals
              </a>
              <a
                className={`quality-filter-btn ${
                  activeTabIndex === 3 ? "quality-filter-btn--active" : " "
                }`}
                onClick={() => handleTabClick(3)}
              >
                <i className="icon-car"></i> cars
              </a>
              <a
                className={`quality-filter-btn ${
                  activeTabIndex === 4 ? "quality-filter-btn--active" : " "
                }`}
                onClick={() => handleTabClick(4)}
              >
                <i className="icon-image"></i>graphics
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
         {
          data?.map((item) =>(
            <div className="col-12 col-lg-10 col-xl-8">
            <div
              className="quality-section__tab "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div
                className={`quality-section__tab-item ${
                  activeTabIndex === 0 ? "quality-section__tab-item-active" : ""
                }`}
              >
                <div className="rangu">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        // src="/images/after/one-after.png"
              src={`http://localhost:5000/${item.image1}`}

                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        // src="/images/after/one-before.png"
              src={`http://localhost:5000/${item.image1}`}

                        alt="Image two"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`quality-section__tab-item ${
                  activeTabIndex === 1 ? "quality-section__tab-item-active" : ""
                }`}
              >
                <div className="rangu ">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        // src="/images/after/two-after.png"
              src={`http://localhost:5000/${item.image2}`}

                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        // src="/images/after/two-before.png"
              src={`http://localhost:5000/${item.image2}`}

                        alt="Image two"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`quality-section__tab-item ${
                  activeTabIndex === 2 ? "quality-section__tab-item-active" : ""
                }`}
              >
                <div className="rangu">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        // src="/images/after/three-after.png"
              src={`http://localhost:5000/${item.image3}`}

                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        // src="/images/after/three-before.png"
              src={`http://localhost:5000/${item.image3}`}

                        alt="Image two"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`quality-section__tab-item ${
                  activeTabIndex === 3 ? "quality-section__tab-item-active" : ""
                }`}
              >
                <div className="rangu">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        // src="/images/after/four-after.png"
              src={`http://localhost:5000/${item.image4}`}

                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        // src="/images/after/four-before.png"
              src={`http://localhost:5000/${item.image4}`}

                        alt="Image two"
                      />
                    }
                  />
                </div>
              </div>
              <div
                className={`quality-section__tab-item ${
                  activeTabIndex === 4 ? "quality-section__tab-item-active" : ""
                }`}
              >
                <div className="rangu">
                  <ReactCompareSlider
                    itemOne={
                      <ReactCompareSliderImage
                        // src="/images/after/one-after.png"
              src={`http://localhost:5000/${item.image5}`}

                        alt="Image one"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        // src="/images/after/one-before.png"
              src={`http://localhost:5000/${item.image5}`}

                        alt="Image two"
                      />
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          ))
         }
        </div>
      </div>
      <div className="quality-section__thumbs">
        <Image src={ThumbOne} alt="Image" className="one" />
        <Image src={ThumbTwo} alt="Image" className="two" />
      </div>
    </section>
  );
};

export default QualitySec;
