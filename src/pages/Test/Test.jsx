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
          <Bar style={{width: `calc(100% / 12 * ${testNum})`}}/>
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
  transition: width 0.3s ease;
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
