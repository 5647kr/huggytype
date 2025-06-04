import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { Title, Wrap } from "../../components/Common";
import { usePetListStore } from "../../store/UsePetListStore";

export default function FindMyPet() {
  const loc = useLocation();
  const selectedPet = loc.state.selectedPet;

  const { petList, getPetListData } = usePetListStore();

  useEffect(() => {
    if (selectedPet.length > 0) {
      getPetListData(selectedPet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPet]);

  const baseImg = `${process.env.PUBLIC_URL}/assets/img/`;
  const dogImg = baseImg + selectedPet[0].replace(" ", "_") + ".webp";
  const catImg = baseImg + selectedPet[1].replace(" ", "_") + ".webp";

  return (
    <>
      <Header />
      <Wrap>
        {petList.length > 0 ? (
          <>
            <CenterTitle>나의 짝궁</CenterTitle>
            <LinkWrap>
              <Link to={"/search"}>MBTI 변경하기</Link>
              <Link to={"/test"}>MBTI 테스트 하기</Link>
            </LinkWrap>
            <PetList>
              {petList.map((pet, index) => (
                <li key={pet.ABDM_IDNTFY_NO}>
                  <Link
                    to={`/findMyPet/${pet.ABDM_IDNTFY_NO}`}
                    state={{
                      selectedPet
                    }}
                  >
                    <ImgWrap>
                      {pet.SPECIES_NM.split(" ")[0] === "[개]" ? (
                        <img src={dogImg} alt={pet.SPECIES_NM.split("] ")[1]} />
                      ) : (
                        <img src={catImg} alt={pet.SPECIES_NM.split("] ")[1]} />
                      )}
                    </ImgWrap>
                    <ContentWrap>
                      <h2>
                        {index + 1}. {pet.SPECIES_NM.split("] ")[1]}
                      </h2>
                      <p>{pet.SHTER_NM}</p>
                      <PetInfo>
                        <li>{pet.AGE_INFO}</li>
                        <li>{pet.SEX_NM === "F" ? "암컷" : "수컷"}</li>
                        <li>{pet.COLOR_NM}</li>
                      </PetInfo>
                    </ContentWrap>
                  </Link>
                </li>
              ))}
            </PetList>
          </>
        ) : (
          <>
            <LoadingWrap>
              <strong>
                <span>짝</span>
                <span>궁</span>
                <span>&nbsp;</span>
                <span>찾</span>
                <span>는 </span>
                <span>&nbsp;</span>
                <span>중</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </strong>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/loading.webp`}
                alt="로딩중"
              />
            </LoadingWrap>
          </>
        )}
      </Wrap>
    </>
  );
}

const CenterTitle = styled(Title)`
  text-align: center;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0 40px;
`;

const PetList = styled.ul`
  & > li {
    background-color: var(--sub-color);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  & > li:not(:last-child) {
    margin-bottom: 20px;
  }
  a {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    padding: 10px 0;
    color: var(--content-color);
    display: flex;
  }
`;

const ImgWrap = styled.div`
  img {
    width: 100px;
    vertical-align: top;
  }
`;

const ContentWrap = styled.div`
  flex-grow: 1;
  text-align: left;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 1.8rem;
    color: var(--main-color);
  }
  p {
    font-size: 1.2rem;
  }
`;

const PetInfo = styled.ul`
  display: flex;
  gap: 6px;
  li {
    background-color: var(--action-color);
    color: var(--white-color);
    padding: 4px;
    margin-bottom: 0;
    font-size: 1rem;
    border-radius: 4px;
  }
`;

const LoadingWrap = styled.div`
  margin-top: 200px;
  strong {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--content-color);
    display: block;
  }
  span {
    animation: wave 0.5s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes wave {
    0%,
    40%,
    100% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  span:nth-child(1) {
    animation-delay: 0.1s;
  }
  span:nth-child(2) {
    animation-delay: 0.13s;
  }
  span:nth-child(3) {
    animation-delay: 0.16s;
  }
  span:nth-child(4) {
    animation-delay: 0.19s;
  }
  span:nth-child(5) {
    animation-delay: 0.22s;
  }
  span:nth-child(6) {
    animation-delay: 0.25s;
  }
  span:nth-child(7) {
    animation-delay: 0.28s;
  }
  span:nth-child(8) {
    animation-delay: 0.31s;
  }
  span:nth-child(9) {
    animation-delay: 0.34s;
  }
  span:nth-child(10) {
    animation-delay: 0.37s;
  }
`;
