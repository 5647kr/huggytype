import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { Wrap } from "../../components/Common";
import Button from "../../components/Button";
import { mbtiQuestion } from "../../data/Data";

export default function Test(props) {
  const navigate = useNavigate();
  const [testNum, setTestNum] = useState(1);
  const testList = [...mbtiQuestion];
  const [ei, setEi] = useState(0);
  const [ns, setNs] = useState(0);
  const [tf, setTf] = useState(0);
  const [jp, setJp] = useState(0);

  function nextQuestion() {
    if (testNum === 12) {
      resultMBTI();
    } else {
      setTestNum(testNum + 1);
    }
  }

  function clickedA() {
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

    nextQuestion();
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

    navigate("/result", { state: { mbti: result } });
  }

  return (
    <>
      <Header />
      <Wrap>
        <article>
          <ProgressWrap>
            <Progress>
              <Bar style={{ width: `calc(100% / 12 * ${testNum})` }} />
            </Progress>
            <strong>{testNum} / 12</strong>
          </ProgressWrap>

          <Screen>
            <h2>{testList[testNum - 1].title}</h2>
          </Screen>

          <ButtonWrap>
            <Button
              onClick={() => {
                clickedA();
              }}
            >
              {testList[testNum - 1].A}
            </Button>
            <Button
              onClick={() => {
                clickedB();
              }}
            >
              {testList[testNum - 1].B}
            </Button>
          </ButtonWrap>
        </article>
      </Wrap>
    </>
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
  padding: 20px;
  h2 {
    text-align: center;
    font-size: 2.6rem;
    color: var(--main-color);
    word-break: keep-all;
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
    word-break: keep-all;
  }
`;
