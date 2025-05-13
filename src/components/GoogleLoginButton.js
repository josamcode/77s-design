"use client";

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function GoogleLoginButton({ userType }) {
  const router = useRouter();

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Sending raw token:", credentialResponse.credential);

    try {
      const res = await axios.post(
        "http://localhost:8000/v1.0/user/auth/google/",
        {
          auth_token: credentialResponse.credential,
          user_type: userType,
        }
      );

      toast.success("Google Login Successful");
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Google Login Failed");
    }
  };

  return (
    <GoogleLogin
      onSuccess={handleGoogleLogin}
      onError={() => {
        toast.error("❌ Google Login Failed");
      }}
    />
  );
}
