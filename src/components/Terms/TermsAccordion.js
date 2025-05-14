"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function TermsAccordion({
  title,
  content,
  sectionNumber,
  highlightColor = "bg-[#F5F7FA]",
  isRTL = false,
  className = "",
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`mb-4 font-rotunda ${isRTL ? "text-right" : ""} ${className}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <button
        className={`w-full px-4 py-3 font-medium flex justify-between items-center ${highlightColor} ${!open ? 'rounded-3xl' : 'rounded-t-3xl'}`}
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#FF5F6B] text-xl">{`${sectionNumber}. ${title}`}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="bg-[#F5F7FA] px-4 py-3 text-lg leading-relaxed text-[#545457] rounded-b-3xl">
          {content}
        </div>
      )}
    </div>
  );
}
