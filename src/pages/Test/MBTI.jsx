import React, { useState } from 'react'
import Test from './Test';
import Result from './Result';
import Header from '../../components/Header';
import { Wrap } from '../../components/Common';


export default function MBTI() {
  const [mbti, setMbti] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <Header />
      <Wrap>
        {done ? <Result mbti={mbti} done={done} setDone={setDone} /> : <Test mbti={mbti} setMbti={setMbti} done={done} setDone={setDone}/>}
      </Wrap>
    </>
  )
}
