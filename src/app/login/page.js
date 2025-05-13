import { Suspense } from "react";
import AuthForm from "./AuthForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
}
