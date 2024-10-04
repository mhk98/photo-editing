import React from "react";
import Image from "next/image";
import one from "public/images/counter/one.png";
import two from "public/images/counter/two.png";
import three from "public/images/counter/three.png";
import four from "public/images/counter/four.png";
import Counter from "../Counter";

const CounterSec = () => {
  return (
    <section className="section counter pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner">
              <div
                className="counter__item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="counter__item-inner">
                  <div className="counter__item-inner__thumb">
                    <Image src={one} priority alt="Image" />
                  </div>
                  <div className="counter__item-inner__content">
                    <h4 className="h4">
                      <span className="odometer">
                        <Counter value={95} />
                      </span>
                      <span>+</span>
                    </h4>
                  </div>
                </div>
                <p className="h6">Certified Professionals</p>
              </div>
              <div
                className="counter__item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="counter__item-inner">
                  <div className="counter__item-inner__thumb">
                    <Image src={two} priority alt="Image" />
                  </div>
                  <div className="counter__item-inner__content">
                    <h4 className="h4">
                      <span className="odometer">
                        <Counter value={90} />
                      </span>
                      <span>%</span>
                    </h4>
                  </div>
                </div>
                <p className="h6">Sales Lift</p>
              </div>
              <div
                className="counter__item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="counter__item-inner">
                  <div className="counter__item-inner__thumb">
                    <Image src={three} priority alt="Image" />
                  </div>
                  <div className="counter__item-inner__content">
                    <h4 className="h4">
                      <span className="odometer">
                        <Counter value={85} />
                      </span>
                      <span>%</span>
                    </h4>
                  </div>
                </div>
                <p className="h6">Faster Delivery</p>
              </div>
              <div
                className="counter__item "
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                <div className="counter__item-inner">
                  <div className="counter__item-inner__thumb">
                    <Image src={four} priority alt="Image" />
                  </div>
                  <div className="counter__item-inner__content">
                    <h4 className="h4">
                      <span className="odometer">
                        <Counter value={80} />
                      </span>
                      <span>%</span>
                    </h4>
                  </div>
                </div>
                <p className="h6">Lower Cost</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSec;
