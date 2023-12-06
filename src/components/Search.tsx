import styled from "styled-components";
import { arrow, arrowDark } from "../assets";
import { useState } from "react";

interface Props {
  light: boolean;
  setCountry: (country: string) => void;
  country: string;
  setRegion: (region: string) => void;
}

function Search({ light, setCountry, setRegion }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  function changeCountryValue(e: React.ChangeEvent<HTMLInputElement>) {
    setCountry(e.currentTarget.value);
  }

  function changeRegion(e: React.MouseEvent<HTMLHeadingElement>) {
    setRegion((e.target as HTMLDivElement).textContent || "");
  }

  function changeOpen() {
    setOpen(!open);
  }

  return (
    <Container light={light}>
      <div className="search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
              fill="#B2B2B2"
            />
          </g>
        </svg>

        <input
          id="word"
          type="text"
          placeholder="Search for a country..."
          onChange={changeCountryValue}
        />
      </div>
      <Filter light={light} onClick={changeOpen} open={open}>
        <h1 className="filter">Filter by Region</h1>
        <img src={light ? arrow : arrowDark} alt="Arrow" />
        <div className="openCard">
          <h1 onClick={changeRegion}>America</h1>
          <h1 onClick={changeRegion}>Africa</h1>
          <h1 onClick={changeRegion}>Asia</h1>
          <h1 onClick={changeRegion}>Europe</h1>
          <h1 onClick={changeRegion}>Oceania</h1>
        </div>
      </Filter>
    </Container>
  );
}

export default Search;

const Container = styled.div<{ light: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;

  .search {
    width: 100%;
    border-radius: 5px;
    background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
    padding-left: 32px !important;
    padding: 14px 0;
    display: flex;
    gap: 26px;
    margin-bottom: 40px;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;

    ::placeholder {
      color: ${(p) => (p.light ? "#c4c4c4" : "#FFF")};
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    input {
      background-color: transparent;
      border-color: transparent;
      width: 70%;
      color: ${(p) => (p.light ? "#111517" : "#fff")};
    }
  }
`;

const Filter = styled.div<{ light: boolean; open: boolean }>`
  padding: 14px 19px 14px 24px;
  background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  position: relative;

  .filter {
    font-size: 12px;
    color: ${(p) => (p.light ? "#111517" : "#fff")};
    font-weight: 400;
  }

  .openCard {
    padding: 16px 24px;
    background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
    width: 200px;
    border-radius: 5px;
    position: absolute;
    top: 110%;
    left: 0;
    display: ${(p) => (p.open ? "flex" : "none")};
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: 12px;
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-weight: 400;
    }
  }
`;
