import SigninForm from "@/features/signin/components/SigninForm";
import { auth } from "@/shared/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const sessiton = await auth.api.getSession({ headers: await headers() });
  if (sessiton?.user?.id) {
    return redirect("/");
  }

  return <SigninForm />;
}
