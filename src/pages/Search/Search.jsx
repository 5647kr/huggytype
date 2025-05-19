import React, { useState } from 'react'
import Header from '../../components/Header'
import { Wrap, Title } from '../../components/Common'
import styled from 'styled-components'
import TypeData from './TypeData'
import { Link } from 'react-router-dom'






export default function Search() {
  const [isDogType, setIsDogType] = useState(true);

  function typeSelected(e) {
    const type = e.target.textContent;
    console.log(type)
    type === "강아지" ? setIsDogType(true) : setIsDogType(false);
    console.log(isDogType)
  }



  return (
    <>
      <Header />
      <Wrap>
        <SearchForm>
          <Title>짝궁 선택</Title>
          <strong>품종 하나만 선택해주세요.</strong>

          <TypeSelect>
            <input type="radio" id='dogType' name='type' defaultChecked/>
            <label htmlFor="dogType" onClick={(e) => {typeSelected(e)}}>강아지</label>
            <input type="radio" id='catType' name='type'/>
            <label htmlFor="catType" onClick={(e) => {typeSelected(e)}}>고양이</label>
          </TypeSelect>

          <TypeData isDogType = {isDogType} />

          <Link to={"/findMyPet"}>내 짝궁 찾기</Link>
        </SearchForm>
      </Wrap>
    </>
  )
}


const SearchForm = styled.form`
  background-color: var(--sub-color);
  padding: 20px;
  border-radius: 20px;
  strong {
    color: var(--content-color);
  }
  a {
    background-color: var(--action-color);
    color: var(--white-color);
    cursor: pointer;
    padding: 10px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 1.4rem;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`

const TypeSelect = styled.div`
  margin: 20px 0 40px;
  display: flex;
  gap: 20px;
  label {
    width: 100%;
    padding: 10px;
    font-size: 1.4rem;
    color: var(--content-color);
    border: 1px solid var(--content-color);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
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

`