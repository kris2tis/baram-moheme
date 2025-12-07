import { Suspense } from "react";
import { UsersList } from "@/features/users/components/users-list";
import UserLoading from "@/features/users/components/user-list-loading";

export default async function Home() {
  return (
    <div>
      <div className=" border-b border-b-secondary-600 pb-2.5">
        <h1>صفحه اصلی</h1>
      </div>
      <Suspense fallback={<UserLoading />}>
        <UsersList />
      </Suspense>
    </div>
  );
}
