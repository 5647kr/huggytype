import { Wrap, Title } from "../../components/Common";
import Header from "../../components/Header";
import Button from "../../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dogImg from "../../assets/img/골든_리트리버.webp"
import catImg from "../../assets/img/러시안_블루.webp"



export default function Home() {
  return (
    <>
    <Header />
    <Wrap>
      <ContentWrap>
        <Title>나의 MBTI는?</Title>
        <p>나의 MBTI 성격 유형과 알맞는 유기묘와 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
        <div className="imgWrap">
          <img src={dogImg} alt="골든 리트리버 아이콘" />
          <img src={catImg} alt="러시안 블루 아이콘" />
        </div>
          <Button>
            <Link to={"/test"}>MBTI 테스트 시작하기</Link>
          </Button>
      </ContentWrap>
      <ContentWrap>
        <Title>내 짝궁은?</Title>
        <p>나와 가까운, 내가 좋아하는, 유기묘, 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
        <div className="imgWrap">
          <img src={dogImg} alt="골든 리트리버 아이콘" />
          <img src={catImg} alt="러시안 블루 아이콘" />
        </div>
        <Button>
          <Link to={"/search"}>내 짝궁 찾기</Link>
        </Button>
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
    color: var(--white-color);
  }
  button {
    display: block;
    margin: 0 auto;
  }
`