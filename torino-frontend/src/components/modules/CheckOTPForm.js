"use client";

import { useState } from "react";
import OtpInput from "react18-input-otp";

import { useCheckOtp } from "@/core/services/mutations";
import toast from "react-hot-toast";

function CheckOTPForm({ mobile, setStep, setIsOpen }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();

  const handleChange = (otp) => setCode(otp); // one-time-password

  const submitHandler = (event) => {
    event.preventDefault();

    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setStep(1);
          setIsOpen(false);
          toast.success("ورود به حساب کاربری");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );

    console.log(code);
  };

  return (
    <div className="flex flex-col w-[561px] h-[362px] rounded-[20px] bg-white p-10 pt-16">
      <h4>کد تایید را وارد کنید.</h4>
      <form onSubmit={submitHandler}>
        <label>کد تایید به شماره {mobile} ارسال شد</label>
        <div style={{ direction: "ltr" }}>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={6}
            // inputStyle={{
            //   border: "1px solid silver",
            //   borderRadius: "5px",
            //   width: "58px",
            //   height: "53px",
            //   margin: "5px",
            // }}
            inputStyle="border border-gray-200 rounded-md !w-[30px] lg:!w-[58px] h-[53px] m-2"
          />
        </div>
        <button
          disabled={isPending}
          className="bg-[#28A745] h-11 text-white rounded-md"
          type="submit"
        >
          {isPending ? "...در حال اعتبارسنجی" : "ورود به تورینو"}
        </button>
      </form>
    </div>
  );
}

export default CheckOTPForm;