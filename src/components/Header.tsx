import { lightMoon, darkMoon } from "../assets";
import styled from "styled-components";

interface Props {
  setLight: (light: boolean) => void;
  light: boolean;
}

function Header({ light, setLight }: Props) {
  return (
    <Container light={light}>
      <h1>Where in the world?</h1>
      <div
        onClick={() => {
          setLight(!light);
        }}
      >
        <img src={light ? lightMoon : darkMoon} alt="Light Mode" />
        <h1>{light ? "Dark Mode" : "Light Mode"}</h1>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div<{ light: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 30px 16px;
  width: 100%;
  background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
  box-shadow: ${(p) =>
    p.light
      ? "0px 2px 4px 0px rgba(0, 0, 0, 0.06)"
      : "0px 2px 4px 0px rgba(0, 0, 0, 0.06)"};
  margin-bottom: 24px;

  h1 {
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    color: ${(p) => (p.light ? "#111517" : "#fff")};
  }

  div {
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
    }

    h1 {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
