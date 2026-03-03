import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const QUESTIONLIST = [
  {
    id: "Q1",
    title: "어떤 친구를 찾으시나요?",
    answer: [
      { id: "417000", name: "강아지" },
      { id: "422400", name: "고앙이" },
      { id: "null", name: "모두 좋아요" },
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
];

const ANIMAL_BREED_DATABASE = {
  DOG: {
    light: [
      { id: "000072", title: "말티즈" },
      { id: "000018", title: "비숑" },
      { id: "000101", title: "시츄" },
      { id: "000032", title: "치와와" },
      { id: "000089", title: "포메라니안" },
      { id: "000078", title: "푸들" },
      { id: "000074", title: "푸들" },
      { id: "000105", title: "푸들" },
      { id: "000107", title: "푸들" },
      { id: "000113", title: "요크셔 테리어" },
    ],
    heavy: [
      { id: "000054", title: "골든 리트리버" },
      { id: "000108", title: "웰시코기" },
      { id: "000027", title: "불독" },
    ],
    weak: [
      { id: "000027", title: "불독" },
      { id: "000101", title: "시츄" },
    ],
    normal: [
      { id: "000072", title: "말티즈" },
      { id: "000078", title: "푸들" },
      { id: "000074", title: "푸들" },
      { id: "000105", title: "푸들" },
      { id: "000107", title: "푸들" },
      { id: "000018", title: "비숑" },
      { id: "000113", title: "요크셔 테리어" },
      { id: "000032", title: "치와와" },
      { id: "000089", title: "포메라니안" },
    ],
    strong: [
      { id: "000054", title: "골든 리트리버" },
      { id: "000108", title: "웰시코기" },
    ],
    short: [
      { id: "000078", title: "푸들" },
      { id: "000074", title: "푸들" },
      { id: "000105", title: "푸들" },
      { id: "000107", title: "푸들" },
      { id: "000018", title: "비숑" },
      { id: "000072", title: "말티즈" },
      { id: "000113", title: "요크셔 테리어" },
    ],
    long: [
      { id: "000054", title: "골든 리트리버" },
      { id: "000108", title: "웰시코기" },
      { id: "000027", title: "불독" },
      { id: "000101", title: "시츄" },
      { id: "000032", title: "치와와" },
      { id: "000089", title: "포메라니안" },
    ],
  },
  CAT: {
    light: [
      { id: "000172", title: "러시안 블루" },
      { id: "000175", title: "먼치킨" },
      { id: "000184", title: "샴" },
      { id: "000188", title: "스코티시폴드" },
      { id: "00214", title: "페르시안" },
      { id: "000197", title: "페르시안" },
    ],
    heavy: [
      { id: "000176", title: "메인쿤" },
      { id: "000179", title: "벵갈" },
      { id: "000193", title: "아비시니안" },
      { id: "000195", title: "터키시 앙고라" },
    ],
    weak: [
      { id: "00214", title: "페르시안" },
      { id: "000197", title: "페르시안" },
      { id: "000181", title: "브리티시 쇼트헤어" },
    ],
    normal: [
      { id: "000172", title: "러시안 블루" },
      { id: "000175", title: "먼치킨" },
      { id: "000184", title: "샴" },
      { id: "000188", title: "스코티시폴드" },
    ],
    strong: [
      { id: "000179", title: "벵갈" },
      { id: "000193", title: "아비시니안" },
      { id: "000195", title: "터키시 앙고라" },
    ],
    short: [
      { id: "000172", title: "러시안 블루" },
      { id: "000184", title: "샴" },
      { id: "000193", title: "아비시니안" },
    ],
    long: [
      { id: "000175", title: "먼치킨" },
      { id: "000176", title: "메인쿤" },
      { id: "000179", title: "벵갈" },
      { id: "000181", title: "브리티시 쇼트헤어" },
      { id: "000188", title: "스코티시폴드" },
      { id: "000195", title: "터키시 앙고라" },
      { id: "00214", title: "페르시안" },
      { id: "000197", title: "페르시안" },
    ],
  },
};

interface petRecommandType {
  type: string;
  age: string;
  weight: string;
  petType: string[];
}

export default function Recommend() {
  const navigate = useNavigate();
  const [testStart, setTestStart] = useState(false);
  const [testDone, setTestDone] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [petRecommand, setPetRecommand] = useState<petRecommandType>({
    type: "",
    age: "",
    weight: "",
    petType: [],
  });

  useEffect(() => {
    if (questionNum === QUESTIONLIST.length) {
      setTestDone(true);
    }
  }, [questionNum]);

  const handleSelectAnswer = (id: string) => {
    setPetRecommand((prev) => {
      const newState = { ...prev };

      if (questionNum === 0) newState.type = id; // 강아지/고양이 선택
      if (questionNum === 1) newState.weight = id; // 주거 환경 (무게 로직용)
      if (questionNum === 3) newState.age = id; // 시간 (나이 로직용)

      // Q3(활동성)과 Q5(털빠짐) 답변은 품종 키워드 배열에 추가
      // if (questionNum === 2 || questionNum === 4) {
      //   newState.petType = [...prev.petType, id];
      // }

      return newState;
    });

    // 2. 다음 질문으로 이동
    setQuestionNum((prev) => prev + 1);
  };

  return (
    <>
      <section className="col-span-full sm:col-[2/8] lg:col-[3/11]">
        {!testStart && (
          <div className="mt-80 text-center text-[#CC8E6B]">
            <h1 className="text-xl font-bold mb-2.5">
              초보 집사님, 인생의 반려동물을 찾기 어려우신가요?
            </h1>
            <strong>데이터를 기반으로 도와드리겠습니다.</strong>

            <div className="mt-10 flex justify-center gap-10">
              <button
                onClick={() => navigate(-1)}
                className="bg-white w-full rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer"
              >
                이전 페이지로 돌아가기
              </button>
              <button
                onClick={() => setTestStart(true)}
                className="bg-[#CC8E6B] w-full text-white rounded-[10px] border border-[#E3C9A6] p-2.5 cursor-pointer"
              >
                시작하기
              </button>
            </div>
          </div>
        )}
        {testStart && !testDone && (
          <>
            <div className="mt-30">
              <div className="w-full aspect-[1/0.3] rounded-[10px] border border-[#E3C9A6] flex justify-center items-center">
                <h2 className="text-lg font-bold text-[#CC8E6B]">
                  {QUESTIONLIST[questionNum]?.title}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 mt-10">
                {QUESTIONLIST[questionNum]?.answer.map((item) => (
                  <button
                    key={item.id}
                    className="bg-white w-100 rounded-[10px] border border-[#E3C9A6] p-2.5 text-[#CC8E6B] cursor-pointer"
                    onClick={() => handleSelectAnswer(item.id)}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {testDone && <>테스트 종료</>}
      </section>
    </>
  );
}
