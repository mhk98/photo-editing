import React from "react";
import Image from "next/image";
import Link from "next/link";
import upload from "public/images/upload.png";
import Thumb from "public/images/free-thumb.png";

const CtaTwo = () => {
  return (
    <section className="section free">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="free__inner">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-5">
                  <div className="free__content section__content">
                    <p
                      className="h6 sub-title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      try free now
                    </p>
                    <h2
                      className="h2 title text-uppercase "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      Try free sample!
                    </h2>
                    <div
                      className="paragraph "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <p>
                        Clipping Path Could be a process by which photo editors
                        make a vector path to pick process editors make.
                      </p>
                    </div>
                    <div className="cta__group justify-content-between">
                      <div className="ax">
                        <Link href="get-quote" className="btn">
                          <Image src={upload} alt="Image" /> upload images
                        </Link>
                      </div>
                      <div className="price-tag">
                        <p>
                          starting at <span>$0.39 Only</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumb d-none d-lg-block">
                <Image src={Thumb} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
