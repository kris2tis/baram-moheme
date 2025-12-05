import { getAllUser } from "@/services/userServices";
import Image from "next/image";
import Link from "next/link";
import defaultAvatar from "@/shared/assets/default-avatar.jpg";

export async function UsersList() {
  const { userList: users } = await getAllUser();
 
  if (!users?.length) {
    return <span className="text-[14px]">کاربری وجود ندارد</span>;
  }
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 gap-y-4 py-2.5">
      {users.map((u) => (
        <UsersCard key={u.id} {...u} />
      ))}
    </div>
  );
}

const UsersCard = ({ id, name, image }) => {
  return (
    <div key={id} className="flex flex-col gap-y-3 items-center py-2">
      <Link href={`/users/${id}`}>
        <div className="relative size-12">
          <Image
            src={image || defaultAvatar}
            fill
            alt="user profile picture"
            className="object-center object-cover  rounded-full "
          />
        </div>
      </Link>
      <div>
        <span className="text-[12px]">{name}</span>
      </div>
    </div>
  );
};
