import Image from "next/image";
import React from "react";

import darsad from "@/svg/darsad.svg";
import support from "@/svg/support.svg";
import heart from "@/svg/heart.svg";

function Footer() {
  return (
    <div>
      <hr className="text-gray-300 mt-8 mb-8 mx-10" />
      <div className="flex flex-col">
        <div className="flex flex-row-reverse gap-5">
          <Image src={darsad} width={64} height={64} alt="darsad" />
          <div>
            <p className="text-[14px] font-medium text-right">بصرفه ترین قیمت</p>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5">
          <Image src={support} width={64} height={64} alt="darsad" />
          <div>
            <p className="text-[14px] font-medium text-right">پشتیبانی</p>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5">
          <Image src={heart} width={64} height={64} alt="darsad" />
          <div>
            <p className="text-[14px] font-medium text-right">رضایت کاربران</p>
            <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
