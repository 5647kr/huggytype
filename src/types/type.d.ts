interface ContentData {
  age: string; // 나이 v
  careAddr: string; // 보호 장소 v
  careNm: string; // 보호소 이름 v
  careOwnerNm: string; // 보호소 대표자 v
  careRegNo: string; // 보호소 번호(연락처 아님) v
  careTel: string; // 보호소 연락처 v
  colorCd: string; // 색상 v
  desertionNo: string; // 구조번호 v
  happenDt: string; // 접수일 v
  happenPlace: string; // 발견장소 v
  kindCd: string; // 품종 코드 v
  kindFullNm: string; // 품종 v
  kindNm: string; // 품종명 v
  neuterYn: string; // 중성화 v
  noticeEdt: string; // 공고종료일 v
  noticeNo: string; // 공고번호 v
  noticeSdt: string; // 공고시작일 v
  orgNm: string; // 관할기간 v
  popfile1: string; // 이미지 v
  popfile2: string; // 이미지 v
  processState: string; // 상태(보호중 등등) v
  rfidCd: string; // 동물등록번호 x
  sexCd: string; // 성별 v
  specialMark: string; // 특징 v
  upKindCd: string; // 개, 고양이 기타 코드 v
  upKindNm: string; // 축종명 v
  updTm: string; // 수정일 v
  vaccinationChk: string; // 백신 접종 여부 x
  weight: string; // 무게 v
}

interface FilterState {
  sex: string;
  sido: string;
  sigungu: string;
  state: string;
  type: string;
}

interface PublicApiResponse {
  items: {
    item: AbandonedAnimal[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
