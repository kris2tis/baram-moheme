import LoginButton from "@/shared/componetns/common/login-button";
import { auth } from "@/shared/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
export default async function SigninPage() {
  const sessiton = await auth.api.getSession({ headers: await headers() });
  if (sessiton?.user?.id) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col gap-y-8 h-screen">
      <div className="w-full h-8/12 rounded-[0px_0px_29px_29px]  bg-[url(/assets/picture/login-picture.svg)] bg-center bg-no-repeat bg-cover"></div>
      <div className="w-full h-4/12 px-2.5 flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-2">
          <div className="text-[26px]">
            <span>برام مهمه</span>
            <h1 className="font-bold">پس بگو بم</h1>
          </div>
          <span className="text-[#D2D2D2] ">
            اینجا میتونی نظرتو درمورد هرشخصی بنویسی.
          </span>
        </div>
        <LoginButton />
      </div>
    </div>
  );
}
