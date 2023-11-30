import { Header, Search } from "./components";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;
