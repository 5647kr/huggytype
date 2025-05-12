import GlobalStyle from "./style/GlobalStyle";
import styled from "styled-components";


function App() {
  return (
    <Wrap>
      <GlobalStyle /> 
    </Wrap>
  );
}
export default App;

const Wrap = styled.body`
  max-width: 390px;
  height: 100vh;
  background-color: var(--bg-color);
  margin: 0 auto;
  position: relative;
`;
