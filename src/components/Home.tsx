import { Search, Result } from ".";
import { Root } from "../types";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
  light: boolean;
  setCountry: (country: string) => void;
  country: string;
}

function Home({ data, setData, light, setCountry, country }: Props) {
  return (
    <>
      <Search light={light} setCountry={setCountry} country={country} />
      <Result data={data} setData={setData} light={light} country={country} />
    </>
  );
}

export default Home;
