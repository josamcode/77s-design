"use client";

import { useState } from "react";

export default function ReferralBox() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const referralLink = "www.77sdesign.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto bg-[#FF5F6B] rounded-lg p-8">
        <h2 className="text-[#3D3D3F] font-semibold text-lg mb-6">
          Refer new Clients and you both get a cashback code $50 promotion free.
        </h2>

        {/* Referral Link */}
        <div className="mb-4">
          <label className="block text-white mb-2">
            Please invite new client
          </label>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-[auto_120px]">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="rounded px-4 py-2 w-full bg-white text-gray-800"
            />
            <button
              onClick={handleCopy}
              className="bg-gray-300 hover:bg-gray-400 text-sm py-2 px-4 rounded transition"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* Email Invitation */}
        <div>
          <label className="block text-white mb-2">Add Email addresses</label>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-[auto_120px]">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded px-4 py-2 w-full bg-white text-gray-800"
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-sm py-2 px-4 rounded transition">
              Invite Client
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
