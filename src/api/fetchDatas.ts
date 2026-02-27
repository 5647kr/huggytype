const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default async function fetchDatas({
  page,
  path,
  pageNum,
  sido,
  id,
  applyFilter,
}: {
  page: number;
  path: string;
  pageNum?: number;
  sido?: string;
  id?: string;
  applyFilter?: FilterState;
}) {
  // 품종코드: 개, 고양이, 기타 = upKind / kind
  // 시도코드: 경기도, 서울특별시, ... = upr_cd / sido
  // 시군구코드: 수원시, 용인시, 강남구, ... = org_cd; / sigungu
  // 상태코드: 보호중, 공고중, ... = state / state
  // 성별코드: 수컷, 암컷, ... = sex_cd / sex
  // 상세보기를 위한 데이터 코드 하나 = notice_no / id
  console.log(sido);
  console.log(applyFilter);

  const BASE_URL = `${API_URL}${path}?serviceKey=${API_KEY}&_type=json&numOfRows=${pageNum}&pageNo=${page}`;
  const url = new URL(BASE_URL);

  if (sido) {
    url.searchParams.append("upr_cd", sido);
  }

  console.log(id);
  if (id) {
    url.searchParams.append("desertion_no", id);
  }

  if (applyFilter) {
    if (applyFilter.sido !== "none")
      url.searchParams.append("upr_cd", applyFilter.sido);
    if (applyFilter.sigungu)
      url.searchParams.append("org_cd", applyFilter.sigungu);
    if (applyFilter.type !== "all")
      url.searchParams.append("upkind", applyFilter.type);
    if (applyFilter.state !== "all")
      url.searchParams.append("state", applyFilter.state);
  }

  console.log(url.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json();

  return fetchData?.response?.body || { items: { item: [] }, totalCount: 0 };
}
