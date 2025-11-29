import UsersList from "@/features/users/components/UsersList";
import { Suspense } from "react";

export default function UersPage() {
  return (
    <div>
      <h1>صفحه کاربران</h1>
      <Suspense fallback={<span>درحال گرفتن کاربران</span>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
