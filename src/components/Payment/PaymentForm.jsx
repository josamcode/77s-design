"use client";

import { useState } from "react";
import Image from "next/image";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+20",
    companyName: "",
    taxId: "",
    billingName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  // test 2

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentMethod = (method) => {
    // Handle payment method selection
    console.log(`Selected payment method: ${method}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-left text-[#3D3D3F] mb-8">
        Payment Method
      </h1>

      <form className="space-y-8">
        {/* Personal Information */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-lg font-medium text-[#545457]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-lg font-medium text-[#545457]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-[#545457]"
            >
              Phone number
            </label>
            <div className="mt-3 flex">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="rounded-l-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="+20">+20</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="flex-1 py-3 rounded-r-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="companyName"
                className="block text-lg font-medium text-[#545457]"
              >
                Company Name (opt.)
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="taxId"
                className="block text-lg font-medium text-[#545457]"
              >
                Tax ID
              </label>
              <input
                type="text"
                id="taxId"
                name="taxId"
                value={formData.taxId}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Billing Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium text-[#3D3D3F]">Billing Info</h2>

          <div>
            <label
              htmlFor="billingName"
              className="block text-lg font-medium text-[#545457]"
            >
              Billing Name
            </label>
            <input
              type="text"
              id="billingName"
              name="billingName"
              value={formData.billingName}
              onChange={handleInputChange}
              className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-lg font-medium text-[#545457]"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-lg font-medium text-[#545457]"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-lg font-medium text-[#545457]"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="country"
                className="block text-lg font-medium text-[#545457]"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select a country</option>
                <option value="EG">Egypt</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-lg font-medium text-[#545457]"
              >
                Zip code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="mt-3 block w-full py-3 rounded-md border-[#545457] border-2 px-3 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => handlePaymentMethod("paypal")}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <span className="text-lg font-medium">Paypal</span>
              <div className="w-16 h-16 bg-[#00457C] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">PayPal</span>
              </div>
              <button className="bg-[#FF4D6A] text-white px-6 py-2 rounded-md hover:bg-[#FF3557] transition-colors">
                CONTINUE
              </button>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handlePaymentMethod("card")}
            className="p-6 border rounded-lg hover:shadow-md transition-shadow text-center"
          >
            <div className="flex flex-col items-center space-y-4">
              <span className="text-lg font-medium">Bank card</span>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-[#1A1F71] rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-[#EB001B] rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">MC</span>
                </div>
              </div>
              <button className="bg-[#FF4D6A] text-white px-6 py-2 rounded-md hover:bg-[#FF3557] transition-colors">
                CONTINUE
              </button>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
