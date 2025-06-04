import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { usePetListStore } from "../../../store/UsePetListStore";
import Header from "../../../components/Header";
import { Wrap } from "../../../components/Common";
import styled from "styled-components";
import KakakoMap from "../../../components/KakakoMap";

export default function FindMyPetDetail() {
  const params = useParams();
  const loc = useLocation();
  const selectedPet = loc.state.selectedPet;
  const { petList, getPetListData } = usePetListStore();
  const [myPet, setMyPet] = useState(null);

  useEffect(() => {
    if (petList.length === 0) {
      getPetListData(selectedPet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (params.id && petList.length > 0) {
      const found = petList.find((item) => item.ABDM_IDNTFY_NO === params.id);
      setMyPet(found || null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petList]);


  return (
    <>
      <Header />
      <DetailWrap>
        <Link to={"/findMyPet"} state={{ selectedPet }}>
          ◂ 다른 짝궁 찾기
        </Link>
        {myPet ? (
          // 데이터가 다 있을 때
          <>
            <img src={myPet.IMAGE_COURS} alt={myPet.SPECIES_NM} />
            <InfoWrap>
              <table>
                <tbody>
                  <tr>
                    <th>나이</th>
                    <td>{myPet.AGE_INFO}</td>
                    <th>무게</th>
                    <td>{myPet.BDWGH_INFO}</td>
                  </tr>
                  <tr>
                    <th>색상</th>
                    <td>{myPet.COLOR_NM}</td>
                    <th>중성화 여부</th>
                    <td>
                      {myPet.NEUT_YN === "Y"
                        ? "예"
                        : myPet.NEUT_YN === "N"
                        ? "아니요"
                        : "알 수 없음"}
                    </td>
                  </tr>
                  <tr>
                    <th>발견위치</th>
                    <td colSpan="3">{myPet.DISCVRY_PLC_INFO}</td>
                  </tr>
                  <tr>
                    <td colSpan="4" className="map">
                      <KakakoMap
                        lat={myPet.REFINE_WGS84_LAT}
                        lng={myPet.REFINE_WGS84_LOGT}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>보호소</th>
                    <td colSpan="3">{myPet.SHTER_NM}</td>
                  </tr>
                  <tr>
                    <th>보호소 주소</th>
                    <td colSpan="3">
                      지번: {myPet.REFINE_LOTNO_ADDR}
                      <br />
                      도로명: {myPet.REFINE_ROADNM_ADDR}
                    </td>
                  </tr>
                  <tr>
                    <th>보호소 연락처</th>
                    <td colSpan="3">{myPet.SHTER_TELNO}</td>
                  </tr>
                  <tr>
                    <th>특징</th>
                    <td colSpan="3">{myPet.SFETR_INFO}</td>
                  </tr>
                  <tr>
                    <th>품종</th>
                    <td colSpan="3">{myPet.SPECIES_NM?.split(" ")[1]}</td>
                  </tr>
                </tbody>
              </table>
            </InfoWrap>
          </>
        ) : (
          // 데이터가 없을때
          <>
            <LoadingImg>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/loading.webp`}
                alt="나의 펫 사진 불러오는 중"
              />
            </LoadingImg>
            <LoadingBox />
          </>
        )}
      </DetailWrap>
    </>
  );
}

const DetailWrap = styled(Wrap)`
  margin-top: 0;
  height: calc(100vh - 80px);
  & > a {
    background-color: transparent;
    color: var(--content-color);
    box-shadow: none;
    margin: 0;
    padding: 0;
    width: fit-content;
  }

  & > a:active {
    box-shadow: none;
  }

  & > img {
    width: 200px;
    display: block;
    border-radius: 20px;
    aspect-ratio: 1 / 1;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
    margin: 20px auto 40px;
  }
`;

const InfoWrap = styled.div`
  background-color: var(--sub-color);
  table {
    border-collapse: collapse;
    width: 100%;
  }
  table tbody tr {
    border: 2px solid var(--bg-color);
  }
  table tbody th,
  table tbody td {
    padding: 10px;
    font-size: 1.2rem;
    color: var(--content-color);
  }
  table tbody th {
    border-right: 1px solid var(--bg-color);
    border-left: 2px solid var(--bg-color);
    font-size: 1.3rem;
    width: 100px;
  }

  table tbody .map {
    padding: 0;
  }
`;

const LoadingImg = styled.div`
  width: 200px;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px auto 40px;
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 450px;
  background-color: var(--sub-color);
`;
