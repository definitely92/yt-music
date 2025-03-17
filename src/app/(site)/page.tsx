import { sleep } from "@/lib/utils";

const Home = async () => {
  await sleep(2000);
  
  return <div>Home</div>;
};

export default Home;
