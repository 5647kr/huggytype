import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { Wrap } from "../../components/Common";

export default function FindMyPet() {
  const loc = useLocation();
  const [myPet, setMyPet] = useState("");

  useEffect(() => {
    if (loc.state) {
      if (loc.state.resultItem && loc.state.resultItem[0]?.animals) {
        setMyPet(loc.state.resultItem[0].animals);
      } else if (loc.state.petType) {
        setMyPet(loc.state.petType);
      }
    }
  }, [loc.state]); // loc.state가 바뀔 때만 실행

  console.log("myPet: ", myPet);

  //*
  // 1. search로 얻어온 값으로 api통신
  // 2. mbti로 얻어온 값으로  api 통신
  // */

  return (
    <>
      <Header />
      <Wrap></Wrap>
    </>
  );
}
