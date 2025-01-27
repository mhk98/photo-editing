/* eslint-disable react/no-unescaped-entities */
import React from "react";

const QuoteInstructions = () => {
  return (
    <section className="section quote-instructions">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
              <h2
                className="h2 title "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                Get a Quote Instructions
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="quote-instructions__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <div className="thumb-inner">
                  <span>01</span>
                </div>
              </div>
              <div className="content">
                <h5 className="h5">Choose services</h5>
                <p>
                Begin by selecting the services you need. This could involve options depending on what you're looking for—like editing, retouching, or design services
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="quote-instructions__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <div className="thumb-inner">
                  <span>02</span>
                </div>
              </div>
              <div className="content">
                <h5 className="h5">Choose Output File Options</h5>
                <p>
                After selecting your services, decide on the output format for your files. This might include PNG, TIF, PSD, JPEG, etc., based on your requirements and what’s compatible with your workflow.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="quote-instructions__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
            >
              <div className="thumb">
                <div className="thumb-inner">
                  <span>03</span>
                </div>
              </div>
              <div className="content">
                <h5 className="h5">Drag & Drop Files</h5>
                <p>
                Once you've chosen everything, simply drag and drop the files you want to process into the designated area. Make sure your files are ready
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className="quote-instructions__single "
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="thumb">
                <div className="thumb-inner">
                  <span>04</span>
                </div>
              </div>
              <div className="content">
                <h5 className="h5">Get a Quote</h5>
                <p>
                After your files are uploaded, you’ll typically see an option to get a quote. Click that, and you should receive details about pricing and any other pertinent information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteInstructions;
