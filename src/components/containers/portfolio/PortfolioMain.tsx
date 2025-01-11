import React, { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import clippingPathAfter from "public/images/portfolio/Clipping-path-services-after- Pixamoss.jpg";
import clippingPathBefore from "public/images/portfolio/Clipping-path-services-before- Pixamoss.jpg";
import colorCorrectionAfter from "public/images/portfolio/color-correction-services-after- Pixamoss.jpg";
import colorCorrectionBefore from "public/images/portfolio/color-correction-services-before- Pixamoss.jpg";
import ghostMannequinAfter from "public/images/portfolio/ghost-mannequin-services-after- Pixamoss.jpg";
import ghostMannequinBefore from "public/images/portfolio/ghost-mannequin-services-before- Pixamoss.jpg";
import headshotRetouchAfter from "public/images/portfolio/headshot-retouch-services-after- Pixamoss.jpg";
import headshotRetouchBefore from "public/images/portfolio/headshot-retouch-services-before- Pixamoss.jpg";
import imageMaskingAfter from "public/images/portfolio/Image-masking-services-after- Pixamoss.jpg";
import imageMaskingBefore from "public/images/portfolio/Image-masking-services-before- Pixamoss.jpg";
import imageRetouchingAfter from "public/images/portfolio/image-retouhing-services-after- Pixamoss.jpg";
import imageRetouchingBefore from "public/images/portfolio/image-retouhing-services-before- Pixamoss.jpg";
import jwelleryRetouchingAfter from "public/images/portfolio/jwellery-retouch-services-after- Pixamoss.jpg";
import jwelleryRetouchingBefore from "public/images/portfolio/jwellery-retouch-services-before- Pixamoss.jpg";
import removeBackgroundAfter from "public/images/portfolio/Remove-background-services-after- Pixamoss.jpg";
import removeBackgroundBefore from "public/images/portfolio/Remove-background-services-before- Pixamoss.jpg";
import shadowCreationAfter from "public/images/portfolio/shadoe-creation-services-after- Pixamoss.jpg";
import shadowCreationBefore from "public/images/portfolio/shadoe-creation-services-after- Pixamoss.jpg";


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
                className={activeFilter === ".clippingPath" ? "active" : ""}
                onClick={() => handleTabClick(".clippingPath")}
              >
                Clipping Path
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".colorCorrection" ? "active" : ""}
                onClick={() => handleTabClick(".colorCorrection")}
              >
                Color Correction
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".ghostMannequin" ? "active" : ""}
                onClick={() => handleTabClick(".ghostMannequin")}
              >
                Ghost Mannequin
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".headshot" ? "active" : ""}
                onClick={() => handleTabClick(".headshot")}
              >
                Headshot Retouch
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".imageMasking" ? "active" : ""}
                onClick={() => handleTabClick(".imageMasking")}
              >
               Image Masking
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".imageMasking" ? "active" : ""}
                onClick={() => handleTabClick(".imageMasking")}
              >
                Image Retouching
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".jwelleryRetouching" ? "active" : ""}
                onClick={() => handleTabClick(".jwelleryRetouching")}
              >
               Jwellery Retouching
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".removeBackground" ? "active" : ""}
                onClick={() => handleTabClick(".removeBackground")}
              >
                Remove Background
              </button>
              <button
                aria-label="Filter Items"
                className={activeFilter === ".shadowCreation" ? "active" : ""}
                onClick={() => handleTabClick(".shadowCreation")}
              >
               Shadow Creation
              </button>
            </div>
          </div>
        </div>
        <div className="row grid">
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item clippingPath ${
              activeFilter === ".clippingPath" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Clipping-path-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Clipping-path-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item colorCorrection ${
              activeFilter === ".colorCorrection" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu ">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/color-correction-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/color-correction-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item ghostMannequin ${
              activeFilter === ".ghostMannequin" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/ghost-mannequin-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/ghost-mannequin-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item headshot ${
              activeFilter === ".headshot" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/headshot-retouch-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/headshot-retouch-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item imageMasking ${
              activeFilter === ".imageMasking" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Image-masking-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Image-masking-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item imageRetouching ${
              activeFilter === ".imageRetouching" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/image-retouhing-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/image-retouhing-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item jwelleryRetouching ${
              activeFilter === ".jwelleryRetouching" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/jwellery-retouch-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/jwellery-retouch-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item removeBackground ${
              activeFilter === ".removeBackground" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Remove-background-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/Remove-background-services-before- Pixamoss.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 grid-item shadowCreation ${
              activeFilter === ".shadowCreation" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single-item">
              <div className="rangu">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="/images/portfolio/shadoe-creation-services-after- Pixamoss.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="/images/portfolio/shadoe-creation-services-before- Pixamoss.jpg"
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
