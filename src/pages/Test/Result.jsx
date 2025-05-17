import React, { Fragment } from "react";
import { Title } from "../../components/Common";
import styled from "styled-components";
import { testResult } from "./TestData";
import { Link } from "react-router-dom";

export default function Result(props) {
  const resultItem = [];
  testResult.find((item) => {
    if (item.result === props.mbti) {
      resultItem.push(item);
    }
  });

  function resetTest() {
    props.setDone(false);
  }

  console.log(resultItem);
  return (
    <ResultWrap>
      <ResultTitle>MBTI 테스트 결과</ResultTitle>
      {resultItem.map((item) => {
        return (
          <Fragment key={item.id}>
            <h3>{item.result}</h3>
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
        <Link to={"/findMyPet"}>강아지 짝궁 찾기</Link>
        <Link to={"/findMyPet"}>고양이 짝궁 찾기</Link>
      </LinkWrap>
      <button
        onClick={() => {
          resetTest();
        }}
      >
        다시 테스트 하기
      </button>
    </ResultWrap>
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
  display: flex;
  gap: 20px;
  a {
    flex-grow: 1;
    border: none;
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 2rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  a:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
