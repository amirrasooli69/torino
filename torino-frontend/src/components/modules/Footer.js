import Image from "next/image";
import React from "react";
import Link from "next/link";

import darsad from "@/svg/darsad.svg";
import support from "@/svg/support.svg";
import heart from "@/svg/heart.svg";
import logo from "@/svg/logo.svg";
import qr from "@/svg/qr.svg";
import airline from "@/svg/airline.svg";
import qrPassenger from "@/svg/qrPassenger.svg";
import enamd from "@/svg/enamd.svg";
import damane from "@/svg/damane.svg";

function Footer() {
  return (
    <div>
      <hr className="text-gray-300 mt-8 mb-8 mx-10 md:mx-0" />
      <div className="flex flex-col mx-10 md:flex-row md:justify-between md:mx-auto md:w-[1188px] ">
        <div className="flex flex-row-reverse gap-5 items-center">
          <Image
            src={darsad}
            width={64}
            height={64}
            alt="darsad"
            className="md:w-[121px] md:h-[110px]"
          />
          <div>
            <p className="text-[14px] font-medium text-right">
              بصرفه ترین قیمت
            </p>
            <p className="font-light text-[12px] text-right ">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5 items-center">
          <Image
            src={support}
            width={64}
            height={64}
            alt="darsad"
            className="md:w-[121px] md:h-[110px]"
          />
          <div>
            <p className="text-[14px] font-medium text-right">پشتیبانی</p>
            <p className="font-light text-[12px] text-right">
              پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما
            </p>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-5 items-center">
          <Image
            src={heart}
            width={64}
            height={64}
            alt="darsad"
            className="md:w-[121px] md:h-[110px]"
          />
          <div>
            <p className="text-[14px] font-medium text-right">رضایت کاربران</p>
            <p className="font-light text-[12px] text-right ">
              رضایت بیش از 10هزار کاربر از تور های ما{" "}
            </p>
          </div>
        </div>
      </div>

      <hr className="text-gray-300 border-dashed md:w-[1188px] mx-10 md:mx-auto mt-8 mb-8" />

      <div className="flex flex-col md:flex-row-reverse">

        <div className="w-full md:w-1/2">
          <div className="flex gap-x-20 justify-center">
            <div className="text-right">
              <Link href="#">
                <p className="text-[22px] font-semibold mb-3">خدمات مشتریان</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">پشتیبانی آنلاین</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">راهنمای خرید</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">راهنمای استرداد</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">پرسش و پاسخ</p>
              </Link>
            </div>
            <div className="text-right">
              <Link href="#">
                <p className="text-[22px] font-semibold mb-3">تورینو</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">درباره ما</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">تماس با ما</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">چرا تورینو</p>
              </Link>
              <Link href="#">
                <p className="text-[16px] font-normal">بیمه مسافرتی</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:flex-col px-5 gap-4 md:w-1/2 md:mx-29">
          <div className="">
            <Image
              src={logo}
              width={100}
              height={30}
              alt="logo"
              className="mb-2"
            />
            <span className="px-1 whitespace-nowrap">تلفن پشتیبانی:</span>
            <span className="whitespace-nowrap">021-8574</span>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-start mt-5 justify-end">
            <Image src={damane} width={35} height={38} alt="logo" />
            <Image src={enamd} width={34} height={38} alt="logo" />
            <Image src={qr} width={35} height={38} alt="logo" />
            <Image src={qrPassenger} width={34} height={38} alt="logo" />
            <Image src={airline} width={40} height={38} alt="logo" />
          </div>
        </div>

      </div>
            <hr className="text-gray-300 mt-8 mb-8 mx-10 md:mx-0" />
            <p className="text-[15px] font-normal text-center">کلیه حقوق این وب سایت متعلق به تورینو میباشد</p>
    </div>
  );
}

export default Footer;
