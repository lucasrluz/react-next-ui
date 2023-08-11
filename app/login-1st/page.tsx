"use client";

import { EmailInput } from "./components/emailInput";
import { ForgetPasswordAndCreateAccountLink } from "./components/forgetPasswordAndCreateAccountLink";
import { PasswordInput } from "./components/passwordInut";

export function LoginPage() {
  return (
    <main className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center rounded-md border border-slate-100 p-5 pt-3 shadow-2xl">
        <h1 className="text-3xl font-bold text-slate-800">Sign in</h1>
        <EmailInput />
        <PasswordInput />
        <ForgetPasswordAndCreateAccountLink />
        <button className="mt-4 h-10 w-96 rounded-md bg-violet-600 text-white hover:bg-violet-700 focus:bg-violet-800">
          Sign in
        </button>
      </div>
    </main>
  );
}
