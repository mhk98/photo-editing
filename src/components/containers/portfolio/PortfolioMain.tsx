import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const PortfolioMain = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };
  return (
    <div className="section portfolio">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="portfolio__filter-btns "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <button
                aria-label="Filter Items"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                All
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".retouch" ? "active" : ""}
                onClick={() => handleTabClick(".retouch")}
              >
                photo retouch
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".background" ? "active" : ""}
                onClick={() => handleTabClick(".background")}
              >
                background remove
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".path" ? "active" : ""}
                onClick={() => handleTabClick(".path")}
              >
                clipping path
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".color" ? "active" : ""}
                onClick={() => handleTabClick(".color")}
              >
                color correction
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".drop" ? "active" : ""}
                onClick={() => handleTabClick(".drop")}
              >
                drop shadow
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".ecommerce" ? "active" : ""}
                onClick={() => handleTabClick(".ecommerce")}
              >
                e-commerce image
              </button>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item retouch ${
              activeFilter === ".retouch" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/one-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/one-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item background ${
              activeFilter === ".background" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu ">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/two-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/two-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item path ${
              activeFilter === ".path" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/three-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/three-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item color ${
              activeFilter === ".color" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/four-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/four-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item drop ${
              activeFilter === ".drop" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/one-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/one-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item ecommerce ${
              activeFilter === ".ecommerce" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/after/one-after.png"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/after/one-before.png"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMain;
