import React from "react";
import styeld from "styled-components";
import { GrInstagram } from "react-icons/gr";

const FooterBlock = styeld.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: 200px;
  background: #D5C6AB;
  padding: 2em;
  @media all and (max-width: 720px) {
    text-align: center;
  }
  .footer__info {
    max-width: 1440px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    .company__info {
      display:flex;
      flex-direction: column;
    }
    .customer__info {
      display: flex;
      flex-direction: column;
      @media all and (max-width: 720px) {
        width: 100%;    
      }
    }
    .work__info {
      display: flex;
      flex-direction: column;
    }
  }
    .footer__icon {
      cursor: pointer;
      margin-left: 1em;
      width: 24px;
      text-align: center;
      height: 24px;
        &:hover {
          transform: scale(1.2);
        }
    }
`;

export const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer__info">
        <div className="company__info">
          <div>COMPANY. UVIYAT(유비야트)</div>
          <div>OWNER. 손수현</div>
          <div>BUSINESS LICENSE 449-27-01031</div>
          <div>ONLINE LICENSE 2020-서울은평-0420</div>
          <div>CPO. 손채은</div>
          <div>03385 서울특별시 은평구 통일로75길 8 (대조동) 지하1층</div>
        </div>
        <div className="customer__info">
          <div>T. 02-6959-9229</div>
          <div>E-mail. ivya2020@naver.com</div>
          <div>국민은행 458301-01-547036 / 예금주_손수현(유비야트)</div>
        </div>
        <div className="work__info">
          <div>평일 09:00~17:30, 휴일 토요일 일요일 공휴일</div>
        </div>
      </div>
      <div>
        <div className="footer__icon">
          <GrInstagram size={24} />
        </div>
      </div>
    </FooterBlock>
  );
};
