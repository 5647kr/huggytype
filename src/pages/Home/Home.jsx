import { Wrap, Title } from "../../components/Common";
import Header from "../../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
    <Header />
    <HomepageWrap>
      <IntroWrap>
        <Title>쉽게 버려지는 유기동물</Title>
        <p>나의 MBTI와 맞는 유기견, 유기묘를 찾아보고 <br />입양을 고려해보세요.</p>
      </IntroWrap>
      <ContentWrap>
        <Title>나의 MBTI는?</Title>
        <p>나의 MBTI와 맞는 유기묘, 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/img/골든_리트리버.webp`} alt="골든 리트리버 아이콘" />
          <img src={`${process.env.PUBLIC_URL}/assets/img/러시안_블루.webp`} alt="러시안 블루 아이콘" />
        </div>
        <Link to={"/test"}>MBTI 테스트 시작하기</Link>
      </ContentWrap>
      <ContentWrap>
        <Title>내 짝궁은?</Title>
        <p>MBTI를 알고 있다면, <br />바로 인생 짝궁을 맺어보세요.</p>
        <div className="imgWrap">
          <img src={`${process.env.PUBLIC_URL}/assets/img/골든_리트리버.webp`} alt="골든 리트리버 아이콘" />
          <img src={`${process.env.PUBLIC_URL}/assets/img/러시안_블루.webp`} alt="러시안 블루 아이콘" />
        </div>
        <Link to={"/search"}>내 짝궁 찾기</Link>
      </ContentWrap>
    </HomepageWrap>
    </>
  );
}



const HomepageWrap = styled(Wrap)`
  margin-top: 0;
  height: calc(100vh - 80px);
`

const ContentWrap = styled.div`
  background-color: var(--sub-color);
  border-radius: 20px;
  padding: 20px;
  margin-top: 40px;
  position: relative;
  img:first-child {
    transform: scaleX(-1);
    left: 0;
    bottom: 0;
  }
  img:last-child {
    right: 0;
    top: 0;
  }
  img {
    position: absolute;
    width: 6rem;
    vertical-align: top;
  }
  p {
    color: var(--content-color);
    font-size: 1.4rem;
    margin: 20px 0;
  }
  a {
    border: none;
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1.4rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    text-align: center;
    width: 200px;
  }

`

const IntroWrap = styled(ContentWrap)`
  padding: 0;
  margin: 0;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: transparent;
  z-index: 1;
  &::after {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.2;
    background: url(${() => `${process.env.PUBLIC_URL}/assets/img/home_bg.webp`}) no-repeat 50% 0 / 80%;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    word-break: keep-all;
  }
`
