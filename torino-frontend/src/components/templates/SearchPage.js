import Image from 'next/image'
import React from 'react'

import baner from "@/images/baner.png";
import location from "@/images/location.png";
import global from "@/images/global-search.png";
import DatePickerCustom from "../modules/DatePickerCustom";

function SearchPage() {
  return (
    <div>
      <Image
        src={baner}
        className="w-full h-[119px] sm:h-[350px]"
        width={1440}
        height={350}
        alt="baner"
        priority
      />

      <div className="mt-3 text-center text-base font-semibold sm:text-2xl">
        <span className="text-[#28a745]">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </div>
      <div className="w-full text-center flex flex-col items-center mt-3">
        <div className="my-2">
          <select className="w-[160px] h-[47px] border border-[#00000026] rounded-xl text-center">
            <option>مقصد</option>
          </select>
          <select className="w-[160px] h-[47px] border border-[#00000026] rounded-xl text-center ml-2">
            <option>مبدا</option>
          </select>
        </div>
        <DatePickerCustom />
        <button className="w-[328px] h-[47px] text-center  text-white bg-[#28a745] rounded-xl text-xl font-normal mt-5">جستجو</button>
      </div>
    </div>
  )
}

export default SearchPage
