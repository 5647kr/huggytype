const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default async function fetchDatas({
  page,
  path,
  pageNum,
  sido,
  type,
  id,
  applyFilter,
  breedIds,
  selectedSido,
  selectedSigungu,
}: {
  page: number;
  path: string;
  pageNum?: number;
  sido?: string;
  type?: string;
  id?: string;
  applyFilter?: FilterState;
  breedIds?: string;
  selectedSido?: string | undefined;
  selectedSigungu?: string | undefined;
}) {
  const BASE_URL = `${API_URL}${path}?serviceKey=${API_KEY}&_type=json&numOfRows=${pageNum}&pageNo=${page}`;
  const url = new URL(BASE_URL);

  console.log(selectedSido);
  console.log(selectedSigungu);

  if (sido) {
    url.searchParams.append("upr_cd", sido);
  }

  if (type) {
    url.searchParams.append("up_kind_cd", type);
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

  if (breedIds) {
    url.searchParams.append("kind", breedIds);

    if (selectedSido) {
      if (selectedSido !== "none") {
        url.searchParams.append("upr_cd", selectedSido);
      }
    }
    if (selectedSigungu) {
      if (selectedSigungu !== "none") {
        url.searchParams.append("org_cd", selectedSigungu);
      }
    }
  }

  console.log(url.toString());

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json();

  return fetchData?.response?.body || { items: { item: [] }, totalCount: 0 };
}
