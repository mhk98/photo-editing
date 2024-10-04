import React from "react";
import Image from "next/image";
import One from "public/images/about/about-overview-one.png";
import Two from "public/images/about/about-overview-two.png";

const AboutOverview = () => {
  return (
    <section className="about-overview section pt-0">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-7">
            <div
              className="about-overview__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={One} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div
              className="about-overview__single "
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={Two} alt="Image" />
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <h2
              className="h2 title "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              Our good work goes beyond perfect edits
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div
              className="paragraph "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <p>
                Outsourced image editing that&apos;s good for your business — and
                good for the world. We believe outsourcing has the power to
                change the world for the better. Both for our customers and in
                the communities where our teams work and live.
              </p>
              <p className="h6">Our Mission</p>
              <p>
                Outsourced image editing that&apos;s good for your business — and
                good for the world. We believe outsourcing has the power to
                change the world for the better. Both for our customers and in
                the communities where our teams work and live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
