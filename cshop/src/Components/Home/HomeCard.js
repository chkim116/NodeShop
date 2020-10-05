import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

const HomeCardBlock = styled.div`
  padding: 2em;
  max-width: 1440px;
  margin: 0 auto;
  .slick-next {
    right: -2%;
    z-index: 2;
  }
  .slick-prev {
    left: -2%;
    z-index: 2;
  }

  .main__card-title {
    &:nth-child(even) {
      text-align: right;
      margin-top: 1em;
    }
  }
  .main__card-text {
    text-align: center;
    @media all and (max-width: 460px) {
      font-size: 12px;
    }
    @media all and (max-width: 340px) {
      font-size: 10px;
    }
  }
  .main__card-img {
    margin: 2em auto 2em auto;
    width: 300px;
    object-fit: cover;
    height: 300px;
    outline: none;
    border-radius: 50%;
    @media all and (max-width: 1600px) {
      width: 250px;
      height: 250px;
    }
    @media all and (max-width: 1200px) {
      width: 200px;
      height: 200px;
    }
    @media all and (max-width: 900px) {
      width: 150px;
      height: 150px;
    }
    @media all and (max-width: 740px) {
      width: 130px;
      height: 130px;
    }
    @media all and (max-width: 600px) {
      width: 100px;
      height: 100px;
    }
    @media all and (max-width: 500px) {
      width: 80px;
      height: 80px;
    }
    @media all and (max-width: 400px) {
      width: 65px;
      height: 65px;
    }
    @media all and (max-width: 320px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const Wrap = styled.div`
  background: rgba(250, 177, 160, 0.5);
  width: 100%;
`;

export const HomeCard = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Wrap>
      <HomeCardBlock>
        <h2 className="main__card-title">Best</h2>
        <hr></hr>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="main__card" key={index}>
              <Link to="/">
                <img
                  src={item.imgUrl}
                  className="main__card-img"
                  alt={item.name}
                />
              </Link>
              <div className="main__card-text">
                <p>{item.name}</p>
                <span>{item.price}W</span>
              </div>
            </div>
          ))}
        </Slider>
        <h2 className="main__card-title">New</h2>
        <hr></hr>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div className="main__card" key={index}>
              <Link to="/">
                <img
                  src={item.imgUrl}
                  className="main__card-img"
                  alt={item.name}
                />
              </Link>
              <div className="main__card-text">
                <p>{item.name}</p>
                <span>{item.price}W</span>
              </div>
            </div>
          ))}
        </Slider>
      </HomeCardBlock>
    </Wrap>
  );
};
