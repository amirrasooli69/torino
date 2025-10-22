import { serverFetch } from "@/core/services/http";
import SearchPage from "./SearchPage";
import TourListPage from "./TourListPage";
import BuyWithPhone from "../modules/BuyWithPhone";

async function HomePage() {
  const data = await serverFetch("/tour", {}, {cache: "no-store"})
  console.log(data)
  return (
    <>
      <SearchPage />
      <TourListPage tourData={data}/>
      <BuyWithPhone />
    </>
  );
}

export default HomePage;
