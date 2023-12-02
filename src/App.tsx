import { useState } from "react";
import { Header, Home } from "./components";
import styled from "styled-components";
import { Root } from "./types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState<Root[]>([]);
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          {/* <Route path="details" element={} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
`;
