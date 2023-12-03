import styled from "styled-components";
import { Root } from "../types";
import { useParams, Link } from "react-router-dom";

interface Props {
  data: Root[];
  light: boolean;
}

function Details({ data, light }: Props) {
  const { id } = useParams<{ id: string }>();
  const selectedItem = data.find((_item, index) => index.toString() === id);
  return (
    <Container light={light}>
      <Link to="/">
        <div className="back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.81802 0.696699L6.87868 1.75736L3.3785 5.25754H16.7428L16.7428 6.74246H3.3785L6.87868 10.2426L5.81802 11.3033L0.514719 6L5.81802 0.696699Z"
              fill={light ? "111517" : "#fff"}
            />
          </svg>
          <p>Back</p>
        </div>
      </Link>
      <img src={selectedItem?.flags.png} alt="Flag" />
      <h1>{selectedItem?.name}</h1>
      <div className="info1">
        <p>
          Native Name: <span>{selectedItem?.nativeName}</span>
        </p>
        <p>
          Population: <span>{selectedItem?.population}</span>
        </p>
        <p>
          Region: <span>{selectedItem?.region}</span>
        </p>
        <p>
          Sub Region: <span>{selectedItem?.subregion}</span>
        </p>
        <p>
          Capital: <span>{selectedItem?.capital}</span>
        </p>
      </div>
      <div className="info2">
        <p>
          Top Level Domain: <span>{selectedItem?.topLevelDomain}</span>
        </p>
        <p>
          Currencies:{" "}
          <span>
            {selectedItem?.currencies
              .map((currency) => currency.name)
              .join(", ")}
          </span>
        </p>
        <p>
          Languages:{" "}
          <span>
            {selectedItem?.languages
              .map((language) => language.name)
              .join(", ")}
          </span>
        </p>
      </div>
      <div className="borders">
        <p>Border Countries:</p>
        <div className="countries">
          {selectedItem?.borders.map((country, index) => (
            <div key={index}>
              <span>{country}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Details;

const Container = styled.div<{ light: boolean }>`
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;

  .back {
    width: 104px;
    height: 32px;
    background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 10px 0 64px 0;

    p {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
    }
  }

  img {
    border-radius: 5.7px;
    margin-bottom: 44px;
    width: 100%;
  }

  h1 {
    color: ${(p) => (p.light ? "#111517" : "#fff")};
    font-size: 22px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 16px;
    width: 100%;
  }

  .info1 {
    width: 100%;
    margin-bottom: 32px;
  }
  .info2 {
    width: 100%;
    margin-bottom: 34px;
  }

  p {
    color: ${(p) => (p.light ? "#111517" : "#fff")};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;

    span {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 32px;
    }
  }
  .countries {
    border-radius: 2px;
    display: flex;
    gap: 10px;
    width: 100%;

    div {
      background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }

  .borders {
    margin-bottom: 100px;
    p {
      margin-bottom: 16px;
    }
  }
`;
