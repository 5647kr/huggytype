import React, { Fragment } from "react";
import { Title } from "../../components/Common";
import styled from "styled-components";
import { testResult } from "./TestData";

export default function Result(props) {
  const resultItem = [];
  testResult.find((item) => {
    if (item.result === props.mbti) {
      resultItem.push(item);
    }
  });

  console.log(resultItem);
  return (
    <ResultWrap>
      <ResultTitle>MBTI 테스트 결과</ResultTitle>
      {resultItem.map((item) => {
        return (
          <Fragment key={item.id}>
            <h3>{item.result}</h3>
            <ImgWrap>
              <img src={item.dogImg} alt="" />
              <img src={item.catImg} alt="" />
            </ImgWrap>
            <strong>
              {item.content}
              <br />
              {item.animals}
            </strong>
          </Fragment>
        );
      })}
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
    font-size: 2.6rem;
  }
`;

const ImgWrap = styled.div`
  margin-bottom: 40px;
`;
