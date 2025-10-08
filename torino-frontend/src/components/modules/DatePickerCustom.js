'use client'
import { useState } from 'react';
import { DatePicker } from 'zaman'

function DatePickerCustom() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState(new Date())
  return (
    <DatePicker onChange={(e) => console.log(e.from, e.to)} range />
  )
}

export default DatePickerCustom
