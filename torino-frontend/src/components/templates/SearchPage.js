import Image from "next/image";
import React from "react";

import baner from "@/images/baner.png";
import location from "@/images/location.png";
import global from "@/images/global-search.png";
import DatePickerCustom from "../modules/DatePickerCustom";

function SearchPage() {
  return (
    <div>
      <Image
        src={baner}
        className="w-full h-[119px] md:h-[350px]"
        width={1440}
        height={350}
        alt="baner"
        priority
      />

      <div className="mt-3 text-center text-base font-semibold md:text-2xl md:max-w-[1188px] mx-auto">
        <span className="text-[#28a745]">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </div>
      <div className="w-full text-center flex flex-col items-center mt-3 md:border-1 md:border-gray-300 md:rounded-xl md:flex-row-reverse md:justify-between md:max-w-[1188px] mx-auto">
        <div className="my-2 md:mx-2 ">
          <select className="w-[160px] h-[47px] border border-[#00000026] rounded-xl text-center md:border-none">
            <option>مقصد</option>
          </select>
          <select className="w-[160px] h-[47px] border border-[#00000026] rounded-xl text-center ml-2 md:border-none">
            <option>مبدا</option>
          </select>
        </div>

        <DatePickerCustom />

        <button className="w-[328px] h-[47px] text-center  text-white bg-[#28a745] rounded-xl text-xl font-normal mt-5 md:mt-0 md:mx-2">
          جستجو
        </button>
      </div>
    </div>
  );
}

export default SearchPage;
