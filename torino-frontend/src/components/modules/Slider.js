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
    <div className="w-[334px] mt-20 md:w-full md:max-w-[1188px] mx-auto">
      <Image
        src={backgroundQuestion}
        width={150}
        height={40}
        alt="question"
        className="block ml-auto mb-3"
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

        <div className="flex flex-col items-center justify-center mt-10 mx-10">
          <div className="relative w-[300px] h-[220px] sm:w-[400px] sm:h-[300px]">
            {images.map((img, index) => {
              const offset = (index - current + images.length) % images.length;
              const translate = -offset * 60;
              const scale = 1 - offset * 0.1;
              const zIndex = images.length - offset;

              return (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-lg transition-all duration-700 ease-in-out`}
                  style={{
                    transform: `translateX(${translate}px) scale(${scale})`,
                    zIndex,
                    opacity: offset > 2 ? 0 : 1,
                  }}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <button onClick={prevSlide} className="hover:cursor-pointer">
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            <span className="text-gray-700 text-sm font-medium">
              {current + 1} / {images.length}
            </span>

            <button onClick={nextSlide} className="hover:cursor-pointer">
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
