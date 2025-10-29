"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import login from "@/svg/login.svg";
import profile from "@/images/profile.png";
import logo from "@/images/logo.png";
import ModalContainer from "@/components/partials/container/ModalContainer";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function Header() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-[1188px] md:mx-auto flex justify-between items-center mx-[31px] my-3">
      <Image
        className="md:hidden w-[40px] h-[40px] border border-[#28a745] rounded-[8px]"
        src={login}
        width={24}
        height={24}
        alt="register"
        priority
      />
      <div className="hidden md:flex w-full mx-auto mt-2 justify-between ">
        <div className="flex text-lg text-[#28a745] font-medium leading-1 items-center border-2 border-[#28a745] rounded-md px-2">
          <button onClick={() => setIsOpen(true)}>ورود | ثبت نام</button>
          <Image src={profile} width={24} height={24} alt="profile" />
        </div>
        <nav className="mt-2">
          <ul className="flex justify-between gap-5">
            <li>
              <Link href="#">تماس با ما</Link>
            </li>
            <li>
              <Link href="#">درباره ما</Link>
            </li>
            <li>
              <Link href="#">خدمات گردشگری</Link>
            </li>
            <li className="text-[#28a745]">
              <Link href="#">صفحه اصلی</Link>
            </li>
          </ul>
        </nav>
        <Image
          // className={styles.logo}
          src={logo}
          width={146}
          height={44}
          alt="logo"
          priority
        />
      </div>
      <div className="md:hidden">
        <span className="block w-[20px] h-0 bg-white my-[5px] border-[2.5px] border-[#10411B] rounded-[10px]"></span>
        <span className="block w-[20px] h-0 bg-white my-[5px] border-[2.5px] border-[#10411B] rounded-[10px]"></span>
        <span className="block w-[20px] h-0 bg-white my-[5px] border-[2.5px] border-[#10411B] rounded-[10px]"></span>
      </div>

      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOTPForm setStep={setStep} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOTPForm />
        </ModalContainer>
      )}
    </div>
  );
}

export default Header;
