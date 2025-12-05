"use client";
import { toast } from "sonner";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LikeCommentButton } from "@/shared/componetns/common/like-comment-button";
import { like } from "../action/action";
import Image from "next/image";

export const ReceivedCommentsList = ({ list, currentUserId }) => {
  if (!list?.length) {
    <span className="text-[12px]">نظری برای این کاربر وجود ندارد</span>;
  }
  return (
    <div className="grid gap-y-2.5 pt-5 py-10 pb-40">
      <div className="flex items-center gap-x-3 ">
        <div className="relative  h-3 aspect-square">
          <Image src={"/assets/icons/comment.svg"} fill alt="comment-icon" />
        </div>
        <span className="text-[10px]">نظرات کاربران</span>
      </div>
      {list.map((cL) => (
        <ReceivedCommentsCard key={cL.id} data={{ ...cL, currentUserId }} />
      ))}
    </div>
  );
};

const ReceivedCommentsCard = ({
  data: { id, isLiked, content, currentUserId },
}) => {
  const data = { commentId: id, userId: currentUserId };
  const likeActionWithData = like.bind(null, data);
  const [state, likeAction] = useActionState(likeActionWithData, null);
  const { refresh } = useRouter();

  useEffect(() => {
    if (state?.succesMessage) {
      toast.success(state.succesMessage);
      refresh();
    } else if (state?.errorMessage) {
      toast.error(state.errorMessage);
      refresh();
    }
  }, [state]);

  return (
    <div className="flex items-start flex-col gap-y-[5px] border-b border-secondary-500 py-2.5">
      <span className="text-[12px]">{content}</span>
      <form action={likeAction}>
        <LikeCommentButton isLiked={isLiked} />
      </form>
    </div>
  );
};
