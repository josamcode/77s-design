"use client";

import Image from "next/image";
import {
  BellIcon,
  EnvelopeIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="bg-[#F5F7FA] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left section: Logo + Navigation */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="mr-4 cursor-pointer"
              />
            </Link>

            <nav className="hidden md:flex space-x-6 text-[#545457] font-medium">
              <a href="#" className="mx-2 text-[17px]">
                Categories
              </a>
              <a href="#" className="mx-2 text-[17px]">
                Discover
              </a>
              <a href="#" className="mx-2 text-[17px]">
                Designers
              </a>
            </nav>
          </div>

          {/* Right section: Links + Icons */}
          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <a
                  href="#"
                  className="text-[#545457] text-[17px] font-medium hidden sm:block"
                >
                  Help
                </a>
                <a
                  href="#"
                  className="text-[#545457] text-[17px] font-medium hidden sm:block"
                >
                  Work
                </a>

                {/* Mail icon with badge */}
                <div className="relative">
                  <EnvelopeIcon className="h-6 w-6 text-[#545457] cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    55
                  </span>
                </div>

                {/* Bell icon with badge */}
                <div className="relative">
                  <BellIcon className="h-6 w-6 text-[#545457] cursor-pointer" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    55
                  </span>
                </div>

                {/* User avatar */}
                <UserCircleIcon className="h-8 w-8 text-[#545457] cursor-pointer" />
              </>
            ) : (
              <div className="flex gap-4">
                <Link href="/login?mode=login">Login</Link>
                <Link href="/login?mode=signup">Register</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
