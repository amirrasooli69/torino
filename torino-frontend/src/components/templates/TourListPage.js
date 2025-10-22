import React from "react";
import TourCard from "@/components/modules/TourCard";
import Image from "next/image";
import arrowDown from "../../../public/svg/arrowDown.svg";

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
      <div className="md:hidden flex gap-1 cursor-pointer justify-center mt-2">
        {/* <img src={arrowDown} alt="arrow" className="w-3 h-3"/> */}
        <Image src={arrowDown} alt="" />
        <span className="text-3 text-gray-400"> مشاهده بیشتر</span>
      </div>
    </div>
  );
}

export default TourListPage;
