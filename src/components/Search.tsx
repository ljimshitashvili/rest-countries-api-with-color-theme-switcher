import styled from "styled-components";
import { arrow } from "../assets";

interface Props {
  light: boolean;
}

function Search({ light }: Props) {
  return (
    <Container>
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

        <input type="text" placeholder="Search for a country..." />
      </div>
      <Filter>
        <h1 className="filter">Filter by Region</h1>
        <img src={arrow} alt="" />
      </Filter>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;

  .search {
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    padding-left: 32px !important;
    padding: 14px 0;
    display: flex;
    gap: 26px;
    margin-bottom: 40px;

    input {
      background-color: transparent;
      border-color: transparent;
      width: 70%;
    }
  }
`;

const Filter = styled.div`
  padding: 14px 19px 14px 24px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;

  .filter {
    font-size: 12px;
    color: #111517;
    font-weight: 400;
  }

  img {
    width: 8px;
    height: 8px;
  }
`;
