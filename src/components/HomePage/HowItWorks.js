"use client";

import Image from "next/image";
import { useState } from "react";

function HoverImage({ defaultSrc, hoverSrc, alt, width, height }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={defaultSrc}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer w-full h-auto transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={hoverSrc}
        alt={`${alt} hover`}
        width={width}
        height={height}
        className={`cursor-pointer w-full h-auto absolute top-0 left-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div suppressHydrationWarning className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Centered at Top */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#FF5F6B] mb-12">
          How it works & Experience
        </h2>

        {/* Contest Steps Section */}
        <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left Column */}
          <div suppressHydrationWarning>
            <h3 className="text-left text-2xl font-semibold text-[#4747C7] mb-4">
              Contest Steps
            </h3>

            <ol className="list-decimal text-gray-700 leading-relaxed ml-5 space-y-2">
              <li>Submit a creative brief</li>
              <li>Select a package and features</li>
              <li>Invite more designers</li>
              <li>Send feedback & rate</li>
              <li>Pick up the finalists for the final round</li>
              <li>Select the winner design</li>
              <li>
                File handover
                <ul className="list-none ml-4 text-sm text-gray-600">
                  <li>
                    (copy transfer agreement – File review – Payment release)
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Right Column */}
          <div suppressHydrationWarning className="p-4">
            <HoverImage
              defaultSrc="/HomePage/012.png"
              hoverSrc="/HomePage/0122.png"
              alt="How it works illustration"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Hiring Steps Section */}
        <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column (Image) */}
          <div suppressHydrationWarning className="p-4">
            <HoverImage
              defaultSrc="/HomePage/011.png"
              hoverSrc="/HomePage/0111.png"
              alt="Hiring process illustration"
              width={600}
              height={400}
            />
          </div>

          {/* Right Column (Text) */}
          <div suppressHydrationWarning>
            <h3 className="text-left text-2xl font-semibold text-[#00C7C7] mb-4">
              Hiring Steps
            </h3>

            <ol className="list-decimal text-gray-700 leading-relaxed ml-5 space-y-2">
              <li>Submit a creative brief</li>
              <li>Invite a designer or send to your designer</li>
              <li>Discuss project details/Timeline & Budget</li>
              <li>Secure invoice</li>
              <li>Discuss the design & Send feedback</li>
              <li>Receive files & Release payment</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
