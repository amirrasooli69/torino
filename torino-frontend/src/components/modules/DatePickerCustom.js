"use client";
import { useState } from "react";
import { DatePicker } from "zaman";

function DatePickerCustom() {
  const [date, setDate] = useState([]);

  // console.log("from=>" ,date[0] )
  // console.log("to=>" , date[1])
  // console.log(date)

  return (
    <DatePicker
      onChange={(e) => setDate([e.from, e.to])}
      range
      accentColor="#28A745"
      inputClass="w-[328px] h-[47px] border border-[#00000026] rounded-xl text-center md:border-none"
      weekends={[6]}
      round="x4"
      position="center"
      inputAttributes={{
        placeholder: "تاریخ",
      }}
    />
  );
}

export default DatePickerCustom;
