"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GoogleLoginButton from "@/components/GoogleLoginButton";

export default function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "login";
  const isLogin = searchParams.get("mode") === "login";

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        const response = await axios.post(
          "http://localhost:8000/v1.0/user/login/",
          {
            email: data.email,
            password: data.password,
          }
        );
        toast.success(response.data.message || "✅ Logged in successfully!");
      } else {
        const response = await axios.post(
          "http://localhost:8000/v1.0/user/register/",
          {
            email: data.email,
            password: data.password,
            user_type: data.role,
          }
        );
        toast.success(response.data.message || "✅ Registration successful!");
      }
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        JSON.stringify(error?.response?.data) ||
        "Request failed. Please try again.";
      toast.error(`❌ ${message}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid grid-cols-1 md:grid-cols-6 p-12">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Left Panel */}
      <div className="md:col-span-2 flex flex-col justify-center items-center bg-gradient-to-tr from-[#474BC0] to-[#00C7C7] p-8 text-white text-center rounded-tl-2xl rounded-bl-2xl">
        <Image
          src="/signup/Mind.png"
          alt="Mind Illustration"
          width={120}
          height={180}
        />
        <h1 className="mt-8 sm:text-[20px] lg:text-[30px] font-light leading-normal">
          <span className="text-white sm:text-[30px] lg:text-[50px] font-bold">
            Discover <br />
          </span>
          the world's best <br />
          community of
          <br />
          <span className="text-white sm:text-[30px] lg:text-[50px] font-bold">
            Talented
          </span>{" "}
          <br /> and <br />
          business owners
        </h1>
      </div>

      {/* Right Panel */}
      <div className="md:col-span-4 flex flex-col justify-center px-8 py-16">
        <div className="w-full max-w-lg mx-auto">
          <Image
            src="/logo.svg"
            alt="77S Logo"
            width={150}
            height={50}
            className="mb-8"
          />

          {/* Tabs */}
          <div className="flex space-x-12 mb-6">
            <button
              className={`pb-2 text-lg cursor-pointer ${
                !isLogin
                  ? "text-indigo-600 font-bold border-b-4 border-indigo-600"
                  : "text-gray-400"
              }`}
              onClick={() => router.push("/login?mode=signup")}
            >
              Sign up
            </button>

            <button
              className={`pb-2 text-lg cursor-pointer ${
                isLogin
                  ? "text-indigo-600 font-bold border-b-4 border-indigo-600"
                  : "text-gray-400"
              }`}
              onClick={() => router.push("/login?mode=login")}
            >
              Log in
            </button>
          </div>

          <div className="mb-8">
            <GoogleLoginButton userType={watch("role")} />
          </div>

          <p className="text-center text-base text-gray-500 mb-8">
            {isLogin
              ? "or Login with your 77S design account"
              : "Or, Create an account with email."}
          </p>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {!isLogin && (
              <div className="flex flex-col space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer text-base">
                  <input
                    type="radio"
                    value="client"
                    {...register("role", { required: !isLogin })}
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span>Need design</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer text-base">
                  <input
                    type="radio"
                    value="designer"
                    {...register("role", { required: !isLogin })}
                    className="accent-indigo-600 w-5 h-5"
                  />
                  <span>Designer</span>
                </label>
                {errors.role && (
                  <span className="text-red-500 text-base">
                    Please select a role
                  </span>
                )}
              </div>
            )}

            {!isLogin && (
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border rounded-lg px-5 py-3 text-base mb-4 md:mb-0"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border rounded-lg px-5 py-3 text-base"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
              </div>
            )}
            {errors.firstName && (
              <span className="text-red-500 text-base">
                {errors.firstName.message}
              </span>
            )}
            {errors.lastName && (
              <span className="text-red-500 text-base">
                {errors.lastName.message}
              </span>
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg px-5 py-3 text-base"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-base">
                {errors.email.message}
              </span>
            )}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-lg px-5 py-3 text-base"
                {...register("password", {
                  required: "Password is required",
                  minLength: isLogin
                    ? undefined
                    : {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                })}
              />
              <span
                className="absolute right-4 top-4 cursor-pointer text-gray-400 text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <span className="text-red-500 text-base">
                {errors.password.message}
              </span>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-base text-gray-500">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="accent-indigo-600 w-5 h-5" />
                  <span>Remember Me</span>
                </label>
                <span className="cursor-pointer hover:text-indigo-600">
                  Forgot Password?
                </span>
              </div>
            )}

            {!isLogin && (
              <p className="text-sm text-gray-500">
                Use 8 or more characters with a mix of letters, numbers and
                symbols
              </p>
            )}
            {!isLogin && (
              <p className="text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <span className="underline cursor-pointer hover:text-indigo-600">
                  Terms
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer hover:text-indigo-600">
                  Privacy
                </span>
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg text-lg mt-4 cursor-pointer hover:bg-indigo-700"
            >
              {isLogin ? "Log in" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
