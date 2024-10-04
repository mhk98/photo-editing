import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ctaThumb from "public/images/cta-thumb.png";
import upload from "public/images/upload.png";
import axios from "axios";

interface HomeCTA{
  id: number; 
  image: string;
  title:string

}

const CTA = () => {



  const [data, setData] = useState<HomeCTA[]>([]);

  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: HomeCTA[] }>('http://localhost:5000/api/v1/removeImage');
        setData(response.data.data);
      } catch (err:any) {
        console.error("Error fetching home banner data:", err.message);
      }
    };

    fetchData();
  }, []);


  return (
    <section className="try-cta bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="try-cta__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="try-cta__thumb ">
                 {
                  data?.map((item) => (
                    <Image priority 
                    src={`http://localhost:5000/${item.image}`}
                    width={450}
                    height={349}
                    alt="Image" />
                  ))
                 }
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="try-cta__content section__content">
                    <p className="h6 sub-title ">try free now</p>
                    <h2 className="h2 title ">Remove Image Background</h2>
                    <div className="paragraph ">
                      <p>
                        Clipping Path Could be a process by which photo editors
                        make a vector path to pick.
                      </p>
                    </div>
                    <div className="cta__group ">
                      <Link href="get-quote" className="btn btn--secondary">
                        <Image src={upload} alt="Image" />
                         upload images
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

export default CTA;