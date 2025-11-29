"use client";

import { signIn } from "@/shared/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

// const errorCodes = {
//   INVALID_EMAIL_OR_PASSWORD: "ایمیل با رمز عبور اشتباه است",
// };

export default function SigninForm() {
  const [isLoading, setIsLoading] = useState();

  //   Handle Error Message
  //   const getErrorMessage = (code) => {
  //     return errorCodes[code];
  //   };
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn.social(
          { provider: "google" },
          {
            onError: (e) => {
              console.log(e);

              toast.error("خطا در زمان احراز هویت شدن");
            },
          }
        );
      }}
    >
      <button>ورود با گوگل</button>
    </form>
  );
}
