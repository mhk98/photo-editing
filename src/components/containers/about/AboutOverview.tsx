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
             Perfectly Crafted: The Story Behind Our Seamless Editing Process
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
              Pixamoss is a leading provider of image editing services tailored specifically for e-commerce businesses,
including product photographers, Amazon sellers, and global brands. With extensive experience in the
industry, Pixamoss recognizes the critical role that high-quality images play in attracting customers and
enhancing brand visibility.
              </p>
              <p className="h6">Services Offered</p>
              <p><span style={{fontWeight:"bold"}}>Pixamoss</span> offers a comprehensive range of high-quality image editing services, including:</p>
              <p>E-commerce Model Photo Editing: This service focuses on creating visually appealing images that
              effectively showcase products. The team excels in techniques such as:</p>
              <li>Background Removal: Eliminating unwanted backgrounds to highlight the product.</li>
              <li>Clipping Paths: Creating precise outlines around products for clean presentations</li>
              <li>Image Masking: Ensuring complex images are edited accurately.</li>
              <li>Ghost Mannequins: Displaying clothing items in a way that emphasizes their fit and style.</li>
              <li>Color Correction: Enhancing the overall aesthetic of images to ensure they are visually striking and true
to life.
</li>
              <li>Shadow Creation: Adding depth and realism to product images, making them more engaging for
              potential buyers.</li>
              <p style={{fontWeight:"bold", marginTop:"40px"}}>Commitment to Quality</p>
              <p>At <span style={{fontWeight:"bold"}}>Pixamoss</span>, the commitment to quality is paramount. The team of professional photo editors utilizes
the latest tools and technologies to ensure that every image is edited to perfection. They offer
customized packages designed to meet the specific needs of each client, ensuring satisfaction with the
final results.</p>
              <p style={{fontWeight:"bold", marginTop:"40px"}}>Customer Service</p>
              <p> <span style={{fontWeight:"bold"}}>Pixamoss</span> prides itself on providing **excellent customer service** throughout the editing process. They
strive to deliver orders promptly, often within 24 hours, ensuring that clients receive their edited images
quickly and efficiently</p>
<p>Lastly, <span style={{fontWeight:"bold"}}>Pixamoss</span> stands out as a premier choice for e-commerce image editing, offering a blend of
expertise, quality, and customer-focused service to help businesses enhance their visual marketing
efforts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
