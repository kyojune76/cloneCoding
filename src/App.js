import styled from "styled-components";
import carimg from "./Casper.jpg";
import React, { useState } from "react";

function HyundaiLogo() {
  const CarSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  };
  return (
    <First>
      <Top>
        <Logo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 67.000000 31.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)"
            fill="navy"
            stroke="none"
          >
            <path d="M265 287 c-106 -28 -165 -77 -165 -138 0 -32 58 -83 125 -108 52 -20 75 -22 170 -19 97 3 117 7 168 32 178 87 82 230 -163 242 -51 2 -105 -2 -135 -9z m242 -24 c23 -9 14 -22 -34 -47 -59 -29 -120 -47 -139 -39 -21 8 -17 46 8 78 20 26 23 27 86 20 36 -4 71 -9 79 -12z m-257 -54 c-22 -34 -45 -77 -52 -95 -7 -19 -15 -34 -19 -34 -13 0 -59 61 -59 79 0 32 39 69 93 90 28 11 58 20 64 20 7 1 -5 -27 -27 -60z m357 -1 c46 -43 25 -98 -50 -134 -83 -38 -93 -33 -53 29 19 29 41 70 50 90 18 43 22 44 53 15z m-171 -83 c10 -25 -16 -75 -43 -81 -31 -8 -126 1 -149 14 -15 8 -11 13 26 32 96 49 156 62 166 35z" />
          </g>
        </Logo>
        <Title>HYUNDAI</Title>
        <Xecond>
          <Toolbar>구매/이벤트</Toolbar>
          <Toolbar>서비스/멤버쉽</Toolbar>
          <Toolbar>디지털/고객지원</Toolbar>
          <Toolbar>브랜드</Toolbar>
          <ToolbarS
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="77.000000pt"
            height="31.000000pt"
            viewBox="0 0 77.000000 31.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,46.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path d="M122 334 c-24 -17 -29 -56 -9 -71 6 -6 26 -15 42 -20 17 -5 31 -17 33 -25 5 -24 -35 -32 -63 -14 -27 18 -44 4 -25 -19 19 -23 68 -29 96 -10 20 13 25 23 22 48 -3 28 -8 34 -45 45 -44 14 -56 35 -27 46 8 3 25 1 36 -5 31 -17 45 5 17 25 -29 20 -48 20 -77 0z" />
              <path d="M245 337 c-3 -7 -5 -47 -3 -88 2 -58 6 -74 18 -74 10 0 17 14 20 45 4 34 10 46 24 48 24 5 36 -14 36 -60 0 -27 4 -38 15 -38 11 0 15 12 15 48 0 63 -17 86 -58 80 -27 -4 -31 -1 -34 21 -3 28 -25 40 -33 18z" />
              <path d="M407 282 c-26 -29 -22 -77 9 -101 41 -32 62 -26 122 34 58 58 85 67 102 36 19 -37 -13 -71 -50 -51 -15 8 -22 5 -34 -12 -20 -29 -21 -68 -1 -68 9 0 15 9 15 25 0 21 3 24 28 19 64 -13 108 70 62 116 -37 37 -78 27 -142 -37 -49 -48 -61 -56 -76 -47 -10 7 -17 24 -17 40 0 27 2 29 38 28 30 -1 37 2 35 15 -5 24 -70 27 -91 3z" />
            </g>
          </ToolbarS>
          <Toolbar>Hi,EV</Toolbar>
          <Lang>
            <option>KR</option>
            <option>EN</option>
            <option>JP</option>
            <option>CN</option>
          </Lang>
        </Xecond>
      </Top>
      <Baegyeoung>
        <button></button>
        background img={carimg};
        <Carimg src={carimg} alt="car" />
      </Baegyeoung>
    </First>
  );
}

export default HyundaiLogo;

const First = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
`;
const Logo = styled.svg`
  margin-top: 6px;
  width: 60px;
  height: 23px;
  flex-direction: row;
`;
const Title = styled.div`
  font-size: x-large;
  font-family: "HyundaiSansTextKR", "Magul Gothic";
  font-weight: bold;
  color: navy;
`;

const Xecond = styled.div`
  display: flex;
  justify-content: space-around; /* 항목 간격 조정 */
  flex: 1; /* Xecond가 가로 공간을 차지하도록 설정 */
  margin-left: 20px; /* Title과 Xecond 간의 간격 조정 */
`;
const Toolbar = styled.button`
  color: black;
  font-size: large;
  font-weight: lighter;
  border: none;
  margin-top: 6px;
  cursor: pointer;
  background: transparent;
`;
const ToolbarS = styled.svg`
  margin-top: 5px;
  width: 60px;
  height: 23px;
`;
const Lang = styled.select`
  margin-top: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const Carimg = styled.img`
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 600px;
`;
const Baegyeoung = styled.div``;
