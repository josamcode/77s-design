"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { src: "/categories-1.png", label: "Logo & Brand identity" },
  { src: "/categories-2.png", label: "Business & Advertising" },
  { src: "/categories-3.png", label: "Illustration & Graphics" },
  { src: "/categories-4.png", label: "Web & UI/UX design" },
  { src: "/categories-5.png", label: "Clothing & Merchandise" },
  { src: "/categories-6.png", label: "All Categories" },
];

export default function Categories() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#707070] font-semibold text-[28px] mb-10">
          Categories:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <Link href="#" key={index} className="block">
              <div className="flex justify-center items-center transition-transform transform hover:scale-105">
                <Image
                  src={"/HomePage" + cat.src}
                  alt={cat.label}
                  width={180}
                  height={180}
                  className="rounded-[2rem] shadow-[0_3px_10px_rgba(59,130,246,0.5)]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
