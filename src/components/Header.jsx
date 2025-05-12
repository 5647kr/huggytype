import styled from "styled-components";
import Logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <HeaderWrap>
      <Link to={"/"}>
        <img src={Logo} alt="포옹 타입 로고" />
      </Link>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 390px;
  height: 80px;
  padding: 20px;
  margin-bottom: 80px;
  a {
    width: 40px;
    height: 100%;
    display: block;
  }
  img {
    vertical-align: top;
  }
`;