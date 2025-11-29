import AddComment from "@/features/users/components/AddComment";
import RecivedCommentsList from "@/features/users/components/RecivedCommentsList";
import { getUser } from "@/services/userServices";
import { headers } from "next/headers";
import { auth } from "@/shared/lib/auth";
import Follow from "@/features/users/components/Follow";

export default async function UserPage({ params }) {
  const { id } = await params;
  const user = await getUser(id);
  const {
    id: reciverId,
    name,
    commetnsRecived,
    email,
    followers,
    following,
  } = user || {};
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id: authorId } = session?.user || {};

  return true ? (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-3 justify-between py-2">
        <div className="flex gap-x-3 gap-y-3">
          <ProfilePicture />
          <ProfileStats followers={followers} following={following} />
        </div>
        <ProfileBio data={{ email, name }} />
        <ProfileIntraction data={{ reciverId, authorId }} />
      </div>
      <RecivedCommentsList list={commetnsRecived} currentUserId={authorId} />
    </div>
  ) : (
    <span>کاربری یافت نشد</span>
  );
}

function ProfilePicture() {
  return (
    <div className="size-[90px] lg:size-32 aspect-square bg-gray-500 rounded-full"></div>
  );
}

function ProfileStats({ followers, following }) {
  return (
    <div className="flex justify-center w-full items-center gap-x-10">
      {[
        { title: "دنبال کننده", count: following?.length || 0 },
        { title: "دنبال شونده", count: followers?.length || 0 },
      ].map((f, index) => (
        <div key={index} className="flex flex-col items-center gap-y-2">
          <span className="text-[16px] font-bold">{f.count}</span>
          <span className="text-[12px]">{f.title}</span>
        </div>
      ))}
    </div>
  );
}

function ProfileBio({ data: { email, name } }) {
  return (
    <div className="flex flex-col gap-y-1">
      <span className="text-[12px] ">{name || ""}</span>
      <span className="text-[12px] text-gray-400">{email || ""}</span>
    </div>
  );
}

function ProfileIntraction({ data: { reciverId, authorId } }) {
  return (
    <div className="flex w-full justify-between">
      <AddComment reciverId={reciverId} authorId={authorId} />
      <Follow data={{ followerId: authorId, followingId: reciverId }} />
    </div>
  );
}
