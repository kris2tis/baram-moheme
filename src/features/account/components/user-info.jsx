"use client";

import { useSession } from "@/shared/lib/auth-client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { updateProfileSchema } from "@/app/schema";
import { updateProfileApi } from "../services/services";
import { toast } from "sonner";
import TextField from "@/shared/componetns/ui/text-field";
import Button from "@/shared/componetns/ui/button";
import CircleLoading from "@/shared/componetns/ui/circle-loading";
import AccountLoading from "./account-loading";
export default function UserInfo() {
  const { data, isPending } = useSession();

  if (isPending) {
    return <AccountLoading />;
  }
  const { id, name, email, image } = data.user || {};
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="relative size-18 rounded-full overflow-hidden">
        <Image src={image || ""} fill alt="user profile picture" />
      </div>

      <UpdateProfileForm data={{ name, email, id }} />
    </div>
  );
}

function UpdateProfileForm({ data }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    resolver: zodResolver(updateProfileSchema),
    mode: "all",
  });
  const [isLoading, setIsLoading] = useState(false);
  const updateProfileHandler = async (e) => {
    const newData = {
      id: data.id,
      name: e.name,
      emial: e.email,
    };
    try {
      setIsLoading(true);
      const message = await updateProfileApi(newData);
      toast.success(message);
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error?.response?.data;
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(updateProfileHandler)}>
      <div className="flex flex-col gap-y-6 w-full">
        <div className="flex flex-col gap-y-4">
          <TextField
            name={"name"}
            errors={errors}
            register={register}
            label={"نام و نام خانوادگی"}
          />
          <TextField
            name={"email"}
            errors={errors}
            register={register}
            label={"ایمیل"}
          />
        </div>
        <Button className="" disabled={isLoading} variant="primary">
          {isLoading ? (
            <CircleLoading className="*:bg-white" />
          ) : (
            "ذخیره سازی اطلاعات"
          )}
        </Button>
      </div>
    </form>
  );
}

{
  /* <button
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
      </button> */
}
