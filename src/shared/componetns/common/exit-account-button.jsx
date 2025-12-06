"use client";
import { signOut } from "@/shared/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import CircleLoading from "../ui/circle-loading";

export default function ExitAccountButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  return (
    <div
      onClick={async () => {
        setIsLoading(true);
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.success("از حساب خارج شدید");
              push("/auth");
              setIsLoading(false);
            },
            onError: () => {
              toast.error("خطا!");
              setIsLoading(false);
            },
          },
        });
      }}
      className="flex justify-center items-center bg-[#FFB9B9] rounded-md gap-x-1 px-3.5 py-2.5 h-[38px]"
    >
      {isLoading ? (
        <CircleLoading className="*:bg-[#FF1D1D]" />
      ) : (
        <>
          {" "}
          <div className="relative h-4 aspect-square">
            <Image
              src={"/assets/icons/exit-account.svg"}
              fill
              alt="account icon"
            />
          </div>
          <span className="text-[12px] text-[#FF1D1D]">خروج از حساب</span>
        </>
      )}
    </div>
  );
}
