"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="m-12 md:mt-50">
      <Image
        src={backgroundQuestion}
        width={150}
        height={40}
        alt="question"
        className="ml-auto block"
      />
      <div className="flex gap-5 sm:flex-row-reverse">
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
        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] overflow-hidden rounded-lg shadow-lg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* شماره اسلاید */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
