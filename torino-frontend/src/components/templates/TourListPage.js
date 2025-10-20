import React from "react";
import TourCard from "../modules/TourCard";

function TourListPage({ tourData }) {
  if (!tourData.length) return <p>نتیجه یافت نشد</p>;
  return (
    <div className="mt-5 ">
      <p className="text-lg mt-1 mr-15 text-right mb-3 ">همه تورها</p>
      <div className="flex flex-wrap justify-center gap-3">
        {tourData?.map((item) => (
          <TourCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TourListPage;
