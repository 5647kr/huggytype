import { useQuery } from "@tanstack/react-query";
import fetchDatas from "../../api/fetchDatas";

export default function Home() {
  // 데이터 통신 예제코드
  const { data, isLoading, error } = useQuery({
    queryKey: ["datas"],
    queryFn: () => fetchDatas(),
    select: (data) =>
      data.map((item: Datas) => ({
        AGE_INFO: item.AGE_INFO,
        BDWGH_INFO: item.BDWGH_INFO,
        SEX_NM: item.SEX_NM,
        PBLANC_IDNTFY_NO: item.PBLANC_IDNTFY_NO,
      })),
  });

  console.log(data);
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <h1>Home Component</h1>
    </div>
  );
}
