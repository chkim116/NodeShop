import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch, BsHeart } from "react-icons/bs";
import { BiUser, BiCartAlt } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import { MediaNav } from "./MediaNav";
import { Nav } from "./Nav";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  border-bottom: #dddddd;
  background: white;
  padding: 0 1em;
  align-items: center;
  height: 45px;
  position: fixed;
  z-index: 55;
  .header {
    max-width: 1440px;
    width: 100%;
    display: flex;
    margin: 0 auto;
  }
  .header__items {
    flex: 1;
    &:nth-child(1) {
      visibility: hidden;
      @media all and (max-width: 740px) {
        visibility: visible;
      }
    }
    &:nth-child(2) {
      text-align: center;
    }
    &:nth-child(3) {
      text-align: right;
    }
  }
  .header__items-icons {
    cursor: pointer;
  }

  .header__user {
    cursor: pointer;
    margin: 0 0.5em;
    width: 22px;
    hegiht: 22px;
    @media all and (max-width: 500px) {
      margin: 0 0.2em;
      &:nth-child(2),
      &:nth-child(3) {
        display: none;
      }
    }
    &:hover .header__user-items {
      display: block;
    }
  }
`;

const AsideSearch = styled.div`
  position: fixed;
  z-index: 55;
  width: 100%;
  top: 45px;
  z-index: 10000;
  display: ${(props) => (props.show ? "block" : "none")};
  text-align: center;
  .aside__search {
    width: 50%;
    z-index: 3;
    height: 40px;
    padding: 0.4em;
    font-size: 25px;
    outline: none;
  }
  .aside__btn {
    all: unset;
    cursor: pointer;
    margin: 0 0.5em;
  }
  .aside__del {
    cursor: pointer;
    font-size: 24px;
  }
`;

export const Header = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMedia, setShowMedia] = useState(false);

  const onUser = () => {
    user ? setUser(false) : setUser(true);
  };

  const onShowing = () => {
    show ? setShow(false) : setShow(true);
  };
  const onSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };
  const onMedia = () => {
    showMedia ? setShowMedia(false) : setShowMedia(true);
  };

  return (
    <>
      <AsideSearch show={showSearch}>
        <input className="aside__search" type="text" placeholder="검색" />
        <button type="submit" className="aside__btn">
          <BsSearch size={20} />
        </button>
        <span onClick={onSearch} className="aside__del">
          X
        </span>
      </AsideSearch>
      <HeaderBlock user={user}>
        <div className="header">
          <div className="header__items">
            <span className="header__items-icons" onClick={onMedia}>
              {showMedia ? "X" : <VscMenu size={20} />}
            </span>
            <MediaNav showMedia={showMedia} />
          </div>
          <div className="header__items">
            <Link to="/" className="header__items-icons">
              <h2>UVIYAT</h2>
            </Link>
          </div>
          <div className="header__items">
            <span className="header__user" onClick={onSearch}>
              <BsSearch size={20} />
            </span>
            <Link to="/product/sample" className="header__user">
              <BiCartAlt size={22} />
            </Link>
            <Link to="/product/sample" className="header__user">
              <BsHeart size={20} />
            </Link>
            <Link to="/user" className="header__user">
              <BiUser size={22} />
            </Link>
          </div>
        </div>
      </HeaderBlock>
      <Nav show={show} onShowing={onShowing} />
    </>
  );
};
