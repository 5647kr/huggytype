import { Wrap, Title } from "../../components/Common";
import Header from "../../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <>
    <Header />
    <Wrap>
      <ContentWrap>
        <Title>나의 MBTI는?</Title>
        <p>나의 MBTI 성격 유형과 알맞는 유기묘와 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
        <div className="imgWrap">
          <img src="/assets/img/골든_리트리버.webp" alt="골든 리트리버 아이콘" />
          <img src="/assets/img/러시안_블루.webp" alt="러시안 블루 아이콘" />
        </div>
        <Link to={"/test"}>MBTI 테스트 시작하기</Link>
      </ContentWrap>
      <ContentWrap>
        <Title>내 짝궁은?</Title>
        <p>나와 가까운, 내가 좋아하는, 유기묘, 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
        <div className="imgWrap">
          <img src="/assets/img/골든_리트리버.webp" alt="골든 리트리버 아이콘" />
          <img src="/assets/img/러시안_블루.webp" alt="러시안 블루 아이콘" />
        </div>
        <Link to={"/search"}>내 짝궁 찾기</Link>
      </ContentWrap>
    </Wrap>
    </>
  );
}

const ContentWrap = styled.div`
  background-color: var(--sub-color);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 40px;
  .imgWrap {
    display: flex;
    justify-content: center;
  }
  img:first-child {
    transform: scaleX(-1);
  }
  img {
    width: 8rem;
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
    display: block;
    margin: 0 auto;
    text-align: center;
    width: fit-content;
  }
  a:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`