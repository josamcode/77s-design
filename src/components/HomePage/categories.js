"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { src: "/categories-1.png", label: "Logo & Brand identity", link: "/categories" },
  { src: "/categories-2.png", label: "Business & Advertising", link: "/categories" },
  { src: "/categories-3.png", label: "Illustration & Graphics", link: "/categories" },
  { src: "/categories-4.png", label: "Web & UI/UX design", link: "/categories" },
  { src: "/categories-5.png", label: "Clothing & Merchandise", link: "/categories" },
  { src: "/categories-6.png", label: "All Categories", link: "/categories" },
];

export default function Categories() {
  return (
    <section className="py-12 px-4 bg-white">
      <div suppressHydrationWarning className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#707070] font-semibold text-[28px] mb-10">
          Categories:
        </h2>
        {/* div to show the categories ass images only */}
        <div suppressHydrationWarning className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <div suppressHydrationWarning key={index} className="flex justify-center items-center">
              <Link href={cat.link} className="transition-transform hover:scale-105">
                <Image
                  src={"/HomePage" + cat.src}
                  alt={cat.label}
                  width={180}
                  height={180}
                  className="filter drop-shadow-[0_3px_10px_rgba(59,130,246,0.5)]"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
