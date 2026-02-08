export default async function fetchDatas() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const response = await fetch(`${API_URL}?key=${API_KEY}&type=json&pSize=20`);

  if (!response.ok) {
    throw new Error("fetch 실패");
  }

  const fetchData = await response.json()
  const datas = fetchData?.AbdmAnimalProtect[1]?.row

  return datas;
}
