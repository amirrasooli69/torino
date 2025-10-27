import { serverFetch } from "@/core/services/http";
import SearchPage from "./SearchPage";
import TourListPage from "./TourListPage";
import BuyWithPhone from "../modules/BuyWithPhone";
import Slider from "../modules/Slider";

async function HomePage() {
  const data = await serverFetch("/tour", {}, {cache: "no-store"})
  // console.log(data)
  return (
    <div className="md:max-w-[1188px] mx-auto">
      <SearchPage />
      <TourListPage tourData={data}/>
      <BuyWithPhone />
      <Slider />
    </div>
  );
}

export default HomePage;
