import React from "react";
import Image from "next/image";
import Link from "next/link";
import ctaThumb from "public/images/about-us/upload.jpeg";
import upload from "public/images/upload.png";

const AboutCta = () => {
  return (
    <section className="try-cta bg-white section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="try-cta__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6">
                  <div
                    className="try-cta__thumb "
                    data-aos="fade-left"
                    data-aos-duration="600"
                    data-aos-delay="100"
                  >
                    <Image src={ctaThumb} alt="Image" />
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="try-cta__content section__content">
                    <p
                      className="h6 sub-title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      try free now
                    </p>
                    <h2
                      className="h2 title "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      Image Retouching
                    </h2>
                    <div
                      className="paragraph "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <p>
                        {/* Clipping Path Could be a process by which photo editors
                        make a vector path to pick. */}
                        Investing in this service can improve the visual quality of product images, enhance customer engagement and boost
                      </p>
                    </div>
                    <div
                      className="cta__group "
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-delay="100"
                    >
                      <Link href="get-quote" className="btn btn--secondary">
                        <Image src={upload} alt="Image" /> upload images
                      </Link>
                    </div>
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

export default AboutCta;
