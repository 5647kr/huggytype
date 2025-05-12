import { Wrap, Title } from "../../components/Common";
import Header from "../../components/Header";
import Button from "../../components/Button";
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
        <Button>
          <Link to={"/test"}>MBTI 테스트 시작하기</Link>
        </Button>
      </ContentWrap>
      <ContentWrap>
        <Title>나의 MBTI는?</Title>
        <p>나와 가까운, 내가 좋아하는, 유기묘, 유기견을 찾아<br />인생의 짝궁을 맺어보세요.</p>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    color: var(--content-color);
    font-size: 1.4rem;
  }
  a {
    color: var(--white-color);
  }
`