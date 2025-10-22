import Image from "next/image";
import React from "react";

function TourCard({ title, image, price }) {
  return (
    <div className="w-[330px] h-[320px] border-gray-300 border-1 rounded-xl cursor-pointer">
      <Image src={image} width={328} height={160} priority alt={title} />
      <p className="text-[22px] text-right mt-2 mr-2">{title}</p>
      <p className="text-[15px] text-right text-gray-400 mt-2 mr-2 mb-2">
        ..مهر ماه . 3 روزه - پرواز - هتل 3 س
      </p>
      <hr className="text-gray-300 border-1" />
      <div className="flex justify-between self-baseline m-2">
        <div className="flex gap-1 mt-auto">
          <span>تومان</span>
          <span className="text-[#009ECA]"> {price.toLocaleString("fa-Ir")}</span>
        </div>
        <button className="py-1 px-12 bg-[#28a745] text-white rounded-md">رزرو</button>
      </div>
    </div>
  );
}

export default TourCard;
