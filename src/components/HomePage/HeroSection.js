"use client";

import Image from "next/image";
import { useState } from "react";

function CustomDropdown({ options, defaultValue, className = "" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  return (
    <div className={`relative w-full sm:w-auto flex-1 ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full cursor-pointer bg-white text-left px-4 py-2 text-[#9E9EA3] rounded flex justify-between items-center"
      >
        <span className="truncate max-w-[300px] block overflow-hidden whitespace-nowrap">
          {selected}
        </span>

        <span className="text-sm ml-2">▼</span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 bg-white shadow-lg rounded p-2 space-y-2 w-full">
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA]">
      <div suppressHydrationWarning className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div suppressHydrationWarning className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold text-[#3D3D3F] leading-tight">
            Access to talented and creative designers for original designs
          </h1>

          {/* Form Row */}
          <div suppressHydrationWarning className="mt-8 h-auto sm:h-[80px] bg-white rounded-lg shadow-md flex flex-col sm:flex-row gap-4 sm:gap-2 items-center">
            <CustomDropdown
              className="sm:flex-[2]"
              options={[
                "Logo, Brand Identity, Packaging...",
                "Web Design",
                "App UI",
              ]}
            />
            <CustomDropdown 
              className="sm:flex-[1.3]"
              options={["Contest", "Project 1-to-1"]} 
            />
            <button className="w-full cursor-pointer h-full sm:w-auto bg-[#ff5a5f] text-white font-semibold text-xl rounded-tr-[10px] rounded-br-[10px] px-10 py-2">
              Start
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <Image
            src="/HomePage/02.png"
            alt="Hero Illustration"
            width={400}
            height={512}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Banner */}
      <div className="mt-8 pb-10 w-full text-[#FF5F6B] font-bold text-center flex justify-center items-center sm:text-[16px] lg:text-[33px] lg:text-left tracking-wide uppercase">
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <span className="text-xl">
            <img src="/HomePage/arrows.svg" className="-scale-x-100" />
          </span>
          <span className="px-4">
            IP Protection for your designs – 100% Guarantee
          </span>
          <span className="text-xl">
            <img src="/HomePage/arrows.svg" />
          </span>
        </div>
      </div>
    </section>
  );
}
