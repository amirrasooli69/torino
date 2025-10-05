'use client'

import DatePicker from "react-datepicker"
import { useState } from "react";
function DatePickerCustom() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return <DatePicker
    showIcon
    // selected={selectedDate}
    onChange={(date) => setSelectedDate(date)}
    icon="fa fa-calendar"
    placeholderText="تاریخ"
  />;
};

export default DatePickerCustom
