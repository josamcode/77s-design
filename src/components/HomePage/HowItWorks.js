'use client';

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title Centered at Top */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#FF5F6B] mb-12">
          How it works & Experience
        </h2>

        {/* Contest Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left Column */}
          <div>
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
          <div className="p-4">
            <Image
              src="/HomePage/012.png"
              alt="How it works illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Hiring Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column (Image) */}
          <div className="p-4">
            <Image
              src="/HomePage/011.png"
              alt="Hiring process illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Right Column (Text) */}
          <div>
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
