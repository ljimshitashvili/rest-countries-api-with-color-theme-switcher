import { Search, Result } from ".";
import { Root } from "../types";

interface Props {
  data: Root[];
  setData: (data: Root[]) => void;
}

function Home({ data, setData }: Props) {
  return (
    <>
      <Search />
      <Result data={data} setData={setData} />
    </>
  );
}

export default Home;
