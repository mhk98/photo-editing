import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/pricing/star.png";
import starhover from "public/images/pricing/star-hover.png";
import shoe from "public/images/pricing/shoe.png";
import microphone from "public/images/pricing/micro-phone.png";
import hat from "public/images/pricing/hat.png";
import cam from "public/images/pricing/cam.png";
import tshirt from "public/images/pricing/tshirt.png";
import socks from "public/images/pricing/socks.png";
import clippingPath from "public/images/pricing1/Clipping-path-services-after- Pixamoss.jpg";
import colorCorrection from "public/images/pricing1/color-correction-services-before- Pixamoss.jpg";
import ghostMannequin from "public/images/pricing1/ghost-mannequin-services-after- Pixamoss.jpg";
import headshot from "public/images/pricing1/headshot-retouch-services-after- Pixamoss.jpg";
import imageMasking from "public/images/pricing1/Image-masking-services-after- Pixamoss.jpg";
import imageRetouching from "public/images/pricing1/image-retouhing-services-after- Pixamoss.jpg";
import jwelleryRetouch from "public/images/pricing1/jwellery-retouch-services-after- Pixamoss.jpg";
import shadowCreation from "public/images/pricing1/shadoe-creation-services-after- Pixamoss.jpg";


const PricingMain = () => {
  return (
    <section className="section pricing-main">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={clippingPath} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Clipping Path</h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Clipping Paths  <strong>$0.39 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Clipping Paths  <strong>$0.59 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Clipping Paths <strong>$2.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Clipping Paths  <strong>$4.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={headshot} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Headshot Retouching</h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Headshot Retouching  <strong>$0.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Headshot Retouching  <strong>$0.79 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Headshot Retouching <strong>$3.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Headshot Retouching <strong>$4.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={imageMasking} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Image Masking</h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Image Masking <strong>$0.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Image Masking <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Image Masking <strong>$1.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Image Masking <strong>$3.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={imageRetouching} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Image Retoching</h4>
                <div className="paragraph">
                  
                  <p>
                  Product Retouching <strong>$1.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  On-Model Retouching <strong>$1.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  High-End Retouching <strong>$3.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Jewelry Retouching <strong>$4.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <Image src={ghostMannequin} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Ghost Mannequin</h4>
                <div className="paragraph">
                  
                  <p>
                  3d Ghost Mannequin Effects <strong>$0.59 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Neck Joint Manipulation <strong>$0.79 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Symmetrical Ghost Mannequin <strong>$1.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={shadowCreation} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">SHADOW CREATION</h4>
                <div className="paragraph">
                  
                  <p>
                  Drop Shadow <strong>$0.59 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Natural Shadow <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Reflection Shadow <strong>$1.19 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
         
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={colorCorrection} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">COLOR CORRECTION</h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Color Correction <strong>$0.59 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Color Correction <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Color Correction <strong>$1.19 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Color Correction <strong>$1.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6 col-xl-4">
            <div
              className="pricing-main__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <Image src={jwelleryRetouch} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Jwellery Retouching </h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Jwellery Retouching <strong>$0.59 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Jwellery Retouching <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Jwellery Retouching <strong>$1.19 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Jwellery Retouching <strong>$1.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  
                </div>
              </div>
              <div className="cta__group">
                <Link
                  href="sign-in"
                  aria-label="Create Account"
                  className=" btn btn--secondary text-uppercase"
                >
                  get started now
                </Link>
              </div>
              <div className="anime">
                <Image src={star} alt="Image" />
                <Image src={starhover} alt="Image" />
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default PricingMain;
