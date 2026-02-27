import { useParams } from "react-router";
import { useQueryHook } from "../../hook/useQueryHook";

export default function Detail() {
  const { id } = useParams();

  const { data, isLoading } = useQueryHook({
    key: ["contentData"],
    path: "abandonmentPublic_v2",
    page: 1,
    pageNum: 1,
    id: id,
  });

  const content = data?.items.item[0] || [];

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-91px)] flex justify-center items-center">
        <strong>데이터 불러오는 중...</strong>
      </div>
    );
  }

  console.log(content);

  // age: "2025(년생)";
  // careAddr: "강원특별자치도 인제군 인제읍 덕산로 256-41  ";
  // careNm: "인제군동물보호센터";
  // careOwnerNm: "유통축산과장";
  // careRegNo: "342433201300001";
  // careTel: "033-460-2473";
  // colorCd: "금갈색";
  // desertionNo: "442433202600095";
  // happenDt: "20260227";
  // happenPlace: "서흥리";
  // kindCd: "000114";
  // kindFullNm: "[개] 믹스견";
  // kindNm: "믹스견";
  // neuterYn: "N";
  // noticeEdt: "20260226";
  // noticeNo: "강원-인제-2026-00094";
  // noticeSdt: "20260226";
  // orgNm: "강원특별자치도 인제군";
  // popfile1: "http://openapi.animal.go.kr/openapi/service/rest/fileDownloadSrvc/files/shelter/2026/02/20260227140261.jpg";
  // popfile2: "http://openapi.animal.go.kr/openapi/service/rest/fileDownloadSrvc/files/shelter/2026/02/202602271402489.jpg";
  // processState: "보호중";
  // sexCd: "F";
  // specialMark: "피부병";
  // upKindCd: "417000";
  // upKindNm: "개";
  // updTm: "2026-02-27 14:24:35.0";
  // weight: "3(Kg)";

  return (
    <section className="bg-[#d9d9d9]">
      <div className="bg-white pt-25 pb-5">
        <h1 className="mb-5">{content.careNm}</h1>
        <img src={content.popfile2} alt={content.noticeNo} />
      </div>
      <div className="border-y border-[#E3C9A6] py-5 bg-white">
        <h2>{content.kindFullNm}</h2>
        <p>
          {content.sexCd} / {content.colorCd} / {content.age} / {content.weight}
          / {content.neuterYn}
        </p>
      </div>
      <div className="py-5 bg-white">
        <p>공고번호: {content.noticeNo}</p>
        <p>
          공고기간: {content.noticeSdt} ~ {content.noticeEdt}
        </p>
        <p>발견장소: {content.happenPlace}</p>
        <p>특징: {content.specialMark}</p>
        <p>
          보호센터: {content.careNm}, {content.careTel}
        </p>
        <p>보호센터 주소: {content.careAddr}</p>
        <p>관할기관: {content.orgNm}</p>
        <p>축종명: {content.kindNm}</p>
      </div>
    </section>
  );
}
