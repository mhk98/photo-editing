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
                <Image src={shoe} alt="Image" />
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
                <Image src={microphone} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Background Removal</h4>
                <div className="paragraph">
                  
                  <p>
                  Basic Background Remove  <strong>$0.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Simple Background Remove  <strong>$0.79 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Background Remove <strong>$3.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Background Remove <strong>$4.99 Only</strong> {" "}
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
                <Image src={hat} alt="Image" />
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
                <Image src={cam} alt="Image" />
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
                <Image src={tshirt} alt="Image" />
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
                <Image src={socks} alt="Image" />
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
                <Image src={socks} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">IMAGE MANIPULATION</h4>
                <div className="paragraph">
                  
                  <p>
                  Simple Image Manipulation <strong>$1.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Image Manipulation <strong>$2.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Image Manipulation <strong>$4.99 Only</strong> {" "}
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
                <Image src={socks} alt="Image" />
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
                <Image src={socks} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">Automotive</h4>
                <div className="paragraph">
                  
                  <p>
                  Simple Automotive <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Automotive <strong>$1.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Automotive <strong>$2.99 Only</strong> {" "}
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
                <Image src={socks} alt="Image" />
              </div>
              <div className="content">
                <h4 className="h4">VECTOR</h4>
                <div className="paragraph">
                  
                  <p>
                  Simple Vector <strong>$0.99 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Medium Vector <strong>$2.49 Only</strong> {" "}
                    <span>per image</span>
                  </p>
                  <p>
                  Complex Vector <strong>$4.99 Only</strong> {" "}
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
