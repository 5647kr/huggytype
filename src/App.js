import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import MBTI from "./pages/Test/MBTI";
import Search from "./pages/Search/Search";
import FindMyPet from "./pages/FindMyPet/FindMyPet";





function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/test" element={<MBTI />}/>
          <Route path="/search" element={<Search />} />
          <Route path="/findMyPet" element={<FindMyPet />} />
        </Routes>
      </BrowserRouter>
    </Wrap>
  );
}
export default App;

const Wrap = styled.div`
  max-width: 480px;
  height: 100vh;
  background-color: var(--bg-color);
  margin: 0 auto;
  position: relative;
`;
