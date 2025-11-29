"use client";

import { signUp } from "@/shared/lib/auth-client";
import { toast } from "sonner";
export default function Signup() {
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const { error, data: res } = await signUp.email(data, {
      onSuccess: () => toast.success("ثبت نام با موفقیت انجام شد"),
      onError: () => toast.error("خطا در ثبت نام"),
    });
  };
  return (
    <form onSubmit={handleOnSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Full Name"
        required
        className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        minLength={8}
        className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
      />
      <button
        type="submit"
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        Create Account
      </button>
    </form>
  );
}
