# HuggyType

## 0. 목차

1.  [프로젝트 소개](#1-프로젝트-소개)
2.  [문제 해결](#2-문제-해결)
3.  [기술 스택](#3-기술-스택)
4.  [코딩 컨벤션](#4-코딩-컨벤션)
5.  [폴더 구조](#5-폴더-구조)
6.  [성과 및 느낀 점](#6-성과-및-느낀-점)
    <br>
    <br>

## 1. 프로젝트 소개

반려동물을 가족처럼 아끼는 문화가 자리잡는 요즘, 입양은 더 쉬워졌지만 버려지는 유기동물의 수는 여전히 줄지 않고 있습니다. 해마다 10만 마리 이상의 유기동물이 구조되고 있지만, 그 중 많은 수가 끝내 새 가족을 만나지 못한 채 보호소를 떠나게 됩니다.
<br>
<br>

## 2. 문제 해결

### 1. API 제약 사항 극복: 동적 병렬 쿼리 활용

- **문제**: 공공데이터 API의 특성상 동일한 속성의 쿼리 스트링을 다중 전달할 수 없어, 여러 품종을 동시에 필터링하는 데 한계가 있었습니다.
- **해결**: `TanStack Query`의 `useQueries`를 도입하여 다수의 독립적인 API 요청을 병렬로 처리했습니다.

```
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
      enabled: !!finalBreeds,
      staleTime: 1000 * 60 * 30,
    })),
  });
```

### 2. 전역 상태 기반의 필터 시스템 및 UX 최적화

- **문제**: 필터 조건이 많아짐에 따라 컴포넌트 간 상태 공유가 복잡해지고, 페이지 이동이나 새로고침 시 설정한 검색 조건이 초기화되는 불편함이 있었습니다.
- **해결**: `Zustand`를 활용해 필터 상태를 전역 관리하고, `persist` 미들웨어(sessionStorage)를 결합하여 사용자 세션 동안 검색 조건을 유지했습니다.

```
export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      filterState: {
        sido: "none",
        sigungu: "",
        state: "all",
        type: "all",
        petCode: "",
        sex: "all",
      },

      setFilterState: (key, value) =>
        set((state) => ({
          filterState: {
            ...state.filterState,
            [key]: value,
            ...(key === "sido" ? { sigungu: "" } : {}),
            ...(key === "type" ? { petCode: "" } : {}),
          },
        })),

      resetFilter: () =>
        set({
          filterState: {
            sido: "none",
            sigungu: "",
            state: "all",
            type: "all",
            petCode: "",
            sex: "all",
          },
        }),
    }),
    {
      name: "filter-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
```

### 3. 복합 UI 요소의 이벤트 전파 제어

- **문제**: 동물 카드 전체를 Link 태그로 감싸 상세 페이지 이동을 구현한 상태에서, 카드 내부의 '찜하기' 버튼 클릭 시 부모의 클릭 이벤트까지 함께 발생하여 의도치 않게 상세 페이지로 이동하는 문제가 있었습니다.
- **해결**: `stopPropagation`을 통해 클릭 이벤트가 부모 요소로 전파되는 버블링 현상을 차단하며 `preventDefault`를 추가하여 Link 태그가 가진 기본 동작(페이지 이동)을 확실히 방지함으로써, 찜 클릭 시 이동 없이 상태만 변경되도록 인터랙션을 최적화했습니다.

```
  const handleWishClick = (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    e.preventDefault();
    setWishState(id);
  };
```

## 3. 기술 스택

<table>
  <tr>
    <td align="center" width="100px">사용 기술</td>
    <td width="800px">
      <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp
      <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
      <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>&nbsp
      <img src="https://img.shields.io/badge/tanstack--query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white"/>&nbsp
      <img src="https://img.shields.io/badge/zustand-43392F?style=for-the-badge&logo=beard&logoColor=white"/>&nbsp 
    </td>
  </tr>
  <tr>
    <td align="center">기술 도구</td>
    <td>
      <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
      <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
    </td>
  <tr>
  <tr>
    <td align="center">API</td>
    <td>
      공공데이터 API(유기동물)
      <img src="https://img.shields.io/badge/lucide react-ffffff?style=for-the-badge&logo=lucide&logoColor=hsl(153.1deg 60.67% 53.14%)"/>&nbsp 
    </td>
  <tr>
    <td align="center">디자인</td>
    <td>
      <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
    </td>
  </tr>
  <tr>
    <td align="center">IDE</td>
    <td>
      <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
  </tr>
</table>

<br>

## 4. 코딩 컨벤션

<br>

<detail>
  <table>
    <tr>
      <th>커밋 메세지</th>
      <th>의미</th>
    </tr>
    <tr>
      <td>Feat</td>
      <td>새로운 기능 추가</td>
    </tr>
    <tr>
      <td>Fix</td>
      <td>버그 & 에러 수정</td>
    </tr>
    <tr>
      <td>File</td>
      <td>리드미 등 문서 수정, 라이브러리 설치</td>
    </tr>
    <tr>
      <td>Style</td>
      <td>코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우</td>
    </tr>
    <tr>
      <td>Design</td>
      <td>UI 디자인 변경</td>
    </tr>
    <tr>
      <td>Refactor</td>
      <td>코드 리팩토링</td>
    </tr>
    <tr>
      <td>Test</td>
      <td>테스트 코드, 리팩토링 테스트 코드 추가</td>
    </tr>
    <tr>
      <td>Chore</td>
      <td>빌드 업무 수정, 패키지 매니저 수정</td>
    </tr>
    <tr>
      <td>Rename</td>
      <td>파일명 혹은 폴더명 수정, 위치 옮기기</td>
    </tr>
    <tr>
      <td>Remove</td>
      <td>파일 삭제</td>
    </tr>
  </table>
</detail>

<br>
<br>

## 5. 폴더 구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜fetchDatas.ts
 ┣ 📂components
 ┃ ┣ 📜ContentItem.tsx
 ┃ ┣ 📜FilterForm.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┗ 📜Loading.tsx
 ┣ 📂hook
 ┃ ┗ 📜useQueryHook.ts
 ┣ 📂routes
 ┃ ┣ 📂layouts
 ┃ ┃ ┗ 📜Default.tsx
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┣ 📜Home.tsx
 ┃ ┃ ┣ 📜Recommend.tsx
 ┃ ┃ ┗ 📜WishList.tsx
 ┣ 📂store
 ┃ ┣ 📜filterStore.ts
 ┃ ┗ 📜wishListStore.ts
 ┣ 📂style
 ┃ ┣ 📜font.css
 ┃ ┣ 📜index.css
 ┃ ┗ 📜tailwind.css
 ┣ 📂types
 ┃ ┗ 📜type.d.ts
 ┣ 📜App.tsx
 ┗ 📜main.tsx
```

<br>
<br>

## 6. 성과 및 느낀 점

이번 프로젝트를 통해 무한 스크롤과 데이터 통신 최적화 tanstackQuery를 딥하게 맛볼 수 있던 프로젝트였습니다. 또한 zustand는 물론 typescript에 조금 더 친밀감을 가질 수 있었던 프로젝트였습니다.
