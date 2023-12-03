import { useState } from "react";
import { Header, Home } from "./components";
import styled from "styled-components";
import { Root } from "./types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [data, setData] = useState<Root[]>([]);
  const [light, setLight] = useState<boolean>(true);
  const [country, setCountry] = useState<string>("");

  return (
    <Router>
      <Container light={light}>
        <Header light={light} setLight={setLight} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setData={setData}
                light={light}
                setCountry={setCountry}
                country={country}
              />
            }
          />
          <Route
            path="/details/:id"
            element={<Details data={data} light={light} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div<{ light: boolean }>`
  background-color: ${(p) => (p.light ? "#fafafa" : "#202C36")};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
