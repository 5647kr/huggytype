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
  const BASE_URL = `${API_URL}${path}?serviceKey=${API_KEY}&_type=json&numOfRows=${pageNum}&pageNo=${page}`;
  const url = new URL(BASE_URL);

  if (sido) {
    url.searchParams.append("upr_cd", sido);
  }

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

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json();

  return fetchData?.response?.body || { items: { item: [] }, totalCount: 0 };
}
