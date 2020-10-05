import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NavBlock = styled.nav`
  width: 100%;
  display: flex;
  background: white;
  top: 45px;
  position: fixed;
  z-index: 999;
  justify-content: center;
  @media all and (max-width: 900px) {
    display: none;
  }
  .nav__items {
    display: flex;
    text-align: center;
    .nav__items-list {
      width: 165px;
      padding: 0 1.5em 1em 1.5em;
      font-size: 24px;
      position: relative;
      cursor: pointer;
      &:hover:before {
        content: "";
        height: 2px;
        position: absolute;
        bottom: 1px;
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
        background: blue;
      }
    }
  }
`;

const SubNavBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: white;
  position: absolute;
  z-index: 5;
  top: 52px;
  .nav__list-sub {
    display: ${(props) => (props.show ? "block" : "none")};
    text-align: center;
    .nav__list-subitems {
      width: 165px;
      padding: 0 1.5em 1em 1.5em;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Nav = () => {
  const [show, setShow] = useState(false);

  const onShowing = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <NavBlock>
        <ul
          className="nav__items"
          onMouseOver={onShowing}
          onMouseOut={onShowing}
        >
          <li className="nav__items-list">ALL</li>
          <li className="nav__items-list">BAG</li>
          <li className="nav__items-list">POUCH</li>
          <li className="nav__items-list">WALLET</li>
        </ul>
        <SubNavBlock show={show} onMouseOver={onShowing} onMouseOut={onShowing}>
          <ul className="nav__list-sub">
            <li className="nav__list-subitems">ALL</li>
            <li className="nav__list-subitems">NEW</li>
            <li className="nav__list-subitems">BEST</li>
          </ul>
          <ul className="nav__list-sub">
            <li className="nav__list-subitems">CROSS</li>
            <li className="nav__list-subitems">SHOPPER</li>
            <li className="nav__list-subitems">CLUTCH</li>
          </ul>
          <ul className="nav__list-sub">
            <li className="nav__list-subitems">POUCH</li>
            <li className="nav__list-subitems">ACC</li>
          </ul>
          <ul className="nav__list-sub">
            <li className="nav__list-subitems">CARD</li>
            <li className="nav__list-subitems">PASSPORT</li>
          </ul>
        </SubNavBlock>
      </NavBlock>
    </>
  );
};
