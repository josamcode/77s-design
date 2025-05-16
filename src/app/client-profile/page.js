"use client";

import Image from "next/image";
import { useState } from "react";

export default function ClientProfile() {
  return (
    <div className="min-h-screen">
      {/* Profile Header Section */}
      <div className="w-full h-[300px] bg-gradient-to-r from-gray-400 to-gray-500 relative">
        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end space-x-6">
            <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full rounded-full bg-gray-200"></div>
            </div>
            <div className="mb-4 text-white">
              <h1 className="text-3xl font-bold">Full Name</h1>
              <p className="text-sm opacity-90">Online 15 minutes ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col md:flex-row gap-8 bg-[#F5F7FA] py-16">
          {/* Left Column - Profile Info */}
          <div className="w-full flex flex-row gap-8">
            <div className="px-12 space-y-6 w-full">
              {/* Member Since */}
              <div>
                <p className="text-[#545457] font-sm">
                  Member since: March 14, 2021
                </p>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xl text-[#3D3D3F]">Languages</h3>
                <p className="text-[#545457] font-sm">German - English</p>
              </div>

              {/* Local Time */}
              <div>
                <div className="inline-block border border-[#3D3D3F] rounded px-4 py-2">
                  <p className="text-[#545457] font-medium">
                    Local Time 12:00 am
                  </p>
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="flex flex-col w-full gap-4 pt-4">
              <div className="text-left">
                <p className="text-2xl mb-2 font-bold text-[#545457]">32</p>
                <p className="text-sm text-gray-500 border-b-2 border-[#3D3D3F] inline-block pb-2 mb-2">Completed contest/s</p>
              </div>
              <div className="text-left">
                <p className="text-2xl mb-2 font-bold text-[#545457]">23</p>
                <p className="text-sm text-gray-500 border-b-2 border-[#3D3D3F] inline-block pb-2 mb-2">1to1 Projects</p>
              </div>
              <div className="text-left">
                <p className="text-2xl mb-2 font-bold text-[#545457]">12</p>
                <p className="text-sm text-gray-500 border-b-2 border-[#3D3D3F] inline-block pb-2 mb-2">Designer/s repeated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
