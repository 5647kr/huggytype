import React, { useState } from "react";
import styled from "styled-components";
import { question } from "./TestData";

export default function Test(props) {
  const [testNum, setTestNum] = useState(1);
  const testList = [...question];
  const [ei, setEi] = useState(0);
  const [ns, setNs] = useState(0);
  const [tf, setTf] = useState(0);
  const [jp, setJp] = useState(0);

  function nextQuestion() {
    setTestNum(testNum + 1);
    if (testNum === 12) {
      resultMBTI();
    } else {
      return;
    }
  }

  function clickedA() {
    nextQuestion();
    const type = testList[testNum - 1].type.toLowerCase();
    if (type === "ei") {
      setEi(ei + 1);
    } else if (type === "ns") {
      setNs(ns + 1);
    } else if (type === "tf") {
      setTf(tf + 1);
    } else {
      setJp(jp + 1);
    }
  }

  function clickedB() {
    nextQuestion();
  }

  function resultMBTI() {
    let result = "";
    result += ei >= 2 ? "E" : "I";
    result += ns >= 2 ? "N" : "S";
    result += tf >= 2 ? "T" : "F";
    result += jp >= 2 ? "J" : "P";
    
    props.setMbti(result);
    props.setDone(true);
  }



  return (
    <article>
      <ProgressWrap>
        <Progress>
          <Bar />
        </Progress>
        <strong>{testNum} / 12</strong>
      </ProgressWrap>

      <Screen>
        <h2>{testList[testNum - 1].title}</h2>
      </Screen>

      <ButtonWrap>
        <button
          onClick={() => {
            clickedA();
          }}
        >
          {testList[testNum - 1].A}
        </button>
        <button
          onClick={() => {
            clickedB();
          }}
        >
          {testList[testNum - 1].B}
        </button>
      </ButtonWrap>
    </article>
  );
}
// 1. a, b버튼중 하나를 누르면 다음 질문과 다음 선택지가 나와야함
// 2. a, b버튼을 누르면 진행바가 증가해야함
// 3. a, b버튼을 누르면 어떤 타입인지 확인후 그 값을 증가해서 최종 mbti를 결정해야함

const ProgressWrap = styled.div`
  strong {
    text-align: center;
    display: block;
    color: var(--content-color);
    margin-top: 10px;
    font-size: 2rem;
    font-weight: bold;
  }
`;
const Progress = styled.div`
  width: 100%;
  height: 20px;
  background-color: var(--sub-color);
  border-radius: 20px;
`;

const Bar = styled.div`
  width: calc(100% / 12 * 1);
  height: 20px;
  background-color: var(--main-color);
  border-radius: 20px;
`;

const Screen = styled.div`
  width: 100%;
  height: 320px;
  margin-top: 40px;
  background-color: var(--sub-color);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-align: center;
    font-size: 3rem;
    color: var(--main-color);
  }
`;

const ButtonWrap = styled.div`
  margin-top: 40px;
  button:first-child {
    margin-bottom: 20px;
  }
  button {
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
  }
`;
