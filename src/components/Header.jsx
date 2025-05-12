import styled from "styled-components";
import Logo from "../assets/img/Logo.svg";


export default function Header() {
  return (
    <HeaderWrap>
      <a href="/home">
        <img src={Logo} alt="포옹 타입 로고" />
      </a>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 390px;
  height: 80px;
  position: fixed;
  z-index: 999;
  padding: 20px;
  a {
    width: 40px;
    height: 100%;
    display: block;
  }
  img {
    vertical-align: top;
  }
`;
