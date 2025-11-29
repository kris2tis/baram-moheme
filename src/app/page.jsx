import ProfileList from "@/features/home/components/ProfileList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="w-full">
      <h1>صفحه اصلی</h1>
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        <ProfileList />
      </Suspense>
    </div>
  );
}
