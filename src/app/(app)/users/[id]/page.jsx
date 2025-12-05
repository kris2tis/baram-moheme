import { getUser } from "@/services/userServices";
import { headers } from "next/headers";
import { auth } from "@/shared/lib/auth";
import Image from "next/image";
import { ReceivedCommentsList } from "@/features/comment/components/received-comments-list";
import { AddCommentForm } from "@/features/comment/components/add-comment-form";
import FollowForm from "@/features/users/components/follow-form";
import FixedBottomBar from "@/shared/componetns/ui/fixed-bottom-bar";

export default async function UserPage({ params }) {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const { id: authorId } = session?.user || {};
  const user = await getUser({ id, authorId });
  const {
    id: reciverId,
    name,
    commetnsRecived,
    email,
    _count: { followers, following },
    isFollowed,
    image,
  } = user || {};
  return true ? (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex gap-x-3">
        <ProfilePicture src={image} />
        <ProfileStats followers={followers} following={following} />
      </div>
      <ProfileBio data={{ email, name }} />
      <ProfileIntraction data={{ reciverId, authorId, isFollowed }} />

      <ReceivedCommentsList list={commetnsRecived} currentUserId={authorId} />
      <FixedBottomBar className="bottom-25">
        <AddCommentForm reciverId={reciverId} authorId={authorId} />
      </FixedBottomBar>
    </div>
  ) : (
    <span>کاربری یافت نشد</span>
  );
}

function ProfilePicture({ src }) {
  return (
    <div className="relative size-[90px] lg:size-32 aspect-square">
      <Image
        src={src}
        fill
        alt="profile picture"
        className="object-center object-cover  rounded-full"
      />
    </div>
  );
}

function ProfileStats({ followers, following }) {
  return (
    <div className="flex justify-center w-full items-center gap-x-10">
      {[
        { title: "دنبال کننده", count: following || 0 },
        { title: "دنبال شونده", count: followers || 0 },
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
      <span className="text-[12px] font-bold">{name || ""}</span>
      <span className="text-[10px] text-secondary-300">{email || ""}</span>
    </div>
  );
}

function ProfileIntraction({ data: { reciverId, authorId, isFollowed } }) {
  return (
    <div className="flex w-full justify-between">
      <FollowForm
        data={{
          followerId: authorId,
          followingId: reciverId,
          isFollowed,
        }}
      />
    </div>
  );
}
