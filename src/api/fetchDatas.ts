import { useFilterStore } from "../store/filterStore";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

async function fetchDatas({ page, path }: { page: number; path: string }) {
  // const filterState = useFilterStore((state) => state.filterState);

  const response = await fetch(
    `${API_URL}${path}?serviceKey=${API_KEY}&upkind=417000&upkind=422400&_type=json&numOfRows=20&pageNo=${page}`
  );

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json();
  const datas = fetchData?.response.body;

  return datas;
}

async function filterDatas({ path, sido }: { path: string; sido?: string }) {
  const response = await fetch(
    `${API_URL}${path}?serviceKey=${API_KEY}&upr_cd=${sido}&_type=json&numOfRows=1000`
  );

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const filterData = await response.json();
  const datas = filterData?.response.body;

  return datas;
}

export { fetchDatas, filterDatas };
