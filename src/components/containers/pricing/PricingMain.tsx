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
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
                <h4 className="h4">image Shadow</h4>
                <div className="paragraph">
                  <p>
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
                <h4 className="h4">Color Change</h4>
                <div className="paragraph">
                  <p>
                    Hand-drawn clipping paths give you crisp, clean cutouts that
                    you can put on any background.
                  </p>
                  <p>
                    starting at <strong>$0.39 Only</strong>{" "}
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
