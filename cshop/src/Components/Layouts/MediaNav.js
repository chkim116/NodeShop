import React, { useState } from "react";
import styled from "styled-components";

const MediaNavBlock = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 45px;
  display: ${(props) => (props.showMedia ? "block" : "none")};
  width: 100%;
  .media__items {
    width: 100%;
    text-align: center;
    padding: 1em;
    background: white;
    cursor:pointer;
    .media__items-list {
        padding: 0.4em;
        font-size: 18px;
        position: relative;
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
    .nav__list-sub {
      width: 100%;
      padding: 0.5em;
      cursor:pointer;
        .nav__list-subitems {
            &:hover {
                text-decoration: underline;
            }
        }
    }
          .all {
              display: ${(props) => (props.all ? "block" : "none")};
              
            }
            .bag {
                display: ${(props) => (props.bag ? "block" : "none")};
                
            }
            .pouch {
                display: ${(props) => (props.pouch ? "block" : "none")};
                
            }
            .wallet {
                display: ${(props) => (props.wallet ? "block" : "none")};
            }
    }
  }
`;

export const MediaNav = ({ showMedia }) => {
  const [showSub, setShowSub] = useState({
    all: false,
    bag: false,
    pouch: false,
    wallet: false,
  });

  const { all, bag, pouch, wallet } = showSub;

  const checkSub = (sub, nav) => {
    !sub
      ? setShowSub({ ...showSub, [nav]: true })
      : setShowSub({ ...showSub, [nav]: false });
  };

  const onClick = (e) => {
    const nav = e.target.dataset.set;
    if (nav === "all") return checkSub(all, nav);
    if (nav === "bag") return checkSub(bag, nav);
    if (nav === "pouch") return checkSub(pouch, nav);
    if (nav === "wallet") return checkSub(wallet, nav);
  };

  return (
    <MediaNavBlock
      showMedia={showMedia}
      all={all}
      bag={bag}
      pouch={pouch}
      wallet={wallet}
    >
      <ul className="media__items">
        <li className="media__items-list" data-set="all" onClick={onClick}>
          ALL
        </li>
        <ul className="nav__list-sub all" data-class="all">
          <li className="nav__list-subitems">ALL</li>
          <li className="nav__list-subitems">NEW</li>
          <li className="nav__list-subitems">BEST</li>
        </ul>
      </ul>
      <ul className="media__items">
        <li className="media__items-list" data-set="bag" onClick={onClick}>
          BAG
        </li>
        <ul className="nav__list-sub bag" data-class="bag">
          <li className="nav__list-subitems">CROSS</li>
          <li className="nav__list-subitems">SHOPPER</li>
          <li className="nav__list-subitems">CLUTCH</li>
        </ul>
      </ul>
      <ul className="media__items">
        <li className="media__items-list" data-set="pouch" onClick={onClick}>
          POUCH
        </li>
        <ul className="nav__list-sub pouch" data-class="pouch">
          <li className="nav__list-subitems">POUCH</li>
          <li className="nav__list-subitems">ACC</li>
        </ul>
      </ul>
      <ul className="media__items">
        <li className="media__items-list" data-set="wallet" onClick={onClick}>
          WALLET
        </li>
        <ul className="nav__list-sub wallet" data-class="wallet">
          <li className="nav__list-subitems">CARD</li>
          <li className="nav__list-subitems">PASSPORT</li>
        </ul>
      </ul>
    </MediaNavBlock>
  );
};
