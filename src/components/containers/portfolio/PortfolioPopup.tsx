import React, { useState } from "react";
import Image from "next/image";
import YoutubeEmbed from "@/components/layout/youtube/YoutubeEmbed";
import Bg from "public/images/video-modal-bg.png";

const PortfolioPopup = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <div
      className="video-modal-two "
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <Image src={Bg} alt="Image" />
      <div className="video-wrap">
        <a
          target="_blank"
          title="video Player"
          className="video-btn"
          onClick={() => setVideoActive(true)}
        >
          <i className="icon-play"></i>
        </a>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
