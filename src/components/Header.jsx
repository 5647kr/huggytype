import styled from "styled-components";
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <HeaderWrap>
      <Link to={"/"}>
        <img src={`${process.env.PUBLIC_URL}/assets/img/Logo.svg`} alt="포옹 타입 로고" />
      </Link>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100%;
  height: 80px;
  padding: 20px;
  a {
    width: 40px;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
  a:active {
    box-shadow: none;
  }
  img {
    vertical-align: top;
  }
`;