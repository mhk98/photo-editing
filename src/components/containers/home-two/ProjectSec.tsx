import React from "react";
import Image from "next/image";
import Link from "next/link";
import Thumb from "public/images/project-thumb.png";

const ProjectSec = () => {
  return (
    <section className="section project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="project__inner">
              <div
                className="project__thumb text-center "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <Image src={Thumb} alt="Image" />
              </div>
              <div className="project__content section__content text-center">
                <h2
                  className="h2 title text-uppercase "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  Get quick, transparent pricing for your project
                </h2>
                <div
                  className="paragraph "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <p className="primary-text">
                    Select your service, choose your turnaround time, and get an
                    estimate on the spot. We&apos;ll send you a custom quote within
                    45 minutes.
                  </p>
                </div>
                <div
                  className="cta__group "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <Link
                    href="sign-in"
                    aria-label="Create Account"
                    className="btn btn--primary text-uppercase"
                  >
                    get started now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
