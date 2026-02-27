interface ContentData {
  age: string; // 나이 v
  careAddr: string; // 보호 장소 v
  careNm: string; // 보호소 이름 v
  careOwnerNm: string; // 보호소 대표자
  careRegNo: string; // 보호소 번호(연락처 아님)
  careTel: string; // 보호소 연락처 v
  colorCd: string; // 색상 v
  desertionNo: string; // 구조번호
  happenDt: string; // 접수일
  happenPlace: string; // 발견장소 v
  kindCd: string; // 품종 코드
  kindFullNm: string; // 품종
  kindNm: string; // 품종명
  neuterYn: string; // 중성화 v
  noticeEdt: string; // 공고종료일 v
  noticeNo: string; // 공고번호 v
  noticeSdt: string; // 공고시작일 v
  orgNm: string; // 관할기간 v
  popfile1: string; // 이미지 v
  popfile2: string; // 이미지 v
  processState: string; // 상태(보호중 등등) x
  rfidCd: string; // 동물등록번호
  sexCd: string; // 성별 v
  specialMark: string; // 특징 v
  upKindCd: string; // 개, 고양이 기타 코드
  upKindNm: string; // 축종명
  updTm: string; // 수정일
  vaccinationChk: string; // 백신 접종 여부
  weight: string; // 무게 v
}

interface FilterState {
  sex: string;
  sido: string;
  sigungu: string;
  state: string;
  type: string;
}
