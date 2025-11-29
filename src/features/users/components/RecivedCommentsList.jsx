"use client";
import { likeCommentApi } from "@/services/commentServices";
import Image from "next/image";
import { toast } from "sonner";

export default function RecivedCommentsList({ list, currentUserId }) {
  const likeCommentHandler = async (id) => {
    const data = {
      commentId: id,
      userId: currentUserId,
    };
    try {
      const message = await likeCommentApi(data);
      toast.message(message);
    } catch (error) {
      const errorMessage = error?.response?.data;
      toast.error(errorMessage);
    }
  };
  return (
    <div className="grid gap-y-3 border-t  border-t-[#4f4f4f] py-3">
      {list?.length && Array.isArray(list) ? (
        list.map((cL) => {
          const { id, content } = cL;
          return (
            <div className="flex items-start flex-col gap-y-2" key={id}>
              <span className="text-[12px]">{content}</span>
              <div
                onClick={() => likeCommentHandler(id)}
                className="relative h-[15px] aspect-square cursor-pointer  "
              >
                <Image src={"/like.svg"} fill alt="like icon" />
              </div>
            </div>
          );
        })
      ) : (
        <span className="text-[10px]">نظرات نیست</span>
      )}
    </div>
  );
}
