import React, { useState } from "react";
import { Link } from "react-router-dom";
import styeld from "styled-components";
import { BsSearch, BsHeart } from "react-icons/bs";
import { BiUser, BiCartAlt } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
const HeaderBlock = styeld.header`
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  border-bottom: #DDDDDD;
  background: white;
  padding : 0 1em;
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
      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
        @media all and (max-width: 400px) {
          flex:2;
        }
      }
  }
  .header__items-icons {
    cursor:pointer;
  }

  .header__user{
    cursor: pointer;
    margin: 0 0.5em;
    @media all and (max-width: 500px) {
      margin: 0 0.2em;
    }
  }
`;

const AsideSearch = styeld.div`
  position: fixed;
  z-index: 55;
  width: 100%;
  background: white;
  top:45px;
  z-index:10000;
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
    cursor:pointer;
    margin: 0 .5em;
  }
  .aside__del {
    cursor:pointer;
    font-size: 24px;
  }
  `;

export const Header = () => {
  const [show, setShow] = useState(false);
  const onShowing = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <AsideSearch show={show}>
        <input className="aside__search" type="text" placeholder="검색" />
        <button type="submit" className="aside__btn">
          <BsSearch size={20} />
        </button>
        <span onClick={onShowing} className="aside__del">
          X
        </span>
      </AsideSearch>
      <HeaderBlock>
        <div className="header">
          <div className="header__items">
            <span className="header__items-icons">
              <VscMenu size={20} />
            </span>
          </div>
          <div className="header__items">
            <Link to="/" className="header__items-icons">
              <h2>UVIYAT</h2>
            </Link>
          </div>
          <div className="header__items">
            <span className="header__user" onClick={onShowing}>
              <BsSearch size={20} />
            </span>
            <Link to="/product/sample" className="header__user">
              <BiCartAlt size={22} />
            </Link>
            <Link to="/product/sample" className="header__user">
              <BsHeart size={20} />
            </Link>
            <Link to="/user" className="header__user">
              <BiUser size={24} />
            </Link>
          </div>
        </div>
      </HeaderBlock>
    </>
  );
};
