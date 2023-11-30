import { lightMoon, darkMoon } from "../assets";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <div>
        <img src={lightMoon} alt="Light Mode" />
        <h1>Dark Mode</h1>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 16px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;

  h1 {
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
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
