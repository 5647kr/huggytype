export default async function fetchDatas({ page }: { page: number }) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(
    `${API_URL}?serviceKey=${API_KEY}&upkind=417000&upkind=422400&_type=json&numOfRows=20&pageNo=${page}`
  );

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json();
  const datas = fetchData?.response.body;

  console.log(datas);

  return datas;
}
