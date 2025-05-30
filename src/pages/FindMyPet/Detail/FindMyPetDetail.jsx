import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { usePetListStore } from "../../../store/UsePetListStore";
import Header from "../../../components/Header";
import { Wrap } from "../../../components/Common";
import styled from "styled-components";

export default function FindMyPetDetail() {
  const params = useParams();
  const loc = useLocation();
  const selectedPet = loc.state.selectedPet;
  const { petList, getPetListData } = usePetListStore();
  const [myPet, setMyPet] = useState([]);

  console.log(loc);
  console.log("상세 loc.state.pet", selectedPet);

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

  console.log(myPet);

  return (
    <>
      <Header />
      <DetailWrap>
        <Link to={"/findMyPet"} state={{ selectedPet }}>
          ◂ 다른 짝궁 찾기
        </Link>
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
                <td>{myPet.NEUT_YN === "Y" ? "예" : (myPet.NEUT_YN === "N" ? "아니요" : "알 수 없음") }</td>
              </tr>
              <tr>
                <th>발견위치</th>
                <td colSpan="3">{myPet.DISCVRY_PLC_INFO}</td>
              </tr>
              <tr>
                <td colSpan="4" className="map">
                  <h2>지도 들어갈 곳</h2>
                </td>
              </tr>
              <tr>
                <th>보호소</th>
                <td colSpan="3">{myPet.SHTER_NM}</td>
              </tr>
              <tr>
                <th>보호소 주소</th>
                <td colSpan="3">
                  지번: {myPet.REFINE_LOTNO_ADDR}<br />
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
                <td colSpan="3">{myPet.SPECIES_NM}</td>
              </tr>
            </tbody>
          </table>
        </InfoWrap>
      </DetailWrap>
    </>
  );
}

// ABDM_IDNTFY_NO : "441398202500295" -> 유기고유번호
// AGE_INFO : "2023(년생)" -> 나이
// BDWGH_INFO : "1.9(Kg)" -> 무게
// CHRGPSN_CONTCT_NO :  null -> 담당자연락처
// CHRGPSN_NM :  null -> 담당자
// COLOR_NM :  "흰색" -> 색상
// DISCVRY_PLC_INFO : "경기 구리시 교문동 600" -> 발견장소
// IMAGE_COURS : "http://www.animal.go.kr/files/shelter/2025/05/202505231805222.jpg"
// JURISD_INST_NM :  "경기도 구리시" -> 관할기관
// NEUT_YN :  "U" -> 중성화 여부 중성화여부 Y = 예, N = 아니오, U = 알수없음.
// PARTCLR_MATR :  null -> 특이사항
// PBLANC_BEGIN_DE :  "20250523" -> 공고 시작일자
// PBLANC_END_DE : "20250602" -> 공고 종료일자
// PBLANC_IDNTFY_NO :  "경기-구리-2025-00064" -> 공고 고유번호
// PROTECT_PLC :  "경기도 양주시 남면 감악산로 63-37" -> 보호 장소
// RECEPT_DE : "20250522" -> 접수 일자
// REFINE_LOTNO_ADDR :  "경기도 양주시 남면 상수리 410-1번지" -> 보호소 지번 주소
// REFINE_ROADNM_ADDR :  "경기도 양주시 남면 감악산로 63-37" -> 보호소 도로명 주소
// REFINE_WGS84_LAT :  "37.8701165776" -> 보호소 위도
// REFINE_WGS84_LOGT :  "126.9835493261" -> 보호소 경도
// REFINE_ZIP_CD :  "11409" -> 보호소 우편번호
// SEX_NM :  "F" -> 성별
// SFETR_INFO :  "활발함. 짖음. 분홍색 버클 목줄. 입 주변 갈색 털. 꼬리 단미 안됨. 털 상태 양호." -> 특징
// SHTER_NM :  "한국동물구조관리협회" -> 보호소 명
// SHTER_TELNO : "031-867-9119" -> 보호소 전화번호
// SIGUN_CD :  "41310" -> 시군코드
// SIGUN_NM :  "구리시" -> 시군명
// SPECIES_NM :  "[개] 말티즈" -> 품종
// STATE_NM :  "보호중" -> 상태
// THUMB_IMAGE_COURS :  "http://www.animal.go.kr/files/shelter/2025/05/202505231805222_s.jpg"

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
`

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
`