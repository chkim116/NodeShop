import React from "react";
import video from "../../assets/video/1234.mp4";
import styled from "styled-components";

const Wrap = styled.div`
  .main__video {
    background: #fd79a8;
    width: 100%;
    text-align: center;
    padding: 0em 0.3em 7em 0.3em;
    position: relative;
    @media all and (max-width: 480px) {
      display: none;
    }
    .main__video-text {
      padding: 2em 0;
      text-align: center;
    }
    .main__video-wrap {
      margin: 0 auto;
      max-width: 1640px;
      position: relative;
      padding-bottom: 56.25%;
      object-fit: cover;
      .main__videos {
        position: absolute;
        width: 100%;
        outline: none;
        height: 100%;
        left: 0;
        right: 0;
      }
    }
    .before-text {
      position: absolute;
      top: 98px;
      left: 36px;
      z-index: 50;
      transform: rotateZ(25deg);
    }
    .after-text {
      position: absolute;
      bottom: 88px;
      right: 36px;
      z-index: 50;
      transform: rotateZ(-25deg);
    }
  }
`;

export const HomeVideo = () => {
  return (
    <Wrap>
      <div className="main__video">
        <div className="main__video-text">
          <h2>#존예 #소확행 #나만의가방</h2>
          <h3>아름다움을 즐기세요</h3>
        </div>
        <div className="before-text">
          <h1>Beauty?</h1>
        </div>
        <div className="main__video-wrap">
          <video
            src={video}
            autoPlay={window.innerWidth < 768 ? false : true}
            controls={window.innerWidth < 768 ? true : false}
            loop
            muted
            alt="비디옹"
            className="main__videos"
          />
        </div>
        <div className="after-text">
          <h1>Prettey?</h1>
        </div>
      </div>
    </Wrap>
  );
};
