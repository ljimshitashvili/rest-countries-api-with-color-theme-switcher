import { Search, Result } from ".";
import { Root } from "../types";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
  light: boolean;
  setCountry: (country: string) => void;
  country: string;
  setRegion: (region: string) => void;
  region: string;
}

function Home({
  data,
  setData,
  light,
  setCountry,
  country,
  setRegion,
  region,
}: Props) {
  return (
    <>
      <Search
        light={light}
        setCountry={setCountry}
        country={country}
        setRegion={setRegion}
        region={region}
      />
      <Result
        data={data}
        setData={setData}
        light={light}
        country={country}
        region={region}
      />
    </>
  );
}

export default Home;
