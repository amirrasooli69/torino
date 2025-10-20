import { serverFetch } from "@/core/services/http";
import SearchPage from "./SearchPage";
import TourListPage from "./TourListPage";

async function HomePage() {
  const data = await serverFetch("/tour", {}, {cache: "no-store"})
  console.log(data)
  return (
    <>
      <SearchPage />
      <TourListPage tourData={data}/>
    </>
  );
}

export default HomePage;
