import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Root } from "../types";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
}

function Result({ data, setData }: Props) {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("../../public/data.json");
        const fetchedData = response.data;
        setData(fetchedData);
      };
      fetchData();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      {data.map((item, index) => (
        <div key={index}>
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
        </div>
      ))}
    </Container>
  );
}

export default Result;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 55px;

  div {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
    img {
      width: 267px;
      border-radius: 5px 5px 0px 0px;
    }

    h1 {
      color: #111517;
      font-size: 18px;
      font-style: normal;
      font-weight: 800;
      line-height: 26px;
      margin: 24px 0px 16px 24px;
    }

    h2,
    h3,
    h4 {
      color: #111517;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      margin: 0px 0px 8px 24px;
    }

    span {
      color: #111517;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 16px;
    }
  }
`;
