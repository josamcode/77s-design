"use client";

import { MagnifyingGlassIcon, HeartIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

export default function DesignerFilter() {
  // State for managing dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null);

  // Filter options
  const filterOptions = {
    industries: [
      "Web Design",
      "Mobile App Design",
      "Graphic Design",
      "UI/UX Design",
      "Brand Design"
    ],
    lastActivity: [
      "Online now",
      "Last 24 hours",
      "Last 7 days",
      "Last 30 days",
      "All time"
    ],
    designerLevel: [
      "Beginner",
      "Intermediate",
      "Advanced",
      "Expert",
      "Professional"
    ],
    languages: [
      "English",
      "Spanish",
      "French",
      "German",
      "Chinese",
      "Japanese"
    ]
  };

  // Toggle dropdown
  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdownName);
    }
  };

  return (
    <>
      <div className="bg-[#F5F7FA] pb-6">
        {/* Header and Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          <h1 className="text-3xl font-bold text-[#545457]">Designers</h1>
          {/* search bar and icon to search  */}
          <div
            suppressHydrationWarning
            className="mt-6 mb-12 h-auto sm:h-[60px] flex sm:flex-row items-center"
          >
            <input
              type="text"
              placeholder="Search keywords"
              className="w-[300px] h-full p-2 rounded-l-md focus:outline-none bg-white shadow-[0_0_5px_0_rgba(71,71,199,0.16)]"
            />
            <button className="w-full cursor-pointer h-full sm:w-auto bg-[#ff5a5f] text-white font-semibold text-xl rounded-tr-[10px] rounded-br-[10px] px-10 py-2 shadow-[0_0_5px_0_rgba(71,71,199,0.16)]">
              <MagnifyingGlassIcon className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* Main Content with Sidebar and Cards */}
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Category Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0 space-y-10">
            {/* Logo-brand identity */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#FF5F6B] text-white hover:opacity-90 transition-opacity">
              <Image
                src="/icons/group-1.png"
                alt="Logo brand"
                width={24}
                height={24}
                className="w-10 h-8"
              />
              <span>Logo-brand identity</span>
            </button>

            {/* Business-Advertising */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#4747C7] text-white hover:opacity-90 transition-opacity">
              <Image
                src="/icons/group-2.png"
                alt="Business"
                width={24}
                height={24}
                className="w-10 h-8"
              />
              <span>Business-Advertising</span>
            </button>

            {/* Web-App design */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#00C7C7] text-white hover:opacity-90 transition-opacity">
              <Image
                src="/icons/group-3.png"
                alt="Web App"
                width={24}
                height={24}
                className="w-10 h-8"
              />
              <span>Web-App design</span>
            </button>

            {/* Clothing Merchandise */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#252C47] text-white hover:opacity-90 transition-opacity">
              <Image
                src="/icons/group-4.png"
                alt="Clothing"
                width={24}
                height={24}
                className="w-10 h-8"
              />
              <span>Clothing Merchandise</span>
            </button>

            {/* Illustration-Graphics */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-[#13192E] text-white hover:opacity-90 transition-opacity">
              <Image
                src="/icons/group-5.png"
                alt="Illustration"
                width={24}
                height={24}
                className="w-10 h-8"
              />
              <span>Illustration-Graphics</span>
            </button>

            {/* Filter Dropdowns */}
            <div className="space-y-8 mt-32">
              {/* Industries Filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('industries')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-3xl bg-[#CACAD1] cursor-pointer text-[#545457] hover:bg-opacity-90 transition-opacity"
                >
                  <span className="text-[#FF5F6B]">Industries:</span>
                  <ChevronDownIcon className={`w-5 h-5 text-[#545457] transform transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'industries' && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    {filterOptions.industries.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#545457] first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Last activity Filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('lastActivity')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-3xl bg-[#CACAD1] cursor-pointer text-[#545457] hover:bg-opacity-90 transition-opacity"
                >
                  <span className="text-[#FF5F6B]">Last activity:</span>
                  <ChevronDownIcon className={`w-5 h-5 text-[#545457] transform transition-transform ${openDropdown === 'lastActivity' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'lastActivity' && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    {filterOptions.lastActivity.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#545457] first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Designer level Filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('designerLevel')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-3xl bg-[#CACAD1] cursor-pointer text-[#545457] hover:bg-opacity-90 transition-opacity"
                >
                  <span className="text-[#FF5F6B]">Designer level:</span>
                  <ChevronDownIcon className={`w-5 h-5 text-[#545457] transform transition-transform ${openDropdown === 'designerLevel' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'designerLevel' && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    {filterOptions.designerLevel.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#545457] first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Languages Filter */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('languages')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-3xl bg-[#CACAD1] cursor-pointer text-[#545457] hover:bg-opacity-90 transition-opacity"
                >
                  <span className="text-[#FF5F6B]">Languages:</span>
                  <ChevronDownIcon className={`w-5 h-5 text-[#545457] transform transition-transform ${openDropdown === 'languages' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'languages' && (
                  <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
                    {filterOptions.languages.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-[#545457] first:rounded-t-lg last:rounded-b-lg"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Designer Cards Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Designer Card */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Portfolio Image */}
                  <div className="relative h-48 bg-gray-900">
                    {/* Add actual portfolio image here */}
                  </div>

                  {/* Designer Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-[#CACAD1]"></div>
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Designer name
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between space-x-2 text-sm text-gray-500 mb-4">
                      <span>Adv. Level</span>
                      <span>Online 7 hours ago</span>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center space-x-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-10 h-10 text-[#00BFA6]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Biography */}
                    <div className="mb-4 border border-[#9E9EA3] px-2 py-2 ">
                      <p className="text-sm text-gray-600 line-clamp-3">
                        Biography Biography Biography Biography Biography
                        Biography
                      </p>
                    </div>

                    {/* Portfolio and Actions */}
                    <div className="flex items-center justify-between">
                      <button className="text-[#545457] font-medium">
                        Portfolio
                      </button>
                      <div className="flex items-center space-x-4">
                        <button className="text-gray-400 hover:text-red-500">
                          <HeartIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <button className="px-6 py-2 mt-4 w-full text-xl bg-[#CACAD1] text-[#545457] rounded-md hover:bg-gray-300 transition-colors">
                      Invite
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
