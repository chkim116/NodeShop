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
        desc="어서오세요! 환영합니다."
        meta="description"
        content="메인 페이지"
      ></Title>
      <HomeForm />
    </>
  );
};
