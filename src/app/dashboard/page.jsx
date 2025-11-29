"use client";
import { signOut, useSession } from "@/shared/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function ProfilePage() {
  const { data, isPending } = useSession();
  return !isPending ? (
    <div>
      <h1>داشبورد کاربر</h1>
      <div className="my-3 flex flex-col gap-y-2">
        <span>{data?.user?.name || ""}</span>
        <span>{data?.user?.email || ""}</span>
      </div>
      <button
        onClick={async () => {
          await signOut({
            fetchOptions: {
              onSuccess: () => {
                toast.success("از حساب خارج شدید");
                redirect("/");
              },
            },
          });
        }}
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        خروج از حساب
      </button>
    </div>
  ) : (
    <span>درحال گرفتن اطلاعات</span>
  );
}
