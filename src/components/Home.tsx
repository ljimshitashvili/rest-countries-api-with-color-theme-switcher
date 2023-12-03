import { Search, Result } from ".";
import { Root } from "../types";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
  light: boolean;
}

function Home({ data, setData, light }: Props) {
  return (
    <>
      <Search light={light} />
      <Result data={data} setData={setData} light={light} />
    </>
  );
}

export default Home;
