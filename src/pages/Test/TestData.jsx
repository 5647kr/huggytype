const question = [
  {
    id: 1,
    title: "주말에 에너지를 충전하는 가장 좋은 방법은 무엇인가요?",
    type: "EI",
    A: "친구들과 약속을 잡고 활기찬 시간을 보낸다.",
    B: "혼자 책을 읽거나 조용한 공간에서 쉰다.",
  },
  {
    id: 2,
    title: "새로운 사람을 처음 만났을 때 어떤가요?",
    type: "EI",
    A: "먼저 말을 걸고 분위기를 주도한다.",
    B: "조용히 상대의 반응을 보며 천천히 친해진다.",
  },
  {
    id: 3,
    title: "여행을 계획할 때 당신은 어떤 스타일인가요?",
    type: "JP",
    A: "철저한 일정표를 짜고 시간에 맞춰 움직인다.",
    B: "그때그때 기분에 따라 유연하게 움직인다.",
  },
  {
    id: 4,
    title: "중요한 결정을 내릴 때, 당신은?",
    type: "TF",
    A: "감정보다는 논리와 근거를 중시한다.",
    B: "다른 사람의 감정과 관계를 고려한다.",
  },
  {
    id: 5,
    title: "아이디어 회의 중 당신의 역할은?",
    type: "NS",
    A: "창의적인 아이디어나 미래 가능성을 제시한다.",
    B: "현실적이고 실행 가능한 방안을 제안한다.",
  },
  {
    id: 6,
    title: "문제가 생겼을 때 당신의 첫 반응은?",
    type: "TF",
    A: "감정을 배제하고 원인과 해결책을 분석한다.",
    B: "관련된 사람의 감정과 상황을 먼저 고려한다.",
  },
  {
    id: 7,
    title: "일을 할 때 어떤 스타일인가요?",
    type: "JP",
    A: "계획대로 진행되도록 미리 정리하고 끝낸다.",
    B: "유연하게 하되, 마감 직전에 몰아서 한다.",
  },
  {
    id: 8,
    title: "다른 사람들과 함께할 때 당신은?",
    type: "EI",
    A: "대화를 주도하며 분위기를 띄운다.",
    B: "경청하며 상황을 파악하고 적절히 말한다.",
  },
  {
    id: 9,
    title: "정보를 받아들일 때 당신은?",
    type: "NS",
    A: "사실이나 디테일에 집중해서 현실적으로 본다.",
    B: "패턴과 의미를 파악하고 큰 그림을 본다.",
  },
  {
    id: 10,
    title: "직장에서의 의사결정 방식은?",
    type: "TF",
    A: "효율성과 객관적 기준으로 판단한다.",
    B: "사람 간의 조화를 고려한 결정을 한다.",
  },
  {
    id: 11,
    title: "새로운 프로젝트를 시작할 때 어떤 방식으로 진행하나요?",
    type: "JP",
    A: "목표와 마감일을 정해 체계적으로 진행한다.",
    B: "일단 시작하고 그때그때 조정한다.",
  },
  {
    id: 12,
    title: "새로운 개념이나 정보를 배울 때 당신은 어떻게 접근하나요?",
    type: "NS",
    A: "아이디어의 의미와 가능성부터 상상하며 이해한다.",
    B: "구체적인 예시와 실생활 적용을 통해 이해한다.",
  },
];

const testResult = [
  {
    id: 1,
    result: "ISTJ",
    content: "신중하고 책임감 있는 성향",
    animals: "불도그 & 브리티시 쇼트헤어",
    dogImg: "/assets/img/불도그.webp",
    catImg: "/assets/img/브리티시_쇼트헤어.webp"
  },
  {
    id: 2,
    result: "ISFJ",
    content: "따뜻하고 헌신적인 보호자 타입",
    animals: "말티즈 & 페르시안",
    dogImg: "/assets/img/말티즈.webp",
    catImg: "/assets/img/페르시안.webp"
  },
  {
    id: 3,
    result: "INFJ",
    content: "이상주의적이며 깊이 있는 감정 공유 선호",
    animals: "푸들 & 러시안 블루",
    dogImg: "/assets/img/푸들.webp",
    catImg: "/assets/img/러시안_블루.webp"
  },
  {
    id: 4,
    result: "INTJ",
    content: "전략적이며 혼자 있는 걸 즐김",
    animals: "웰시 코기 & 노르웨이 숲고양이",
    dogImg: "/assets/img/웰시_코기.webp",
    catImg: "/assets/img/노르웨이_숲고양이.webp"
  },
  {
    id: 5,
    result: "ISTP",
    content: "실용적이며 독립적인 탐험가",
    animals: "치와와 & 벵갈",
    dogImg: "/assets/img/치와와.webp",
    catImg: "/assets/img/벵갈.webp"
  },
  {
    id: 6,
    result: "ISFP",
    content: "감성적이고 조용한 예술가형",
    animals: "비숑 & 샴",
    dogImg: "/assets/img/비숑.webp",
    catImg: "/assets/img/샴.webp"
  },
  {
    id: 7,
    result: "INFP",
    content: "공감 능력이 뛰어나며 몽상가 기질",
    animals: "시추 & 스코티시 폴드",
    dogImg: "/assets/img/시추.webp",
    catImg: "/assets/img/스코티시_폴드.webp"
  },
  {
    id: 8,
    result: "INTP",
    content: "논리적이고 지적 호기심이 많은 유형",
    animals: "요크셔 테리어 & 코리안 숏헤어",
    dogImg: "/assets/img/요크셔_테리어.webp",
    catImg: "/assets/img/코리안_숏헤어.webp"
  },
  {
    id: 9,
    result: "ESTP",
    content: "즉흥적이고 활동적인 모험가",
    animals: "포메라니안 & 먼치킨",
    dogImg: "/assets/img/포메라니안.webp",
    catImg: "/assets/img/먼치킨.webp"
  },
  {
    id: 10,
    result: "ESFP",
    content: "사교적이고 에너지 넘치는 분위기 메이커",
    animals: "골든 리트리버 & 메인쿤",
    dogImg: "/assets/img/골든_리트리버.webp",
    catImg: "/assets/img/메인쿤.webp"
  },
  {
    id: 11,
    result: "ENFP",
    content: "열정적이고 창의적인 자유로운 영혼",
    animals: "푸들 & 러시안 블루",
    dogImg: "/assets/img/푸들.webp",
    catImg: "/assets/img/러시안_블루.webp"
  },
  {
    id: 12,
    result: "ENTP",
    content: "재치 있고 지적인 토론가",
    animals: "웰시 코기 & 벵갈",
    dogImg: "/assets/img/웰시_코기.webp",
    catImg: "/assets/img/벵갈.webp"
  },
  {
    id: 13,
    result: "ESTJ",
    content: "체계적이고 리더십 있는 관리자",
    animals: "불도그 & 페르시안",
    dogImg: "/assets/img/불도그.webp",
    catImg: "/assets/img/페르시안.webp"
  },
  {
    id: 14,
    result: "ESFJ",
    content: "사교적이고 책임감 있는 보살핌형",
    animals: "말티즈 & 스코티시 폴드",
    dogImg: "/assets/img/말티즈.webp",
    catImg: "/assets/img/스코티시_폴드.webp"
  },
  {
    id: 15,
    result: "ENFJ",
    content: "사람을 이끄는 따뜻한 리더",
    animals: "골든 리트리버 & 메인쿤",
    dogImg: "/assets/img/골든_리트리버.webp",
    catImg: "/assets/img/메인쿤.webp"
  },
  {
    id: 16,
    result: "ENTJ",
    content: "목표 지향적인 야망가",
    animals: "포메라니안 & 노르웨이 숲고양이",
    dogImg: "/assets/img/포메라니안.webp",
    catImg: "/assets/img/노르웨이_숲고양이.webp"
  },
];

export { question, testResult };
