import { getAllUser } from "@/services/userServices";
import ProfileCard from "./ProfileCard";

export default async function ProfileList() {
  const { userList: users } = await getAllUser();
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-3">
      {users?.length && Array.isArray(users) ? (
        users.map((u) => <ProfileCard key={u.id} {...u} />)
      ) : (
        <span className="text-[14px]">کاربری وجود ندارد</span>
      )}
    </div>
  );
}
