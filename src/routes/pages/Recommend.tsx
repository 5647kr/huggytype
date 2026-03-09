import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useQueries } from "@tanstack/react-query";
import fetchDatas from "../../api/fetchDatas";
import ContentItem from "../../components/ContentItem";
import Loading from "../../components/Loading";
import { useQueryHook } from "../../hook/useQueryHook";

const QUESTIONLIST = [
  {
    id: "Q1",
    title: "어떤 친구를 찾으시나요?",
    answer: [
      { id: "DOG", name: "강아지" },
      { id: "CAT", name: "고앙이" },
      { id: "all", name: "모두 좋아요" },
    ],
  },
  {
    id: "Q2",
    title: "살고 계신 주거 환경은 어떤가요?", // weight
    answer: [
      { id: "light", name: "아파트, 빌라" }, // weight 7kg 미만
      { id: "heavy", name: "단독주택, 마당" },
    ],
  },
  {
    id: "Q3",
    title: "보호자의 활동 성향은 어떤가요?",
    answer: [
      { id: "weak", name: "집에서 쉬는 게 좋아요" }, // age 5세 이상
      { id: "normal", name: "가벼운 산책을 즐겨요" },
      { id: "strong", name: "등산/러닝 등 격한 운동이 좋아요" },
    ],
  },
  {
    id: "Q4",
    title: "반려동물과 함께 보낼 수 있는 시간은?",
    answer: [
      { id: "all", name: "하루 종일 함께할 수 있어요" }, // 모든 연령
      { id: "old", name: "낮에는 비워두지만 퇴근 후엔 함께해요" }, // age 3세 이상
    ],
  },
  {
    id: "Q5",
    title: "청소 및 털 관리에 대해 어떻게 생각하시나요?",
    answer: [
      { id: "short", name: "털 빠짐이 적은 친구가 좋아요" },
      { id: "long", name: "털이 빠져도 괜찮아요 (부지런히 청소할게요!)" },
    ],
  },
  {
    id: "Q6",
    title: "살고 있는 지역을 선택해주세요",
    answer: [],
  },
];

const ANIMAL_BREED_DATABASE: DBType = {
  DOG: {
    light: [
      { id: "000072", title: "말티즈", img: "maltese" },
      { id: "000018", title: "비숑", img: "bichon" },
      { id: "000101", title: "시츄", img: "shihTzu" },
      { id: "000032", title: "치와와", img: "chihuahua" },
      { id: "000089", title: "포메라니안", img: "pomeranian" },
      { id: "000078", title: "미니어쳐 푸들", img: "poodle" },
      { id: "000074", title: "미디엄 푸들", img: "poodle" },
      { id: "000105", title: "스탠다드 푸들", img: "poodle" },
      { id: "000107", title: "토이 푸들", img: "poodle" },
      { id: "000113", title: "요크셔 테리어", img: "yorkshireTerrier" },
    ],
    heavy: [
      { id: "000054", title: "골든 리트리버", img: "retriever" },
      { id: "000108", title: "웰시코기", img: "welshCorgi" },
      { id: "000027", title: "불독", img: "bulldog" },
      { id: "000160", title: "아메리칸 불독", img: "bulldog" },
      { id: "000137", title: "올드 잉글리쉬 불독", img: "bulldog" },
      { id: "000050", title: "프렌치 불독", img: "bulldog" },
    ],
    weak: [
      { id: "000027", title: "불독", img: "bulldog" },
      { id: "000160", title: "아메리칸 불독", img: "bulldog" },
      { id: "000137", title: "올드 잉글리쉬 불독", img: "bulldog" },
      { id: "000050", title: "프렌치 불독", img: "bulldog" },
      { id: "000101", title: "시츄", img: "shihTzu" },
    ],
    normal: [
      { id: "000072", title: "말티즈", img: "maltese" },
      { id: "000078", title: "미니어쳐 푸들", img: "poodle" },
      { id: "000074", title: "미디엄 푸들", img: "poodle" },
      { id: "000105", title: "스탠다드 푸들", img: "poodle" },
      { id: "000107", title: "토이 푸들", img: "poodle" },
      { id: "000018", title: "비숑", img: "bichon" },
      { id: "000113", title: "요크셔 테리어", img: "yorkshireTerrier" },
      { id: "000032", title: "치와와", img: "chihuahua" },
      { id: "000089", title: "포메라니안", img: "pomeranian" },
    ],
    strong: [
      { id: "000054", title: "골든 리트리버", img: "retriever" },
      { id: "000108", title: "웰시코기", img: "welshCorgi" },
    ],
    short: [
      { id: "000078", title: "미니어쳐 푸들", img: "poodle" },
      { id: "000074", title: "미디엄 푸들", img: "poodle" },
      { id: "000105", title: "스탠다드 푸들", img: "poodle" },
      { id: "000107", title: "토이 푸들", img: "poodle" },
      { id: "000018", title: "비숑", img: "bichon" },
      { id: "000072", title: "말티즈", img: "maltese" },
      { id: "000113", title: "요크셔 테리어", img: "yorkshireTerrier" },
    ],
    long: [
      { id: "000054", title: "골든 리트리버", img: "retriever" },
      { id: "000108", title: "웰시코기", img: "welshCorgi" },
      { id: "000027", title: "불독", img: "bulldog" },
      { id: "000160", title: "아메리칸 불독", img: "bulldog" },
      { id: "000137", title: "올드 잉글리쉬 불독", img: "bulldog" },
      { id: "000050", title: "프렌치 불독", img: "bulldog" },
      { id: "000101", title: "시츄", img: "shihTzu" },
      { id: "000032", title: "치와와", img: "chihuahua" },
      { id: "000089", title: "포메라니안", img: "pomeranian" },
    ],
  },
  CAT: {
    light: [
      { id: "000172", title: "러시안 블루", img: "russianBlue" },
      { id: "000175", title: "먼치킨", img: "munchkin" },
      { id: "000184", title: "샴", img: "siamese" },
      { id: "000188", title: "스코티시폴드", img: "scottishFold" },
      { id: "00214", title: "페르시안", img: "persian" },
      { id: "000197", title: "페르시안 친칠라", img: "persian" },
    ],
    heavy: [
      { id: "000176", title: "메인쿤", img: "maineCoon" },
      { id: "000179", title: "벵갈", img: "bengal" },
      { id: "000193", title: "아비시니안", img: "abyssinian" },
      { id: "000195", title: "터키시 앙고라", img: "turkishAngora" },
    ],
    weak: [
      { id: "00214", title: "페르시안", img: "persian" },
      { id: "000197", title: "페르시안 친칠라", img: "persian" },
      { id: "000181", title: "브리티시 쇼트헤어", img: "britishShorthair" },
    ],
    normal: [
      { id: "000172", title: "러시안 블루", img: "russianBlue" },
      { id: "000175", title: "먼치킨", img: "munchkin" },
      { id: "000184", title: "샴", img: "siamese" },
      { id: "000188", title: "스코티시폴드", img: "scottishFold" },
    ],
    strong: [
      { id: "000179", title: "벵갈", img: "bengal" },
      { id: "000193", title: "아비시니안", img: "abyssinian" },
      { id: "000195", title: "터키시 앙고라", img: "turkishAngora" },
    ],
    short: [
      { id: "000172", title: "러시안 블루", img: "russianBlue" },
      { id: "000184", title: "샴", img: "siamese" },
      { id: "000193", title: "아비시니안", img: "abyssinian" },
    ],
    long: [
      { id: "000175", title: "먼치킨", img: "munchkin" },
      { id: "000176", title: "메인쿤", img: "maineCoon" },
      { id: "000179", title: "벵갈", img: "bengal" },
      { id: "000181", title: "브리티시 쇼트헤어", img: "britishShorthair" },
      { id: "000188", title: "스코티시폴드", img: "scottishFold" },
      { id: "000195", title: "터키시 앙고라", img: "turkishAngora" },
      { id: "00214", title: "페르시안", img: "persian" },
      { id: "000197", title: "페르시안 친칠라", img: "persian" },
    ],
  },
};

interface Breed {
  id: string;
  title: string;
  img: string;
}

interface BreedTraits {
  [key: string]: Breed[];
}

interface DBType {
  DOG: BreedTraits;
  CAT: BreedTraits;
  [key: string]: BreedTraits;
}

interface petRecommandType {
  type: string;
  selected: string[];
}

export default function Recommend() {
  const navigate = useNavigate();
  const [testStart, setTestStart] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [isTimeOut, setIsTimeOut] = useState(false);
  const [resultPage, setResultPage] = useState(false);
  const [selectedSido, setSelectedSido] = useState("none");
  const [selectedSigungu, setSelectedSigungu] = useState("none");

  const [petRecommand, setPetRecommand] = useState<petRecommandType>({
    type: "",
    selected: [],
  });
  const [finalBreeds, setFinalBreeds] = useState<{
    breedIds: string[];
    selected: string[];
  } | null>(null);

  const { data: sido } = useQueryHook({
    key: ["sido"],
    path: "sido_v2",
    page: 1,
    pageNum: 100,
  });

  const { data: sigungu } = useQueryHook({
    key: ["sigungu", selectedSido],
    path: "sigungu_v2",
    page: 1,
    pageNum: 1000,
    sido: selectedSido,
    enabled: selectedSido !== "none",
  });

  const sidoContent = sido?.items.item;
  const sigunguContent = sigungu?.items.item;

  useEffect(() => {
    if (questionNum === QUESTIONLIST.length) {
      setTestDone(true);
    }
  }, [questionNum]);

  const handleSelectAnswer = (id: string) => {
    if (questionNum !== 3) {
      setPetRecommand((prev) => ({
        ...prev,

        type: questionNum === 0 ? id : prev.type,
        selected: questionNum > 0 ? [...prev.selected, id] : prev.selected,
      }));
    }

    setQuestionNum((prev) => prev + 1);
  };

  useEffect(() => {
    setIsTimeOut(false);

    if (testDone) {
      const timer = setTimeout(() => {
        setIsTimeOut(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [testDone]);

  const getFinalBreedIds = () => {
    const { type, selected } = petRecommand;

    const breedTypes = type === "all" ? ["DOG", "CAT"] : [type];

    let selectBreed: Breed[] = [];

    breedTypes.forEach((breed) => {
      const data = ANIMAL_BREED_DATABASE[breed];

      // 품종
      selected.map((item) => {
        const selectedBreed = data[item];
        selectBreed = [...selectBreed, ...selectedBreed];
      });
    });

    const finalBreed = Array.from(
      new Map(selectBreed.map((item) => [item.id, item])).values()
    );

    return finalBreed;
  };

  const finalBreedIds = useMemo(() => {
    if (!testDone) return [];
    const result = getFinalBreedIds();
    return result;
  }, [testDone]);

  // 테스트 결과 데이터 병합
  const handleGetFinalBreed = () => {
    const data = {
      breedIds: finalBreedIds.map((item) => item.id),
      selected: petRecommand.selected,
    };

    setFinalBreeds(data);
    setResultPage(true);
  };

  // 추천 동물 api 통신
  const breedResults = useQueries({
    queries: (finalBreeds?.breedIds || []).map((id) => ({
      queryKey: ["recommendAnimal", id, selectedSido, selectedSigungu],
      queryFn: () =>
        fetchDatas({
          path: "abandonmentPublic_v2",
          page: 1,
          pageNum: 20,
          breedIds: id,
          selectedSido: selectedSido,
          selectedSigungu: selectedSigungu,
        }),
      enabled: !!finalBreeds, // 결과 버튼을 눌렀을 때만 실행
      staleTime: 1000 * 60 * 30,
    })),
  });

  console.log(selectedSido);

  // 전체 로딩 완료
  const isAllLoading = breedResults.some((result) => result.isLoading);

  // 2. 모든 데이터가 준비되었을 때만 합치기
  const recommendedAnimals = !isAllLoading
    ? breedResults
        .flatMap((result) => result.data?.items?.item || [])
        .filter(Boolean)
    : [];

  // 3. (추가) 만약 나이 필터가 필요하다면 여기서 한 번 더 정제
  const filteredAnimals = recommendedAnimals.filter((animal) => {
    if (finalBreeds?.selected.some((s) => ["weak", "old"].includes(s))) {
      const targetYear = new Date().getFullYear() - 3;
      const birthYear = parseInt(animal.age.match(/\d{4}/)?.[0] || "9999");
      return birthYear <= targetYear;
    }
    return true;
  });

  return (
    <>
      <section className="col-span-full sm:col-[2/8] lg:col-[3/11] h-[calc(100vh-111px)]">
        {!testStart && (
          <div className="text-center text-[#CC8E6B] flex flex-col h-full justify-center items-center">
            <h1 className="text-xl font-bold mb-2.5">
              초보 집사님, 인생의 반려동물을 찾기 어려우신가요?
            </h1>
            <strong>데이터를 기반으로 도와드리겠습니다.</strong>

            <div className="mt-10 flex justify-center gap-10">
              <button
                onClick={() => navigate(-1)}
                className="bg-white w-100 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer"
              >
                이전 페이지로 돌아가기
              </button>
              <button
                onClick={() => setTestStart(true)}
                className="bg-[#CC8E6B] w-100 text-white rounded-[10px] border border-[#E3C9A6] p-2.5 cursor-pointer"
              >
                시작하기
              </button>
            </div>
          </div>
        )}

        {testStart && !testDone && (
          <div className="h-full flex justify-center items-center">
            <div className="flex flex-col gap-10 w-full">
              <div>
                <progress
                  className="h-4 w-full overflow-hidden rounded-[10px] appearance-none
                  [&::-webkit-progress-bar]:bg-[#E3C9A6]
                    [&::-webkit-progress-bar]:border
                    [&::-webkit-progress-bar]:rounded-[10px]
                  [&::-webkit-progress-bar]:border-[#E3C9A6]
                  [&::-webkit-progress-value]:bg-[#CC8E6B]"
                  max={QUESTIONLIST.length}
                  value={questionNum}
                />
                <strong className="block text-center text-[#CC8E6B]">
                  {questionNum} / {QUESTIONLIST.length}
                </strong>
              </div>
              <div className="w-full aspect-[1/0.3] rounded-[10px] border border-[#E3C9A6] flex justify-center items-center">
                <h2 className="text-lg font-bold text-[#CC8E6B]">
                  {QUESTIONLIST[questionNum]?.title}
                </h2>
              </div>
              {questionNum !== 5 ? (
                <div className="flex flex-wrap justify-center gap-2.5">
                  {QUESTIONLIST[questionNum]?.answer.map((item) => (
                    <button
                      key={item.id}
                      className="bg-white w-80 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer hover:bg-[#CC8E6B] hover:text-white"
                      onClick={() => handleSelectAnswer(item.id)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <div className="flex gap-5 justify-center text-[#CC8E6B]">
                    <div className="flex gap-5 items-center">
                      <h2 className="text-lg font-semibold">시도</h2>
                      <select
                        name="sido"
                        id="sido"
                        value={selectedSido}
                        onChange={(e) => setSelectedSido(e.target.value)}
                        className="focus:outline-0 text-base"
                      >
                        <option value="none">전체</option>
                        {sidoContent?.map(
                          (item: { orgCd: string; orgdownNm: string }) => (
                            <option key={item.orgCd} value={item.orgCd}>
                              {item.orgdownNm}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    <div className="flex gap-5 items-center">
                      <h2 className="text-lg font-semibold">시군구</h2>
                      <select
                        name="sigungu"
                        id="sigungu"
                        value={selectedSigungu}
                        onChange={(e) => setSelectedSigungu(e.target.value)}
                        className="focus:outline-0 text-base"
                      >
                        <option value="none">전체</option>
                        {sigunguContent?.map(
                          (item: { orgCd: string; orgdownNm: string }) => (
                            <option key={item.orgCd} value={item.orgCd}>
                              {item.orgdownNm}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <button
                    className="bg-white w-80 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer hover:bg-[#CC8E6B] hover:text-white mx-auto"
                    onClick={() => setQuestionNum((prev) => prev + 1)}
                  >
                    테스트 완료
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {testDone && !isTimeOut && (
          <div className="h-full flex justify-center items-center">
            <h2 className="text-[#CC8E6B] font-bold text-xl animate-bounce">
              적합한 품종을 찾고 있어요..
            </h2>
          </div>
        )}

        {testDone && isTimeOut && !resultPage && (
          <>
            <div className="h-full flex flex-col justify-center text-[#CC8E6B]">
              <h2 className="text-center text-xl font-bold mb-10">
                추천 품종은...
              </h2>
              <ul className="flex gap-5 flex-wrap">
                {finalBreedIds.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-center items-center flex-col gap-2.5 rounded-[10px] border border-[#E3C9A6] p-2.5"
                  >
                    <img
                      src={`./img/${item.img}.webp`}
                      alt={item.title}
                      className="w-20"
                    />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>

              {/* 추천 업데이트 */}
              <div></div>

              <div className="flex mt-10 justify-center gap-5">
                <button
                  onClick={() => {
                    setTestDone(false);
                    setTestStart(false);
                    setQuestionNum(0);
                    setSelectedSido("none");
                    setSelectedSigungu("none");
                  }}
                  className="bg-white w-80 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer hover:bg-[#CC8E6B] hover:text-white"
                >
                  다시 테스트 하기
                </button>
                <button
                  onClick={handleGetFinalBreed}
                  className="bg-white w-80 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer hover:bg-[#CC8E6B] hover:text-white"
                >
                  추천 품종으로 구조 동물 찾기
                </button>
              </div>
            </div>
          </>
        )}

        {testDone && resultPage && (
          <div>
            {isAllLoading ? (
              <div className="min-h-[calc(100vh-111px)] col-span-full flex justify-center items-center">
                <Loading />
              </div>
            ) : (
              <>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5 py-10">
                  {filteredAnimals.map((item) => (
                    <li key={item.desertionNo}>
                      <Link to={`/detail/${item.desertionNo}`}>
                        <ContentItem {...item} />
                      </Link>
                    </li>
                  ))}
                </ul>
                {filteredAnimals.length === 0 && finalBreeds && (
                  <>
                    <p className="col-span-full text-center text-[#CC8E6B]">
                      현재 조건에 맞는 친구들이 보호소에 없네요. 😢
                    </p>
                    <button
                      onClick={() => {
                        setTestDone(false);
                        setTestStart(false);
                        setQuestionNum(0);
                        setSelectedSido("none");
                        setSelectedSigungu("none");
                      }}
                    >
                      이전으로 돌아가기
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </section>
    </>
  );
}
