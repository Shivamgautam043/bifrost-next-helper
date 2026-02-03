import { Suspense } from "react";
import LoginForm from "../../components/LoginForm";
import { TextHoverEffect } from "../../components/text-hover-effect";

export function LoginPage() {
  return (
    <div className="max-w-full mx-auto min-h-screen grid grid-cols-1 w-full place-items-center pt-24 dark:bg-black">
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
      <TextHoverEffect text="Bifrost" />
    </div>
  );
}