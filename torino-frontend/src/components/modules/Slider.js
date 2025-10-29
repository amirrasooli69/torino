"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import backgroundQuestion from "@/svg/backgroundQuestion.svg";

function Slider() {
  const [current, setCurrent] = useState(0);
  const images = [
    "/images/slider/slid1.png",
    "/images/slider/slid2.png",
    "/images/slider/slid3.png",
    "/images/slider/slid4.png",
  ];
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-[334px] mt-20  mx-auto md:w-full  ">
      <Image
        src={backgroundQuestion}
        width={150}
        height={40}
        alt="question"
        className=""
      />
      <div className="flex gap-5 md:flex-row-reverse">
        <div className="hidden mt-5 md:flex md:flex-col w-1/2 ml-auto ">
          <p className="text-right text-[24px] font-medium">
            تور طبیعت گردی و تاریخی{" "}
          </p>
          <p className="mt-3 text-right text-[20px] font-thin">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div className="mx-auto  rounded-3xl">
          <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-lg shadow-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 rounded-[35px] ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button onClick={prevSlide} className="hover:cursor-pointer">
              <ArrowLeft className="w-6 h-6 text-gray-800" />
            </button>

            <span className="text-gray-700 font-medium text-sm">
              {current + 1} / {images.length}
            </span>

            <button onClick={nextSlide} className="hover:cursor-pointer">
              <ArrowRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
