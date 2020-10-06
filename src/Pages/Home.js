import React from "react";
import { HomeForm } from "../Components/Home/HomeForm";
import { Helmet } from "react-helmet";
import { Title } from "../Components/Head/Title";

export const Home = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Title
        desc=""
        meta="description"
        content="이 사이트는 유비야트 쇼핑몰 사이트를 토대로 리액트로 코딩한 가상의 쇼핑몰 사이트입니다."
      ></Title>

      <HomeForm />
    </>
  );
};
