import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { Wrap, Title } from "../../components/Common";
import { mbtiList } from "../../data/Data";

export default function Search() {
  const [isClicked, setIsClicked] = useState(false);
  const [petType, setPetType] = useState("");


  function clickItem(e) {
    setIsClicked(true)
    setPetType(e.target.textContent)
  }

  return (
    <>
      <Header />
      <Wrap>
        <SearchWrap>
          <Title>MBTI 선택</Title>
          <strong>본인의 MBTI를 선택해주세요.</strong>

          <TypeSelect>
            <ul>
              {mbtiList.map((item) => {
                return (
                  <li key={item.id}>
                    <input type="radio" id={item.title} name="mbtiList" />
                    <label htmlFor={item.title} onClick={(e) => {clickItem(e)}}>{item.title}</label>
                  </li>
                );
              })}
            </ul>
          </TypeSelect>

          {isClicked ? <Link to={"/result"} state={{petType}}>내 짝궁 찾기</Link> : <span className="disabled">내 짝궁 찾기</span> }
        </SearchWrap>
      </Wrap>
    </>
  );
}

const SearchWrap = styled.div`
  background-color: var(--sub-color);
  padding: 20px;
  border-radius: 20px;
  strong {
    color: var(--content-color);
  }
  a, span {
    width: 100%;
    display: block;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    font-size: 1.4rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  a {
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
  }
  span {
    border: 1px solid var(--content-color);
    color: var(--content-color);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const TypeSelect = styled.div`
  margin: 20px 0 40px;
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  label {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 1.4rem;
    color: var(--content-color);
    border: 1px solid var(--content-color);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    cursor: pointer;
  }
  input:checked + label {
    background-color: var(--action-color);
    color: var(--white-color);
    border: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  input {
    display: none;
  }
`;
