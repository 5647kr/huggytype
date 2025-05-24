import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Title, Wrap } from "../../components/Common";
import Header from "../../components/Header";
import { mbtiList } from "../../data/Data";

export default function Result() {
  const loc = useLocation();
  const mbti = loc.state.mbti;

  const resultItem = [];
  mbtiList.find((item) => {
    if (item.title === mbti) {
      resultItem.push(item);
    }
  });


  return (
    <>
      <Header />
      <Wrap>
        <ResultWrap>
          <ResultTitle>MBTI 테스트 결과</ResultTitle>
          {resultItem.map((item) => {
            return (
              <Fragment key={item.id}>
                <h3>{item.title}</h3>
                <ImgWrap>
                  <img src={item.dogImg} alt={item.animals} />
                  <img src={item.catImg} alt={item.animals} />
                </ImgWrap>
                <strong>
                  {item.content}
                  <br />
                  {item.animals}
                </strong>
              </Fragment>
            );
          })}
          <LinkWrap>
            <Link to={"/findMyPet"}>짝궁 찾기</Link>
            <Link to={"/test"}>MBTI 테스트하기</Link>
            <Link to={"/search"}>MBTI 선택하기</Link>
          </LinkWrap>
        </ResultWrap>
      </Wrap>
    </>
  );
}

const ResultTitle = styled(Title)`
  text-align: center;
`;

const ResultWrap = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--main-color);
  h3 {
    margin: 80px 0 40px;
  }
  strong {
    display: block;
    font-size: 2.2rem;
  }
  img {
    width: 200px;
    vertical-align: top;
  }
  img:first-child {
    transform: scaleX(-1);
  }
  button {
    margin-top: 20px;
    background-color: var(--main-color);
    width: 100%;
    display: block;
    font-size: 2rem;
  }
`;

const ImgWrap = styled.div`
  margin-bottom: 40px;
`;

const LinkWrap = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  a {
    border: none;
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
  }
  a:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  a:first-child {
    grid-area: 1/1/2/3;
  }
`;