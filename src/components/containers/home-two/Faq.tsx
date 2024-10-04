import React, { useState } from "react";

const Faq = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section pb-0 faq faq-o">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <p
                className="h6 sub-title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                faq
              </p>
              <h2
                className="h2 title text-uppercase "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                frequently ask questions{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="faq__inner" data-aos="fade-up">
              <div className="accordion" id="accordion">
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 0 ? " faq-one-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h5 className="accordion-header" id="headingOne">
                    <button
                      className={
                        (imgTab == 0 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is a stock media platform?
                    </button>
                  </h5>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse${
                      imgTab === 0 ? " show " : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the images are free, but the usage depends on the
                        image license. Photographers can select 3 types of
                        license to share their photos
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 1 ? " faq-one-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h5 className="accordion-header" id="headingTwo">
                    <button
                      className={
                        (imgTab == 1 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can I upload other music than my own?
                    </button>
                  </h5>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse${
                      imgTab === 1 ? " show " : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the images are free, but the usage depends on the
                        image license. Photographers can select 3 types of
                        license to share their photos
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 2 ? " faq-one-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h5 className="accordion-header" id="headingThree">
                    <button
                      className={
                        (imgTab == 2 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What format are the files in?
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse${
                      imgTab === 2 ? " show " : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the images are free, but the usage depends on the
                        image license. Photographers can select 3 types of
                        license to share their photos
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 3 ? " faq-one-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <h5 className="accordion-header" id="headingFour">
                    <button
                      className={
                        (imgTab == 3 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What is a stock media platform?
                    </button>
                  </h5>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse${
                      imgTab === 3 ? " show " : ""
                    }`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the images are free, but the usage depends on the
                        image license. Photographers can select 3 types of
                        license to share their photos
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 4 ? " faq-one-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  <h5 className="accordion-header" id="headingFive">
                    <button
                      className={
                        (imgTab == 4 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Can I upload other music than my own?
                    </button>
                  </h5>
                  <div
                    id="collapseFive"
                    className={`accordion-collapse collapse${
                      imgTab === 4 ? " show " : ""
                    }`}
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, the images are free, but the usage depends on the
                        image license. Photographers can select 3 types of
                        license to share their photos
                      </p>
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

export default Faq;