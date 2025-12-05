"use client";

import { signIn } from "@/shared/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "../ui/circle-loading";

// const errorCodes = {
//   INVALID_EMAIL_OR_PASSWORD: "ایمیل با رمز عبور اشتباه است",
// };

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  //   Handle Error Message
  //   const getErrorMessage = (code) => {
  //     return errorCodes[code];
  //   };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await signIn.social(
          { provider: "google" },
          {
            onSuccess: () => {
              setIsLoading(false);
            },

            onError: (e) => {
              toast.error("خطا در زمان احراز هویت شدن");
              setIsLoading(false);
            },
          }
        );
      }}
    >
      <button
        disabled={isLoading}
        className="w-full bg-white text-black flex items-center justify-center gap-x-1 py-3 rounded-[10px] max-h-[45px]"
      >
        {isLoading ? (
          <LoadingButton />
        ) : (
          <>
            <div className="relative h-[19px] aspect-square">
              <Image
                src={"/assets/icons/google-icon.svg"}
                fill
                alt="google-icon"
              />
            </div>
            <span className="font-medium">ورود با گوگل</span>
          </>
        )}
      </button>
    </form>
  );
}
