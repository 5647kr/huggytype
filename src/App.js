import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Search from "./pages/Search/Search";
import Result from "./pages/Result/Result";
import FindMyPet from "./pages/FindMyPet/FindMyPet";





function App() {
  return (
    <Wrap>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/test" element={<Test />} />
          <Route path="/search" element={<Search />} />
          <Route path="/result" element={<Result />} />
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
