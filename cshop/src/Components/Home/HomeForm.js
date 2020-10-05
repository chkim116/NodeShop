import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img1 from "../../assets/image/bag.jpg";
import img2 from "../../assets/image/bag3.jpg";
import img3 from "../../assets/image/clutch.jpg";
import img4 from "../../assets/image/pounch.jpg";
import img5 from "../../assets/image/pounch2.jpg";
import video from "../../assets/video/samplevideo.mp4";
import Button from "../Style/Button";
import { HomeCard } from "./HomeCard";

const HomeBlock = styled.main`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: bold;
  font-family: "Cafe24Oneprettynight";
  .main__slider {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    object-fit: cover;
    padding-bottom: 56%;
    .main__slider-img {
      position: absolute;
      background: #ff7675;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .main__video {
    background: #fd79a8;
    width: 100%;
    text-align: center;
    padding: 0em 0.3em 7em 0.3em;
    position: relative;
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
      top: 101px;
      left: 36px;
      z-index: 99;
      transform: rotateZ(25deg);
    }
    .after-text {
      position: absolute;
      bottom: 88px;
      right: 36px;
      z-index: 99;
      transform: rotateZ(-25deg);
    }
  }
`;

const HomeAside = styled.div`
  background: #ffeaa7;
  width: 100%;
  min-height: 720px;
  padding: 2em;
  .aside__photo {
    max-width: 1640px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    padding-bottom: 25%;
    @media all and (max-width: 600px) {
      padding-bottom: 40%;
    }
    .aside__photo-desc {
      .link {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        justify-content: center;
        flex-direction: column;
        display: flex;
        align-items: center;
        cursor: pointer;
        opacity: 0;
        color: white;
        font-size: 22px;
        font-weight: bold;
        background: rgba(45, 52, 54, 0.5);
        &:hover {
          opacity: 1;
          transition: 800ms;
        }
        button {
        }
      }
      .aside__photo-img {
        object-fit: cover;
        width: 100%;
        position: absolute;
        height: 100%;
        cursor: pointer;
        top: 0;
        z-index: 2;
      }
    }
  }
`;

export const HomeForm = () => {
  const items = [
    {
      name: "CROSS",
      price: "320,000",
      imgUrl: img1,
    },
    {
      name: "SHOPPER",
      price: "300,000",
      imgUrl: img2,
    },
    {
      name: "CLUTCH",
      price: "350,000",
      imgUrl: img3,
    },
    {
      name: "POUNCH",
      price: "120,000",
      imgUrl: img4,
    },
    {
      name: "BEST",
      price: "120,000",
      imgUrl: img5,
    },
  ];

  return (
    <>
      <HomeBlock>
        <div className="main__slider">
          <img className="main__slider-img" src={img3} alt="메인이미지" />
        </div>

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
              autoPlay={true}
              alt="비디옹"
              className="main__videos"
            />
          </div>
          <div className="after-text">
            <h1>Prettey?</h1>
          </div>
        </div>
      </HomeBlock>
      <HomeAside>
        {items.map((item, index) => (
          <div className="aside__photo" key={index}>
            <div className="aside__photo-desc">
              <img
                src={item.imgUrl}
                className="aside__photo-img"
                alt={item.name}
              />
              <div className="link">
                <h4>{item.name}</h4>
                <Link to="/">
                  <Button>바로가기</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </HomeAside>
      <HomeCard items={items}></HomeCard>
    </>
  );
};
