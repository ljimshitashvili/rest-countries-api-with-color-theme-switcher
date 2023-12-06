import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Root } from "../types";
import { Link } from "react-router-dom";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
  light: boolean;
  country: string;
  region: string;
}

function Result({ data, setData, light, country, region }: Props) {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://raw.githubusercontent.com/ljimshitashvili/rest-countries-api-with-color-theme-switcher/master/public/data.json"
        );
        const fetchedData = response.data;
        setData(fetchedData);
      };
      fetchData();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function filterByName() {
    return data.filter((item) => item.name.toLowerCase().includes(country));
  }

  const filteredDataByName = filterByName();

  function filterByRegion() {
    return filteredDataByName.filter((item) =>
      item.region.toLowerCase().includes(region.toLowerCase())
    );
  }

  const filteredData = filterByRegion();

  return (
    <Container light={light}>
      {filteredData.map((item, index) => {
        return (
          <div key={index}>
            <Link to={`details/${index}`}>
              <img src={item.flag} alt="Flag" />
              <h1>{item.name}</h1>
              <h2>
                Population: <span>{item.population}</span>
              </h2>
              <h3>
                Region: <span>{item.region}</span>
              </h3>
              <h4>
                Capital: <span>{item.capital}</span>
              </h4>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}

export default Result;

const Container = styled.div<{ light: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 55px;

  div {
    background-color: ${(p) => (p.light ? "#fff" : "#2B3844")};
    border-radius: 5px;
    box-shadow: ${(p) =>
      p.light
        ? "0px 0px 7px 2px rgba(0, 0, 0, 0.03)"
        : "0px 0px 7px 2px rgba(0, 0, 0, 0.03)"};
    padding-bottom: 46px;

    img {
      width: 267px;
      border-radius: 5px 5px 0px 0px;
    }

    h1 {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 26px;
      margin: 24px 0px 16px 24px;
    }

    h2,
    h3,
    h4 {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      margin: 0px 0px 8px 24px;
    }

    span {
      color: ${(p) => (p.light ? "#111517" : "#fff")};
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
    }
  }
`;
