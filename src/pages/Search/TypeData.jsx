import React from 'react'
import styled from 'styled-components'



export default function TypeData(props) {
  function clickItem(e) {
    props.setIsClicked(true)
    props.setPetType(e.target.textContent)
  }

  return (
    <TypeSelect>
      {props.isDogType ? (
        <ul>
          {dogType.map((item) => {
            return (
              <li key={item.id}>
                <input type="radio" id={item.title} name='dogType'/>
                <label htmlFor={item.title} onClick={(e) => {clickItem(e)}}>{item.title}</label>
              </li>
            )
          })}
        </ul>
      ) : (
        <ul>
          {catType.map((item) => {
            return (
              <li key={item.id}>
                <input type="radio" id={item.title} name='catType'/>
                <label htmlFor={item.title} onClick={(e) => {clickItem(e)}}>{item.title}</label>
              </li>
            )
          })}
        </ul>
      )}
    </TypeSelect>
  )
}

const dogType = [
  {id: "dog1", title: "골든 리트리버"},
  {id: "dog2", title: "말티즈"},
  {id: "dog3", title: "불도그"},
  {id: "dog4", title: "비숑"},
  {id: "dog5", title: "시츄"},
  {id: "dog6", title: "요크셔 테리어"},
  {id: "dog7", title: "웰시 코기"},
  {id: "dog8", title: "치와와"},
  {id: "dog9", title: "포메라니안"},
  {id: "dog10", title: "푸들"},
]

const catType = [
  {id: "cat1", title: "노르웨이 숲고양이"},
  {id: "cat2", title: "러시안 블루"},
  {id: "cat3", title: "먼치킨"},
  {id: "cat4", title: "메인쿤"},
  {id: "cat5", title: "벵갈"},
  {id: "cat6", title: "브리티시 쇼트헤어"},
  {id: "cat7", title: "샴"},
  {id: "cat8", title: "스코티시 폴드"},
  {id: "cat9", title: "코리안 숏헤어"},
  {id: "cat10", title: "페르시안"},
]

const TypeSelect = styled.div`
  width: 100%;
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