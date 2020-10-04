import React from "react";
import { Link } from "react-router-dom";
import styeld from "styled-components";

export const Header = () => {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/user">유저</Link>
      <Link to="/product/sample">프로덕트</Link>
    </div>
  );
};
