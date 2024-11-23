/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import Thumb from "public/images/faq-two-thumb.png";

const AboutFaq = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-4">
            <div
              className="faq-two__thumb "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <Image src={Thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="faq-two__content">
              <div className="section__header">
                <p
                  className="h6 sub-title "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  FAQ
                </p>
                <h2
                  className="h2 title "
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="100"
                >
                  frequently ask questions
                </h2>
              </div>
              <div className="accordion" id="accordion">
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 0 ? " faq-two-active" : " ")
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
                     Can I Request a Revision after delivery?
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
                      Yes, you can typically request a revision after delivery. Pixamoss is dedicated to customer satisfaction and
                      often allow clients to request modifications if the delivered work does not meet their expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 1 ? " faq-two-active" : " ")
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
                      Is my images secure to Pixamoss?
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
                      Pixamoss ensures the complete security of your images through robust security measures during the
editing process. Key features include:</p>
                    <p className="mt-4">1. <span style={{fontWeight:"bold"}}>In-House Editing:</span> All editing is done by Pixamoss’s dedicated team, reducing the risk of data breaches
                    associated with third-party services.</p>
                    <p className="mt-4">2. <span style={{fontWeight:"bold"}}>Security Protections:</span> The platform uses various safeguards, including encryption and secure storage,
to protect your images from unauthorized access.
</p>
                    <p className="mt-4">3. <span style={{fontWeight:"bold"}}>User Privacy:</span> Pixamoss values user privacy and does not use your images without consent, ensuring
your content remains confidential.
</p>
<p className="mt-4">In conclusion, Pixamoss provides strong security protocols and in-house editing for image protection.
Users can contact them for any specific security inquiries.</p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 2 ? " faq-two-active" : " ")
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
                      How do you ensure quality of Pixamoss?

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
                      Pixamoss combines professional tools, manual techniques, strict quality control, attention to resolution,
                      and client engagement to ensure the highest quality in their photo editing services.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 3 ? " faq-two-active" : " ")
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
                      Can I request urgent services?
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
                      Pixamoss offers urgent editing services, ensuring prompt assistance for time-sensitive projects. They
provide rapid delivery, with the possibility of receiving completed work in as little as one hour,
depending on the task's complexity. A dedicated team focuses on handling urgent requests efficiently.
Clients can begin by requesting a custom quote tailored to their specific needs. For quick and effective
editing solutions, reach out to Pixamoss.
                      </p>
                    </div>
                  </div>
                </div>
               
                <div
                  
                  className={
                    "accordion-item " + (imgTab == 4 ? " faq-two-active" : " ")
                  }
                  data-aos-duration="600"
                  data-aos-delay="600"
                >
                  <h5 className="accordion-header" id="headingFour">
                    <button
                      className={
                        (imgTab == 4 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How can I get a discount on my order?
                    </button>
                  </h5>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse${
                      imgTab === 4 ? " show " : ""
                    }`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordion"
                  >
                   <div className="accordion-body">
                      <p>
                      To get a discount on your order with Pixamoss, consider these strategies:
</p>
                    <p className="mt-4">1. <span style={{fontWeight:"bold"}}>Sign Up for Promotions:</span> New customers may receive a 5% discount by signing up for the email list.</p>
                    <p className="mt-4">2. <span style={{fontWeight:"bold"}}>Bulk Orders:</span> Inquire about discounts for larger orders, which can lead to savings of 15% or more.
</p>
                    <p className="mt-4">3. <span style={{fontWeight:"bold"}}>Custom Quotes:</span> When requesting a quote, ask about any applicable discounts.
</p>
                    <p className="mt-4">4. <span style={{fontWeight:"bold"}}> Seasonal Promotions:</span> Watch for special offers throughout the year for additional savings.
                    By utilizing these options, you can enhance your chances of securing a discount on your order.
</p>
<p className="mt-4">In conclusion, Pixamoss provides strong security protocols and in-house editing for image protection.
Users can contact them for any specific security inquiries.</p>
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

export default AboutFaq;
