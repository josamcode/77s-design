"use client";

import Image from "next/image";
import {
  BookmarkIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaFacebookF,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#252C47] text-gray-300">
      <div
        suppressHydrationWarning
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-6 py-16 pb-8"
      >
        {/* Column 1 */}
        <div suppressHydrationWarning>
          <h3 className="text-white font-semibold mb-4">Design Services</h3>
          <ul className="space-y-2">
            {[
              "Design Contest",
              "Hiring 1 to 1",
              "Switch to Designer",
              "77S design Studio",
              "Find a Designer",
              "Discover Designs",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div suppressHydrationWarning>
          <h3 className="text-white font-semibold mb-4">Category</h3>
          <ul className="space-y-2">
            {[
              "Logo – brand identity",
              "T-shirt",
              "Label – packaging",
              "Illustration – graphics",
              "Web – App design",
              "All categories",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div suppressHydrationWarning>
          <ul className="space-y-3">
            <li>
              <Link
                href="/pricing"
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <BookmarkIcon className="h-5 w-5 text-white" />
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <EnvelopeIcon className="h-5 w-5 text-white" />
                Join to 77S design
              </Link>
            </li>
            <li>
              <Link
                href="/help/en"
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <QuestionMarkCircleIcon className="h-5 w-5 text-white" />
                Help
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <ExclamationCircleIcon className="h-5 w-5 text-white" />
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-white cursor-pointer transition"
              >
                <Image
                  src="/icons/contact-icon.png"
                  alt="Contact"
                  width={20}
                  height={20}
                  className="text-white"
                />
                Contact
              </Link>
            </li>
          </ul>

          {/* Language Switcher */}
          <div suppressHydrationWarning className="mt-4">
            <div suppressHydrationWarning className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full border bg-white text-black text-sm cursor-pointer hover:bg-white hover:text-[#1a1d33] transition">
                English
              </span>
              <span className="text-sm cursor-pointer hover:text-white transition">
                عربي
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div suppressHydrationWarning className="w-full bg-[#13192E]">
        <div
          suppressHydrationWarning
          className="max-w-7xl mx-auto sm:px-6 lg:px-8 border-t-3 border-white mt-8 py-8 px-6 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          {/* Left */}
          <div
            suppressHydrationWarning
            className="flex items-center gap-4 mb-4 md:mb-0"
          >
            <Image src="/logo-2.png" alt="Logo" width={100} height={40} />
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 cursor-pointer hover:text-white transition">
              Terms
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 cursor-pointer hover:text-white transition">
              Privacy
            </span>
          </div>

          {/* Right */}
          <div
            suppressHydrationWarning
            className="flex gap-4 text-white text-lg"
          >
            <div
              suppressHydrationWarning
              className="flex gap-4 text-white text-lg"
            >
              <FaBehance className="h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
              <FaFacebookF className="h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
              <FaInstagram className="h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
              <FaXTwitter className="h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
